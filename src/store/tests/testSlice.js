const createTestSlice = (set) => ({
    count: 0,
    some: "Hello me name is",
    inc: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set(() => ({ count: 0 })),
    setSome: (some) => set(() => ({ some }))
})

export default createTestSlice;
