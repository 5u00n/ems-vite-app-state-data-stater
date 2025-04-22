import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './config';

// Google Popup Login
export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    return null;
  }
};

// Email Login
export const emailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Email Login Error:', error.message);
    throw new Error(error.message);
  }
};

// Email Registration
export const emailRegister = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Email Registration Error:', error.message);
    throw new Error(error.message);
  }
};

export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

// Sign Out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout Error:', error);
  }
};
