import { useState } from "react";
import Toggle from "../components/toggle";
import logo_nigth from "/logo_nigth.png";
import logo_day from "/logo_day.png";
import useTheme from "../stores/themeStore";
import useLanguage from "../stores/languageStore";
import { TRADUCTION } from "../utils/language";
import { Link } from "wouter";

function Header() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const bg_color_deg = theme === "day"
        ? 'bg-gradient-to-r from-day_bg_main from-10% to-day_bg_2main text-day_text_color'
        : 'bg-gradient-to-r from-night_bg_main to-night_bg_2main text-night_text_color';

    return (
        <header
            className={`w-full fixed flex flex-row items-center justify-between p-3 font-medium text-xl h-20 ${bg_color_deg}`}
            style={{ zIndex: 900 }}

        >
            <img
                src={theme == "day" ? logo_day : logo_nigth}
                alt="Logo"
                className="ml-2 w-8"
            />

            <button
                className="sm:hidden text-2xl"
                onClick={toggleMenu}
            >
                &#9776;
            </button>


            <nav
                className={`${menuOpen ? "block" : "hidden"} sm:flex sm:flex-row sm:items-start items-center gap-16 absolute sm:static top-20 left-0 sm:top-0 w-full sm:w-auto bg-day_bg_main sm:bg-transparent p-4 sm:p-0`}
            >
                <ul className="flex flex-col sm:flex-row items-center gap-24">
                    <li><a href="#home">{TRADUCTION[language].NAV.HOME}</a></li>
                    <li><a href="#about">{TRADUCTION[language].NAV.ABOUT}</a></li>
                    <li><a href="#projects">{TRADUCTION[language].NAV.PROYECTS}</a></li>
                    <li><Link href="/comments">{
                        TRADUCTION[language].NAV.COMMON_PLACE
                    }</Link></li>

                </ul>
            </nav>

            <Toggle />
        </header >
    );
}

export default Header;
