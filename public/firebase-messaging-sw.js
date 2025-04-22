importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.x.x/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyCVzXvUeygih2ZhAr4vtr_MtdpxXC99kKc",
    authDomain: "edusofthub-1.firebaseapp.com",
    projectId: "edusofthub-1",
    storageBucket: "edusofthub-1.appspot.com",
    messagingSenderId: "517749163452",
    appId: "1:517749163452:web:400d563596632f9b9357b9",
    measurementId: "G-NTRVL6276",
    databaseURL: "https://edusofthub-1-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
