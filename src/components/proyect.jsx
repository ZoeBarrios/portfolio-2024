import { useState } from 'react';
import InfoProyect from './infoProyect';
import Modal from './modal';

export default function Proyect({ index, icono, theme = 'day' }) {
    const [showProyecto, setShowProyecto] = useState(false);

    const handleShowProyecto = () => {
        setShowProyecto(!showProyecto);
    }

    return (
        <div className='h-36 flex flex-col self-center items-center text-center justify-between'>
            <div
                onClick={handleShowProyecto}
                className={`w-24 h-24 ${theme === 'day' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-gray-200 to-white'} rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transform transition-all duration-300`}
            >
                <i className={`${icono || 'fa-solid fa-plus'} ${theme == "day" ? 'text-white' : 'text-blue-400'} text-3xl`} />
            </div>
            <Modal open={showProyecto} onClose={handleShowProyecto}>
                <InfoProyect index={index} setShow={handleShowProyecto} />
            </Modal>
        </div>
    )
}
