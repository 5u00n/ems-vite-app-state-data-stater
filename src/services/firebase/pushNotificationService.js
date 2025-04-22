// services/firebase/pushNotificationService.js
import { db, messaging } from './config';
import { ref, set, push, onValue } from 'firebase/database';
import { getToken, onMessage } from 'firebase/messaging';

const pushNotificationService = {
  // Initialize FCM and Get Token
  init: async (userId) => {
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY, // VAPID Key for Web Push Notifications
      });

      if (token) {
        // Store the token in the user's data
        await set(ref(db, `users/${userId}/fcmToken`), token);
      }
    } catch (error) {
      console.error('Error getting FCM token:', error.message);
    }
  },

  // Upload Notification to Database
  upload: async (userId, notificationData) => {
    try {
      const notificationsRef = ref(db, `notifications/${userId}`);
      const newNotificationRef = push(notificationsRef);
      await set(newNotificationRef, notificationData);
    } catch (error) {
      console.error('Error uploading notification:', error.message);
    }
  },

  // Download Notifications for a User
  download: (userId, callback) => {
    const notificationsRef = ref(db, `notifications/${userId}`);
    onValue(notificationsRef, (snapshot) => {
      const notifications = snapshot.val();
      callback(notifications);
    });
  },

  // Subscribe to Foreground Messages
  subscribe: (callback) => {
    return new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log('Foreground message received:', payload);
        callback(payload); // Pass the payload to a callback function
        resolve(payload);
      });
    });
  },

  // Handle Background Messages
  handleBackgroundMessages: (callback) => {
    onMessage(messaging, (payload) => {
      console.log('Background message received:', payload);
      callback(payload); // You can use this to show notifications in the background
    });
  },
};

export default pushNotificationService;
