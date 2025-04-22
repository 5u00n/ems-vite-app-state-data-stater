import { getAllFeesRecords, addFeesRecord, updateFeesRecord, deleteFeesRecord } from '../../services/firebase/feesService';

const feesSlice = (set) => ({
  data: null,
  loading: false,
  error: null,

  setLoading: (loading) => set(() => ({ loading })),
  setData: (data) => set(() => ({ data, loading: false })),
  setError: (error) => set(() => ({ error, loading: false })),

  fetchAllFeesRecords: async () => {
    set(() => ({ loading: true }));
    try {
      const data = await getAllFeesRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  addFeesRecord: async (feesData) => {
    set(() => ({ loading: true }));
    try {
      await addFeesRecord(feesData);
      const data = await getAllFeesRecords();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  }
});

export default feesSlice;
