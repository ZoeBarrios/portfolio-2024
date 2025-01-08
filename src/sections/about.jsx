import useLanguage from "../stores/languageStore";
import { TRADUCTION } from "../utils/language";
import Button from "../components/button";
import useTheme from "../stores/themeStore";

function About() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    function handleDownloadClick() {
        const url = "/BARRIOS_CV.pdf";
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "BARRIOS_cv.pdf";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            });
    }

    const handleClick = (url) => {
        setTimeout(() => {
            window.open(url, "_blank");
        }, 500);
    };



    return (
        <section className="min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-16 px-6 lg:px-16 py-12" id="about">

            <div className={`w-full lg:w-9/12 xl:w-3/6 p-6 rounded-lg shadow-2xl border-4 ${theme == 'day' ? "bg-blue-500 border-blue-300" : "bg-white border-gray-200"}`
            }
            >
                <h2 className={`${theme == "day" ? 'text-white' : 'text-blue-300'} mb-2 text-3xl md:text-4xl xl:text-5xl font-bold text-center lg:text-left`}>
                    <i className="fas fa-user-circle mr-2"></i>
                    {TRADUCTION[language].ABOUT.TITLE}
                </h2>

                <p className={`${theme == "day" ? 'text-white' : 'text-gray-800'}  text-lg md:text-xl xll:text-2xl`}>
                    {TRADUCTION[language].ABOUT.DESCRIPTION}
                </p>
            </div>

            <div className="flex flex-row gap-6 w-full lg:flex-col lg:w-1/3 items-center justify-center">
                <Button
                    onClick={() => handleClick("https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/")}
                    icon="fab fa-linkedin"
                    theme={theme}
                />
                <Button
                    onClick={() => handleClick("https://github.com/ZoeBarrios")}
                    icon="fab fa-github"
                    theme={theme}
                />
                <Button
                    onClick={handleDownloadClick}
                    icon="fas fa-download"
                    theme={theme}
                />
            </div>
        </section >
    );
}

export default About;
