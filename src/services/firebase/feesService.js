import { db } from './config';
import { ref, get, set, update, remove, push } from 'firebase/database';

// Get All Fees Records
export const getAllFeesRecords = async () => {
  try {
    const feesRef = ref(db, 'fees');
    const snapshot = await get(feesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No fees data available');
      return null;
    }
  } catch (error) {
    console.error('Get Fees Error:', error.message);
    throw new Error(error.message);
  }
};

// Add New Fees Record
export const addFeesRecord = async (feesData) => {
  try {
    const feesRef = ref(db, 'fees');
    const newFeesRef = push(feesRef);
    await set(newFeesRef, feesData);
  } catch (error) {
    console.error('Add Fees Error:', error.message);
    throw new Error(error.message);
  }
};

// Update Fees Record
export const updateFeesRecord = async (feesId, feesData) => {
  try {
    const feesRef = ref(db, `fees/${feesId}`);
    await update(feesRef, feesData);
  } catch (error) {
    console.error('Update Fees Error:', error.message);
    throw new Error(error.message);
  }
};

// Delete Fees Record
export const deleteFeesRecord = async (feesId) => {
  try {
    const feesRef = ref(db, `fees/${feesId}`);
    await remove(feesRef);
  } catch (error) {
    console.error('Delete Fees Error:', error.message);
    throw new Error(error.message);
  }
};
