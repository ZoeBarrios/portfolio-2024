import Input from "./input";
import useLanguage from "../stores/languageStore";
import { TRADUCTION } from "../utils/language";

export default function FormPostIt({ insert }) {

    const { language } = useLanguage();
    const handlePost = async (e) => {
        e.preventDefault();

        const author = document.getElementById('username').value;
        const body = document.getElementById('message').value;

        if (!username || !message) {
            return alert('Complete los campos');
        }

        await insert({ author, body });
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl ">
            <h2 className="text-2xl font-bold text-center text-gray-700 pb-4">
                {TRADUCTION[language].POST_IT_FORM.TITLE}
            </h2>
            <form onSubmit={handlePost} className="flex flex-col gap-6">
                <Input
                    id="username"
                    type="text"
                    label={TRADUCTION[language].POST_IT_FORM.LABELS.USERNAME}
                />
                <Input
                    id="message"
                    type="text"
                    label={TRADUCTION[language].POST_IT_FORM.LABELS.MESSAGE}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                >
                    {TRADUCTION[language].POST_IT_FORM.BUTTONS.ADD}
                </button>
            </form>
        </div>
    );

}