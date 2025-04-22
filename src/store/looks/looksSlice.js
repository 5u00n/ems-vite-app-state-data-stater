const looksSlice = (set) => ({
    looks: {
        theme: 'dark',
        fontSize: 16,
        fontFamily: 'Arial',
        color: 'black',
        backgroundColor: 'white',
        padding: 16,
        margin: 16,
        backgroundImage: '',
    },
    setTheme: (theme) => set((state) => ({ looks: { ...state.looks, theme } })),
    setFontSize: (fontSize) => set((state) => ({ looks: { ...state.looks, fontSize } })),
    setFontFamily: (fontFamily) => set((state) => ({ looks: { ...state.looks, fontFamily } })),
    setColor: (color) => set((state) => ({ looks: { ...state.looks, color } })),
    setBackgroundColor: (backgroundColor) => set((state) => ({ looks: { ...state.looks, backgroundColor } })),
    setPadding: (padding) => set((state) => ({ looks: { ...state.looks, padding } })),
    setMargin: (margin) => set((state) => ({ looks: { ...state.looks, margin } })),
    setBackgroundImage: (backgroundImage) => set((state) => ({ looks: { ...state.looks, backgroundImage } })),
})
export default looksSlice;