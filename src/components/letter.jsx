import '../stylesheets/letter.css';

export default function Letter({ letter, theme }) {
    return (
        <div className={`flex flex-col items-center justify-center letter-container ${theme === "day" ? "color-day" : "color-night"}`}>
            <div className="letter-circle">
                <p className="letter-text">{letter}</p>
            </div>
        </div>
    );
}
