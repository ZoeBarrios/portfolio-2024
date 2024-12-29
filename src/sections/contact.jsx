import { useState } from 'react';
import outlook from '/outlook.png';
import Form from '../components/form';
import Modal from '../components/Modal';

export default function Contact() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={outlook} alt="outlook" className='w-16' onClick={handleShow} />
            <Modal open={show} onClose={handleShow}>
                <Form />
            </Modal>
        </div>
    )
}