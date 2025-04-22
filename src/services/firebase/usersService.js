import { db } from './config';
import { ref, get, set, update, remove, push } from 'firebase/database';

// Get All Users
export const getAllUsers = async () => {
  try {
    const usersRef = ref(db, 'users');
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No users data available');
      return null;
    }
  } catch (error) {
    console.error('Get All Users Error:', error.message);
    throw new Error(error.message);
  }
};

// Get User by ID
export const getUserById = async (userId) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No user data available');
      return null;
    }
  } catch (error) {
    console.error('Get User by ID Error:', error.message);
    throw new Error(error.message);
  }
};

// Add New User
export const addUser = async (userData) => {
  try {
    const usersRef = ref(db, 'users');
    const newUserRef = push(usersRef);
    await set(newUserRef, userData);
  } catch (error) {
    console.error('Add User Error:', error.message);
    throw new Error(error.message);
  }
};

// Update User Data
export const updateUser = async (userId, userData) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    await update(userRef, userData);
  } catch (error) {
    console.error('Update User Error:', error.message);
    throw new Error(error.message);
  }
};

// Delete User
export const deleteUser = async (userId) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    await remove(userRef);
  } catch (error) {
    console.error('Delete User Error:', error.message);
    throw new Error(error.message);
  }
};
