import Letter from "../components/letter";
import Window from "../components/window";
import useLanguage from "../stores/languageStore";
import useTheme from "../stores/themeStore";
import '../stylesheets/animations.css';
import { LANGUAGES } from "../utils/language";



function Main() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    return (
        <section className="p-3 md:p-0 h-screen flex flex-col md:flex-row items-center justify-around" id="home">


            {language === LANGUAGES.ESP ? (
                <div className="flex flex-row md:flex-col items-center justify-center">
                    <Letter letter="S" theme={theme} />
                    <Letter letter="o" theme={theme} />
                    <Letter letter="y" theme={theme} />
                </div>
            ) : (
                <div className="flex flex-row md:flex-col items-center justify-center">
                    <Letter letter="I" theme={theme} />
                    <Letter letter="m" theme={theme} />
                    <Letter letter="" theme={theme} />
                </div>
            )}
            <Window />
            <div className="flex flex-row md:flex-col items-center justify-center">
                <Letter letter="Z" theme={theme} />
                <Letter letter="o" theme={theme} />
                <Letter letter="E" theme={theme} />

            </div>

        </section >
    );

}

export default Main;