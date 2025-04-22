import { db } from './config';
import { ref, get, set, update } from 'firebase/database';

// Get School Data
export const getSchoolData = async () => {
    try {
        const schoolRef = ref(db, 'school');
        const snapshot = await get(schoolRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No school data available');
            return null;
        }
    } catch (error) {
        console.error('Get School Data Error:', error.message);
        throw new Error(error.message);
    }
};

// Update School Data
export const updateSchoolData = async (schoolData) => {
    try {
        const schoolRef = ref(db, 'school');
        await update(schoolRef, schoolData);
    } catch (error) {
        console.error('Update School Data Error:', error.message);
        throw new Error(error.message);
    }
};

// Add New School Data
export const addSchoolData = async (schoolData) => {
    try {
        const schoolRef = ref(db, 'school');
        await set(schoolRef, schoolData);
    } catch (error) {
        console.error('Add School Data Error:', error.message);
        throw new Error(error.message);
    }
};
