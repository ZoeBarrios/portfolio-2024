import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose }) {
    const [isVisible, setIsVisible] = useState(open);
    const modalRoot = document.getElementById('root');

    useEffect(() => {
        if (open) {
            setIsVisible(true);
        } else {
            // Retrasar la eliminación del modal para completar la animación de cierre
            const timeout = setTimeout(() => setIsVisible(false), 500); // 500ms coincide con `transition-duration`
            return () => clearTimeout(timeout);
        }
    }, [open]);

    if (!isVisible) return null;

    return createPortal(
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ zIndex: 1000 }}
        >
            <div
                className={`mx-10 bg-white border rounded shadow-lg transition-all duration-500 transform ${open ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                    }`}
                style={{
                    fontFamily: 'system-ui',
                }}
            >
                <div className="w-full flex flex-row justify-end">
                    <button
                        onClick={onClose}
                        className="px-2 mt-2 text-red-600 font-bold"
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
}
