import useTheme from '../stores/themeStore';
import '../stylesheets/animations.css';
import coffe_day from "/coffe_day.png";
import coffe_night from "/coffe_nigth.png";
import bg_main from "/bg_main.png";
import { TRADUCTION } from '../utils/language';
import useLanguage from '../stores/languageStore';


function Window() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    return (
        <div className='m-0 md:mt-24 flex flex-col items-center justify-center'>
            <div className='bg_container flex justify-center' >
                <img
                    key="day"
                    src={bg_main}
                    alt="window_bg"
                    id="window_bg"
                    className="rounded"

                />
                {theme == 'day' ? (
                    <img
                        src={coffe_day}
                        alt="paisaje"
                        id="paisaje"
                        className="rounded"
                        style={{ animation: "fadeIn 2s linear" }}
                    />
                ) : (
                    <img
                        key="night"
                        src={coffe_night}
                        alt="paisaje"
                        id="paisaje"
                        className="rounded"
                        style={{ animation: "fadeIn 2s linear" }}
                    />
                )}

            </div>
            <span className='mt-2 italic text-lg text-center p-2'>{TRADUCTION[language].MAIN.TEXT}.</span>
        </div>
    );
}

export default Window;
