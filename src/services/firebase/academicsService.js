import { db } from './config';
import { ref, get, set, update, remove, push } from 'firebase/database';

// Get All Academic Records
export const getAllAcademicRecords = async () => {
  try {
    const academicsRef = ref(db, 'academics');
    const snapshot = await get(academicsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No academic data available');
      return null;
    }
  } catch (error) {
    console.error('Get Academics Error:', error.message);
    throw new Error(error.message);
  }
};

// Add New Academic Record
export const addAcademicRecord = async (academicData) => {
  try {
    const academicsRef = ref(db, 'academics');
    const newAcademicRef = push(academicsRef);
    await set(newAcademicRef, academicData);
  } catch (error) {
    console.error('Add Academic Error:', error.message);
    throw new Error(error.message);
  }
};

// Update Academic Record
export const updateAcademicRecord = async (academicId, academicData) => {
  try {
    const academicRef = ref(db, `academics/${academicId}`);
    await update(academicRef, academicData);
  } catch (error) {
    console.error('Update Academic Error:', error.message);
    throw new Error(error.message);
  }
};

// Delete Academic Record
export const deleteAcademicRecord = async (academicId) => {
  try {
    const academicRef = ref(db, `academics/${academicId}`);
    await remove(academicRef);
  } catch (error) {
    console.error('Delete Academic Error:', error.message);
    throw new Error(error.message);
  }
};
