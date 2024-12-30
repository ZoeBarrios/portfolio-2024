import { useState } from 'react';
import { getUser } from '../services/github';
import { postPostIt } from '../services/postIt';
import useLanguage from '../stores/languageStore';
import { TRADUCTION } from '../utils/language';


export default function usePostsIts() {
    const [postIts, setPostIt] = useState([]);
    const { language } = useLanguage();

    const insert = async (comment) => {
        const user = await getUser(comment.author);

        if (user.message === 'Not Found') {
            return {
                status: 404,
                data: {
                    message: TRADUCTION[language].POST_IT_FORM.ERRORS.NOT_FOUND || 'Usuario no encontrado',
                },
            }
        }

        comment.avatar = user.avatar_url;
        comment.url = user.html_url;

        await postPostIt(comment);

        setPostIt((prevPostIts) => [...prevPostIts, comment]);

        return {
            status: 201,
        };
    }

    return { postIts, insert, setPostIt };
}