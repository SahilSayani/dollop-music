import create from "zustand";

const useStore = create((set) => ({
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),

  // State
  user: null,

  // Mutations/Actions
  setUser: (payload) => set((state) => ({ user: payload })),
  logout: () => set((state) => ({ user: null })),
}));
