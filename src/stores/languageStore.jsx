import { create } from 'zustand';
import { LANGUAGES } from '../utils/language';

const useLanguage = create((set) => ({
    language: LANGUAGES.ESP,
    toggleLanguage: () =>
        set((state) => ({
            language: state.language === LANGUAGES.ESP ? LANGUAGES.ENG : LANGUAGES.ESP,
        })),
}));

export default useLanguage;
