import { db } from './config';
import { ref, get, set, update } from 'firebase/database';
import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';

// Get Current User Profile Data
export const getProfile = async () => {
  try {
    const user = await new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) resolve(user);
        else reject(new Error('User not authenticated'));
      });
    });

    console.log('Auth ', auth);
    console.log('User:', user);
    if (!user) throw new Error('User not authenticated');

    const userRef = ref(db, `users/${user.uid}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No profile data available');
      return null;
    }
  } catch (error) {
    console.error('Get Profile Error:', error.message);
    //throw new Error(error.message);
    return null; 
  }
};

// Update Current User Profile Data
export const updateProfile = async (profileData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');

    const userRef = ref(db, `users/${user.uid}`);
    await update(userRef, profileData);
  } catch (error) {
    console.error('Update Profile Error:', error.message);
    throw new Error(error.message);
  }
};
