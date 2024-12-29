import { create } from 'zustand'

const useTheme = create((set) => ({
    theme: 'day',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'day' ? 'night' : 'day' })),

}))

export default useTheme;
