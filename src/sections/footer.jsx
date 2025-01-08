import useTheme from "../stores/themeStore";

export default function Footer() {
    const { theme } = useTheme();

    const bg_color = theme === "day" ? "bg-blue-500 text-white" : "bg-gray-800 text-white";
    return (
        <footer className={`${bg_color}  py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 `}>
            <p className="text-sm md:text-base font-semibold">
                © Zoe Barrios 2024
            </p>
            <span className="text-xs md:text-sm text-blue-300 italic">
                Logo hecho por Martina Córdoba, diseñadora gráfica.
            </span>
        </footer>
    );
}
