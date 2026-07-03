import { create } from 'zustand'

const usecounter = create((set) => ({
  counter: 0,
  increasecount: () => set((state) => ({ counter: state.counter + 1 })),
  resetcount: () => set({ counter: 0 }),
  updatecount: (newBears) => set({ counter: newBears }),
}))

export default usecounter