export function Button({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold rounded-md text-sm px-5 py-2 ${className}`}
    >
      {label}
    </button>
  );
}
