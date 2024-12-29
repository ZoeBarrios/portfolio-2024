const URL = import.meta.env.VITE_URL_SERVICE;

export async function getPostIts() {
    const response = await fetch(`${URL}/postIts`);

    return response.json();
}

export async function postPostIt(comment) {
    const response = await fetch(`${URL}/postIts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    return response.json();
}