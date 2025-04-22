import { getAttendanceByClass, addAttendance, updateAttendance, deleteAttendance } from '../../services/firebase/attendanceService';

const attendanceSlice = (set) => ({
  data: null,
  loading: false,
  error: null,

  setLoading: (loading) => set(() => ({ loading })),
  setData: (data) => set(() => ({ data, loading: false })),
  setError: (error) => set(() => ({ error, loading: false })),

  fetchAttendanceByClass: async (classId) => {
    set(() => ({ loading: true }));
    try {
      const data = await getAttendanceByClass(classId);
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  addAttendance: async (classId, attendanceData) => {
    set(() => ({ loading: true }));
    try {
      await addAttendance(classId, attendanceData);
      const data = await getAttendanceByClass(classId);
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  }
});

export default attendanceSlice;
