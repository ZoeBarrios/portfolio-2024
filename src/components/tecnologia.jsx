export default function Tecnologia({ tecnologia, key }) {
    return <span
        className="px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-md shadow"
        key={key}
    >
        {tecnologia}
    </span>
}