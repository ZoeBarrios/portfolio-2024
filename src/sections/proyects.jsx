import { useState, useEffect } from 'react';
import List from '../components/list';
import tablet from '/tablet.png';

export default function Proyects() {
    const [esPantallaChica, setEsPantallaChica] = useState(window.innerWidth < 1024);


    useEffect(() => {
        const handleResize = () => {
            setEsPantallaChica(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const rotation = esPantallaChica ? 'rotate(0deg)' : 'rotate(90deg)';
    const rotation2 = esPantallaChica ? 'rotate(0deg)' : 'rotate(-90deg)';

    return (
        <div className="w-full h-screen mt-24 relative flex items-center justify-center"
            id="projects" style={{
                fontFamily: 'system-ui',
            }}>
            <div
                className="flex flex-row items-center justify-around relative"
                style={{
                    backgroundImage: `url(${tablet})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: esPantallaChica ? '90vh' : '90vw',
                    width: esPantallaChica ? '90vw' : '90vh',
                    transform: rotation,

                }}
            >
                <div style={{ transform: rotation2 }}>
                    <List />
                </div>
            </div>
        </div>
    );
}
