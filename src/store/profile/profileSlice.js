import { getProfile, updateProfile } from '../../services/firebase/profileService';

const profileSlice = (set) => ({
    profile: {
        displayName: '',
        name: '',
        aadhaar: '',
        for_school: '',
        pass: '',
        status: '',
        terms: false,
        email: '',
        role: '',
        type: '',
        position: '',
        photoURL: '',
        uid: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        dateOfBirth: '',
        loading: false,
        error: null,
    },

    setProfileLoading: (loading) => set((state) => ({
        profile: { ...state.profile, loading }
    })),

    setProfileData: (profileData) => {
        
        const getInitials = (nameParts) => {
            return nameParts.map(part => part.charAt(0).toUpperCase()).join('');
        };

        const nameParts = (profileData.name || '').split(' ');
        const firstName = nameParts[0] || '';
        const otherParts = nameParts.slice(1);
        const otherInitials = getInitials(otherParts);

        const userData = {
            displayName: firstName + (otherInitials ? ' ' + otherInitials : ''),
            name: profileData.name || '',
            aadhaar: profileData.aadhaar || '',
            for_school: profileData.for_school || '',
            pass: profileData.pass || '',
            status: profileData.status || '',
            terms: profileData.terms || false,
            email: profileData.email || '',
            role: profileData.role || '',
            type: profileData.type || '',
            position: profileData.position || '',
            photoURL: profileData.photoURL || profileData.url || '',
            uid: profileData.uid || profileData.id || '',
            phoneNumber: profileData.phoneNumber || profileData.phone || '',
            address: profileData.address || '',
            city: profileData.city || '',
            state: profileData.state || '',
            zip: profileData.zip || '',
            country: profileData.country || '',
            dateOfBirth: profileData.dateOfBirth || profileData.dob || '',
        };

        const combinedData = { ...userData, ...profileData };

        set((state) => ({
            profile: { ...state.profile, ...combinedData, loading: false }

        }))
    },

    setProfileError: (error) => set((state) => ({
        profile: { ...state.profile, error, loading: false }
    })),

    fetchProfile: async () => {
        set((state) => ({ profile: { ...state.profile, loading: true } }));
        try {
            const data = await getProfile();
            set((state) => ({ profile: { ...state.profile, data: data, loading: false } }));
        } catch (error) {
            set((state) => ({ profile: { ...state.profile, error: error.message, loading: false } }));
        }
    },

    updateProfile: async (profileData) => {
        set((state) => ({ profile: { ...state.profile, loading: true } }));
        try {
            await updateProfile(profileData);
            set((state) => ({ profile: { ...state.profile, ...profileData, loading: false } }));
        } catch (error) {
            set((state) => ({ profile: { ...state.profile, error: error.message, loading: false } }));
        }
    },

    initProfile: async () => {
        set((state) => ({ profile: { ...state.profile, loading: true } }));
        try {
            const data = await getProfile();
            // Function to get initials from name parts
            const getInitials = (nameParts) => {
                return nameParts.map(part => part.charAt(0).toUpperCase()).join('');
            };

            // Split the full name and format displayName
            const nameParts = (data.name || '').split(' ');
            const firstName = nameParts[0] || '';
            const otherParts = nameParts.slice(1);
            const otherInitials = getInitials(otherParts);

            const userData = {
                displayName: firstName + (otherInitials ? ' ' + otherInitials : ''),
                name: data.name || '',
                aadhaar: data.aadhaar || '',
                for_school: data.for_school || '',
                pass: data.pass || '',
                status: data.status || '',
                terms: data.terms || false,
                email: data.email || '',
                role: data.role || '',
                type: data.type || '',
                position: data.position || '',
                photoURL: data.photoURL || data.url || '',
                uid: data.uid || data.id || '',
                phoneNumber: data.phoneNumber || data.phone || '',
                address: data.address || '',
                city: data.city || '',
                state: data.state || '',
                zip: data.zip || '',
                country: data.country || '',
                dateOfBirth: data.dateOfBirth || data.dob || '',
            };
            set((state) => ({ profile: { ...state.profile, ...userData, loading: false } }));
        } catch (error) {
            set((state) => ({ profile: { ...state.profile, error: error.message, loading: false } }));
        }
    }
});

export default profileSlice;
