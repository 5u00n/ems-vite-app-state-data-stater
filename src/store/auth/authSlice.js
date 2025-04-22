//import { initializeAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { googleSignIn, emailLogin, emailRegister, logout, onAuthStateChanged } from '../../services/firebase/authService';

const authSlice = (set) => ({
  auth: {
    user: null,
    loading: false,
    error: null,
    isLoggedOut: true,
  },

  setLoading: (loading) => set((state) => ({ auth: { ...state.auth, loading } })),
  setUser: (user) => set((state) => ({ auth: { ...state.auth, user, loading: false } })),
  setError: (error) => set((state) => ({ auth: { ...state.auth, error, loading: false } })),

  googleLogin: async () => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      const user = await googleSignIn();
      set((state) => ({ auth: { ...state.auth, user, loading: false, isLoggedOut: false } }));
      return { success: true, path: '/dashboard' };
    } catch (error) {
      set((state) => ({ auth: { ...state.auth, error: error.message, loading: false } }));
      return { success: false, path: '/login' };
    }
  },

  emailLogin: async (email, password) => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      const user = await emailLogin(email, password);
      set((state) => ({ auth: { ...state.auth, user, loading: false, isLoggedOut: false } }));
    } catch (error) {
      set((state) => ({ auth: { ...state.auth, error: error.message, loading: false } }));
    }
  },

  emailRegister: async (email, password) => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      const user = await emailRegister(email, password);
      set((state) => ({ auth: { ...state.auth, user, loading: false } }));
    } catch (error) {
      set((state) => ({ auth: { ...state.auth, error: error.message, loading: false } }));
    }
  },
  initAuth: async () => {
    onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user);
        set((state) => ({ auth: { ...state.auth, user, loading: false, isLoggedOut: false } }));
        //Check if there's history and redirect
        const lastPath = window.history.state?.from || '/dashboard';
        window.location.href = lastPath;
      } else {
        set((state) => ({ auth: { ...state.auth, user: null, loading: false, isLoggedOut: true } }));
        //  window.location.href = '/login';
      }
    });
  },
  logout: async () => {
    set((state) => ({ auth: { ...state.auth, loading: true } }));
    try {
      await logout();
      set((state) => ({ auth: { ...state.auth, user: null, loading: false } }));
      set((state) => ({ auth: { ...state.auth, isLoggedOut: true } }));

    } catch (error) {
      set((state) => ({ auth: { ...state.auth, error: error.message, loading: false } }));
    }
  }
});

export default authSlice;
