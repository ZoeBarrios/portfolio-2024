import { PROYECTOS } from '../../Proyects.js';
import useLanguage from '../stores/languageStore.jsx';
import GitHub from '/tecnologias/github.png';
import Tecnologia from './tecnologia.jsx';

export default function InfoProyect({ index }) {
    const proyecto = PROYECTOS[index];
    const { language } = useLanguage();

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-max-[80vh] overflow-y-auto flex flex-col justify-between"
            style={{ borderTop: `6px solid ${proyecto.color}` }}
        >
            <div className="flex flex-col items-center mb-6">
                <img
                    src={`${proyecto.img}?v=1`}
                    alt={proyecto.nombre}
                    className="w-100 h-32 object-cover rounded-md mb-4"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/tecnologias/default.png';
                    }}
                />
                <h1
                    className="text-3xl font-bold mb-2 text-gray-800 text-center"
                    style={{ color: proyecto.color }}
                >
                    {proyecto.nombre}
                </h1>
                <p className="text-gray-600 text-center">{proyecto.descripcion[language]}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-700">Tecnologías:</h2>
                <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tecnologia, index) => (
                        <Tecnologia key={index} tecnologia={tecnologia} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
                {proyecto.deploy && (
                    <a
                        href={proyecto.deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md shadow-md transition-colors"
                    >
                        <span>A verlo!</span>
                    </a>
                )}
                {proyecto.github && (
                    <a
                        href={proyecto.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-color font-medium rounded-md shadow-md transition-colors"
                    >
                        <img src={GitHub} alt="github" className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>
                )}
            </div>
        </div>
    );
}
