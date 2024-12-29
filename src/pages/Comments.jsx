import FormPostIt from "../components/formPostIt";
import ListOfPostIts from "../components/ListOfPostIts";
import Modal from "../components/modal";
import { useState, useCallback, useEffect } from "react";
import { getPostIts } from "../services/postIt";
import useTheme from "../stores/themeStore";
import usePostsIts from "../customHook/usePostIts";
import Pen from "/pen.png";
import { Link } from "wouter";

export default function Comments() {
    const { theme } = useTheme();
    const [show, setShow] = useState(false);

    const bg_color_deg = theme === "day"
        ? 'bg-gradient-to-r from-day_bg_main from-10% to-day_bg_2main text-day_text_color'
        : 'bg-gradient-to-r from-night_bg_main to-night_bg_2main text-night_text_color'

    const closeModal = useCallback(() => setShow(false), []);

    const { postIts, setPostIt, insert } = usePostsIts();

    useEffect(() => {

        getPostIts().then((postIts) => {
            setPostIt(postIts);
        });
    }, [setPostIt]);



    return (
        <div className={`flex flex-col justify-center items-center h-screen p-2 ${bg_color_deg}`}>
            <div className="flex flex-row justify-between w-full self-start h-10">
                <div>
                    <Link href="/" className={`font-bold py-2 px-4 rounded flex items-center ${theme === "day" ? 'bg-slate-400 hover:bg-slate-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                </div>

                <div onClick={() => setShow(true)} className="w-16 mt-2 self-start justify-self-center cursor-pointer">
                    <img src={Pen} alt="pen" />
                </div>
            </div>

            <div
                className="h-[90vh] w-10/12 flex flex-row justify-center bg-slate-50"
                style={{
                    border: theme == "day" ? '10px solid silver' : '10px solid lightgray',
                    borderRadius: '10px',
                    boxShadow: '0 10px 16px rgba(0, 0, 0, 0.1)',
                    overflowY: 'auto',


                }}
            >
                {show && (
                    <Modal open={show} onClose={closeModal}>
                        <FormPostIt insert={insert} />
                    </Modal>
                )}

                <ListOfPostIts postIts={postIts} />
            </div>

        </div >
    );
}
