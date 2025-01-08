import Input from "./input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TRADUCTION } from "../utils/language";
import { sendEmail } from "../utils/email";
import useLanguage from "../stores/languageStore";

export default function Form() {
    const { language } = useLanguage();

    return (
        <div className="h-max-[90vh] overflow-y-auto bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-md mx-auto">
            <ToastContainer />

            <form
                className="space-y-6 "
                onSubmit={(e) => sendEmail(e, language)}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    {TRADUCTION[language].CONTACT.TITLE}
                </h2>
                <p className="text-gray-600 text-center ">
                    {TRADUCTION[language].CONTACT.DESCRIPTION}
                </p>
                <Input
                    label={TRADUCTION[language].LABELS.NAME}
                    type="text"
                    name="from_name"

                />
                <Input
                    label={TRADUCTION[language].LABELS.EMAIL}
                    type="email"
                    name="from_email"

                />

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 "
                    >
                        {TRADUCTION[language].LABELS.MESSAGE}
                    </label>
                    <textarea
                        id="mensaje"
                        name="message"
                        rows="5"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                >
                    {TRADUCTION[language].BUTTONS.SEND}
                </button>
            </form>
        </div>
    );
}
