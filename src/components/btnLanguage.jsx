import Argentina from "/argentina.png";
import UnitedStates from "/united_state.png";
import { LANGUAGES } from "../utils/language";
import useLanguage from "../stores/languageStore";

export default function BtnLanguage() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div
            className="fixed bottom-10 right-4 flex flex-col items-center justify-center w-24 gap-2 p-2 bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition duration-200"
            onClick={toggleLanguage}
        >
            <span className="text-sm font-medium text-gray-800">{language}</span>
            <img
                alt="flag"
                className="w-6 h-6"
                src={language === LANGUAGES.ENG ? UnitedStates : Argentina}
            />
        </div>
    );
};
