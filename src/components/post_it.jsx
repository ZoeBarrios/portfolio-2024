import '../stylesheets/post_it.css';

export default function PostIt({ author, body, avatar }) {
    const colors = [
        'bg-red-100',
        'bg-yellow-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-indigo-100',
        'bg-purple-100',
        'bg-pink-100',
        'bg-red-200',
        'bg-yellow-200',
        'bg-green-200',
        'bg-blue-200',
        'bg-indigo-200',
        'bg-purple-200',
        'bg-pink-200',
        'bg-red-300',
        'bg-yellow-300',
        'bg-green-300',
        'bg-blue-300',
        'bg-indigo-300',
        'bg-purple-300',
        'bg-pink-300'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = Math.floor(Math.random() * 10) - 5;

    return (
        <div
            className={`post-it p-4 m-3 shadow-lg rounded-lg ${randomColor}`}
            style={{
                transform: `rotate(${randomRotate}deg)`,
                color: '#3a4750',
                fontFamily: 'Indie Flower, cursive',
                maxWidth: '300px',
            }}
        >
            <div className="flex items-center mb-3">
                <img
                    src={avatar}
                    alt={author}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
                <h2 className="ml-3 text-2xl font-bold">{author}</h2>
            </div>
            <p className="text-xl leading-snug break-words">{body}</p>
        </div>
    );
}
