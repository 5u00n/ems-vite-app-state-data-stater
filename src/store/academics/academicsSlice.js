import { getAllAcademicRecords, addAcademicRecord, updateAcademicRecord, deleteAcademicRecord } from '../../services/firebase/academicsService';

const academicsSlice = (set) => ({
  data: null,
  loading: false,
  error: null,

  setLoading: (loading) => set(() => ({ loading })),
  setData: (data) => set(() => ({ data, loading: false })),
  setError: (error) => set(() => ({ error, loading: false })),

  fetchAllAcademicRecords: async () => {
    set(() => ({ loading: true }));
    try {
      const data = await getAllAcademicRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  addAcademicRecord: async (academicData) => {
    set(() => ({ loading: true }));
    try {
      await addAcademicRecord(academicData);
      const data = await getAllAcademicRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  updateAcademicRecord: async (academicId, academicData) => {
    set(() => ({ loading: true }));
    try {
      await updateAcademicRecord(academicId, academicData);
      const data = await getAllAcademicRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  deleteAcademicRecord: async (academicId) => {
    set(() => ({ loading: true }));
    try {
      await deleteAcademicRecord(academicId);
      const data = await getAllAcademicRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  }
});

export default academicsSlice;
