export default function Input({ label, type, name }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    </div>
  );
}
