const connectivitySlice = (set) => ({
    isOnline: true,
    isInitialized: false,
    setIsOnline: (status) => set(() => ({ isOnline: status })),
    setInitialized: () => set(() => ({ isInitialized: true })),

    // Add this method to handle offline data
    loadOfflineData: () => {
        const cachedData = localStorage.getItem('school-app-store');
        if (cachedData) {
            try {
                const parsedData = JSON.parse(cachedData);
                set(() => ({ ...parsedData }));
            } catch (error) {
                console.error('Error loading offline data:', error);
            }
        }
    },
});

export default connectivitySlice;
