import { PROYECTOS } from '../../Proyects.js';
import Proyect from '../components/proyect.jsx';
import Contact from '../sections/contact.jsx';
import useTheme from '../stores/themeStore.jsx';
import '../stylesheets/list.css';

export default function List() {
    const { theme } = useTheme();
    return (
        <div className="overflow-y-auto relative max-h-[20rem] sm:max-h-[35rem] w-[100%] sm:w-[25rem] lg:w-[40rem] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 p-4 custom-scrollbar">

            {PROYECTOS.map((proyecto, index) => (
                <Proyect key={index} index={index} icono={proyecto.icono} theme={theme} />
            ))}
            <Contact />

        </div>
    );
}

