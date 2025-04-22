import { getAllUsers, getUserById, addUser, updateUser, deleteUser } from '../../services/firebase/usersService';

const usersSlice = (set) => ({
  data: null,
  loading: false,
  error: null,

  setLoading: (loading) => set(() => ({ loading })),
  setData: (data) => set(() => ({ data, loading: false })),
  setError: (error) => set(() => ({ error, loading: false })),

  fetchAllUsers: async () => {
    set(() => ({ loading: true }));
    try {
      const data = await getAllUsers();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  fetchUserById: async (userId) => {
    set(() => ({ loading: true }));
    try {
      const data = await getUserById(userId);
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  addUser: async (userData) => {
    set(() => ({ loading: true }));
    try {
      await addUser(userData);
      const data = await getAllUsers();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  updateUser: async (userId, userData) => {
    set(() => ({ loading: true }));
    try {
      await updateUser(userId, userData);
      const data = await getAllUsers();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  deleteUser: async (userId) => {
    set(() => ({ loading: true }));
    try {
      await deleteUser(userId);
      const data = await getAllUsers();
      set(() => ({ data, loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  }
});

export default usersSlice;
