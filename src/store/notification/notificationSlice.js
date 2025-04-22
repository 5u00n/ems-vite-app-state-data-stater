import pushNotificationService from '../../services/firebase/pushNotificationService';

const notificationSlice = (set) => ({
  notifications: [],
  foregroundMessage: null,
  loading: false,
  error: null,

  setLoading: (loading) => set(() => ({ loading })),
  setError: (error) => set(() => ({ error, loading: false })),
  setNotifications: (notifications) => set({ notifications }),
  setForegroundMessage: (message) => set(() => ({ foregroundMessage: message })),

  initNotifications: async (userId) => {
    set(() => ({ loading: true }));
    try {
      await pushNotificationService.init(userId);
      pushNotificationService.download(userId, (notifications) => {
        set(() => ({ notifications, loading: false }));
      });
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  addNotification: async (userId, notificationData) => {
    set(() => ({ loading: true }));
    try {
      await pushNotificationService.upload(userId, notificationData);
      set(() => ({ loading: false }));
    } catch (error) {
      set(() => ({ error: error.message, loading: false }));
    }
  },

  subscribeToMessages: () => {
    pushNotificationService.subscribe((payload) => {
      set(() => ({ foregroundMessage: payload.notification }));
    });
  },

  listenToBackgroundMessages: () => {
    pushNotificationService.handleBackgroundMessages((payload) => {
      console.log('Background notification:', payload);
    });
  }
});

export default notificationSlice;
