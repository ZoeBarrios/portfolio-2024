import { toast } from "react-toastify";
import Input from "./input";
import useLanguage from "../stores/languageStore";
import { TRADUCTION } from "../utils/language";

export default function FormPostIt({ insert, closeModal }) {
    const { language } = useLanguage();

    const handlePost = async (e) => {
        e.preventDefault();

        const author = document.getElementById("username").value.trim();
        const body = document.getElementById("message").value.trim();

        if (!author) {
            toast.error(TRADUCTION[language].POST_IT_FORM.ERRORS.USERNAME_REQUIRED || "El nombre de usuario es obligatorio");
            return;
        }

        if (!body) {
            toast.error(TRADUCTION[language].POST_IT_FORM.ERRORS.MESSAGE_REQUIRED || "El mensaje es obligatorio");
            return;
        }

        try {
            const response = await insert({ author, body });
            if (response.status !== 201) {
                return toast.error(response.data.message || "Hubo un error al agregar el Post-it");
            }
            toast.success(TRADUCTION[language].POST_IT_FORM.SUCCESS || "¡Post-it agregado exitosamente!");

            closeModal();

        } catch (error) {
            toast.error(TRADUCTION[language].POST_IT_FORM.ERRORS.SUBMIT_FAILED || "Hubo un error al agregar el Post-it");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-center text-gray-700 pb-4">
                {TRADUCTION[language].POST_IT_FORM.TITLE}
            </h2>
            <form onSubmit={handlePost} className="flex flex-col gap-6">
                <Input
                    name="username"
                    type="text"
                    label={TRADUCTION[language].POST_IT_FORM.LABELS.USERNAME}
                />
                <Input
                    name="message"
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
