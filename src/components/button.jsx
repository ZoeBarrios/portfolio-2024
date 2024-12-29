import React from 'react';

function Button({ onClick, icon, theme = "day" }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center w-24 h-24 text-white rounded-full shadow-md transition-all duration-300 transform focus:outline-none ${theme === "day" ? "bg-blue-400 hover:bg-blue-500" : "bg-white hover:bg-gray-200"}`}
        >
            {icon && <i className={`${icon} text-2xl ${theme === "day" ? "text-white" : "text-blue-400"}`} />}
        </button>
    );
}

export default Button;
