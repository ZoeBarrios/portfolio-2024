import { useState } from 'react';
import { getUser } from '../services/github';
import { postPostIt, getPostIts } from '../services/postIt';

const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-indigo-100',
    'bg-purple-100',
    'bg-pink-100',
];

export default function usePostsIts() {
    const [postIts, setPostIt] = useState([]);


    const insert = async (comment) => {
        const user = await getUser(comment.author);

        if (user.message === 'Not Found') {
            return alert('Usuario no encontrado');
        }

        comment.avatar = user.avatar_url;
        comment.url = user.html_url;

        await postPostIt(comment);

        setPostIt((prevPostIts) => [...prevPostIts, comment]);
    }

    return { postIts, insert, setPostIt };
}