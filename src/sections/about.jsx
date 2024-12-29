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
        <section className="min-h-screen flex flex-col lg:flex-row lg:justify-between items-center gap-16 px-6 lg:px-16 py-12" id="about">

            <div className={`lg:w-6/2 w-full bg-white p-6 rounded-lg shadow-xl text-white flex flex-col gap-4 ${theme === "day" ? "bg-blue-400 text-white" : "bg-gray-800"}`}
            >
                <h2 className={`${theme == "day" ? 'text-white' : 'text-blue-300'} text-3xl md:text-4xl font-bold text-center lg:text-left`}>
                    {TRADUCTION[language].ABOUT.TITLE}
                </h2>
                <p className={`${theme == "day" ? 'text-white' : 'text-gray-800'}  text-lg md:text-xl leading-9`}>
                    {TRADUCTION[language].ABOUT.DESCRIPTION}
                </p>
            </div>

            <div className="flex flex-row w-full lg:flex-col gap-6 w-full lg:w-1/3 items-center justify-center">
                <Button
                    onClick={() => handleClick("https://www.linkedin.com/in/zoe-nazarena-barrios-55119525a/")}
                    icon="fab fa-linkedin"
                    theme={theme}
                    size="48"
                />
                <Button
                    onClick={() => handleClick("https://github.com/ZoeBarrios")}
                    icon="fab fa-github"
                    theme={theme}
                    size="48"
                />
                <Button
                    onClick={handleDownloadClick}
                    icon="fas fa-download"
                    theme={theme}
                    size="48"
                />
            </div>
        </section >
    );
}

export default About;
