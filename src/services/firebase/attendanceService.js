
import { db } from './config';
import { ref, get, set, update, remove, push } from 'firebase/database';

// Get Attendance for a Class
export const getAttendanceByClass = async (classId) => {
  try {
    const attendanceRef = ref(db, `attendance/${classId}`);
    const snapshot = await get(attendanceRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No attendance data available');
      return null;
    }
  } catch (error) {
    console.error('Get Attendance Error:', error.message);
    throw new Error(error.message);
  }
};

// Add Attendance Record
export const addAttendance = async (classId, attendanceData) => {
  try {
    const attendanceRef = ref(db, `attendance/${classId}`);
    const newAttendanceRef = push(attendanceRef);
    await set(newAttendanceRef, attendanceData);
  } catch (error) {
    console.error('Add Attendance Error:', error.message);
    throw new Error(error.message);
  }
};

// Update Attendance Record
export const updateAttendance = async (classId, attendanceId, attendanceData) => {
  try {
    const attendanceRef = ref(db, `attendance/${classId}/${attendanceId}`);
    await update(attendanceRef, attendanceData);
  } catch (error) {
    console.error('Update Attendance Error:', error.message);
    throw new Error(error.message);
  }
};

// Delete Attendance Record
export const deleteAttendance = async (classId, attendanceId) => {
  try {
    const attendanceRef = ref(db, `attendance/${classId}/${attendanceId}`);
    await remove(attendanceRef);
  } catch (error) {
    console.error('Delete Attendance Error:', error.message);
    throw new Error(error.message);
  }
};
