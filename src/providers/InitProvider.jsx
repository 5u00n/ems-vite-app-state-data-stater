import { useEffect } from "react";
import useStore from "../store";
import { db, auth } from "../services/firebase/config";
import { ref, onValue, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const InitProvider = ({ children }) => {
    const {
        setSchoolData,
        setProfileData,
        setNotifications,
        initAuth,
        isOnline,
        setIsOnline,
        loadOfflineData,
    } = useStore();

    // Function to check Firebase connectivity
    const checkFirebaseConnection = async () => {
        try {
            if (!navigator.onLine) {
                throw new Error("No internet connection");
            }
            const testRef = ref(db, "/schools"); // Firebase system path for connectivity
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Connection timeout")), 5000)
            );
            const snapshot = await Promise.race([get(testRef), timeoutPromise]);
            
            if (snapshot.exists() && snapshot.val()) {
                setIsOnline(true);
            } else {
                throw new Error("No Firebase connection");
            }
        } catch (error) {
            console.error("Firebase connection error:", error.message);
            setIsOnline(false);
            loadOfflineData(); // Load offline data if Firebase is unreachable
        }
    };

    useEffect(() => {
        // Check Firebase connection every 10 seconds
        const interval = setInterval(checkFirebaseConnection, 10000);
        checkFirebaseConnection(); // Initial check

        // Listen for internet connection changes
        const updateOnlineStatus = () => {
            checkFirebaseConnection(); // Re-check Firebase if network changes
        };

        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        // Firebase Auth listener
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                ///initAuth(user);

                let unsubscribeSchool = () => { };
                let unsubscribeSchoolUser = () => { };
                let unsubscribeProfile = () => { };
                let unsubscribeNotifications = () => { };

                // Listen for profile data changes
                const profileRef = ref(db, `users/${user.uid}`);
                unsubscribeProfile = onValue(profileRef, (snapshot) => {
                    if (snapshot.exists()) {
                        const profile = snapshot.val();
                        setProfileData(profile);

                        if (profile.for_school) {
                            const schoolUserRef = ref(db, `schools/${profile.for_school}/users/${profile.type}/${profile.uid || profile.id}`);
                            unsubscribeSchoolUser = onValue(schoolUserRef, (snapshot) => {
                                if (snapshot.exists()) {
                                    setProfileData(snapshot.val());
                                }
                            });

                            const schoolRef = ref(db, `schools/${profile.for_school}`);
                            unsubscribeSchool = onValue(schoolRef, (snapshot) => {
                                if (snapshot.exists()) {
                                    setSchoolData(snapshot.val());
                                }
                            });
                        }
                    }
                });

                // Listen for notifications
                const notificationsRef = ref(db, `notifications/${user.uid}`);
                unsubscribeNotifications = onValue(notificationsRef, (snapshot) => {
                    if (snapshot.exists()) {
                        setNotifications(Object.values(snapshot.val()));
                    }
                });

                return () => {
                    unsubscribeSchool();
                    unsubscribeProfile();
                    unsubscribeSchoolUser();
                    unsubscribeNotifications();
                };
            }
        });

        return () => {
            unsubscribeAuth();
            clearInterval(interval);
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    return children;
};

export default InitProvider;
