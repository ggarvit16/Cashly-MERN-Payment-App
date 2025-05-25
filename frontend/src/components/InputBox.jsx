export function InputBox({ label, placeholder, onChange, type = "text", className = "" }) {
  return (
    <div>
      <div className="text-sm font-medium text-gray-700 text-left py-1">
        {label}
      </div>
      <input
  type={type}
  onChange={onChange}
  placeholder={placeholder}
  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black ${className}`}
/>
    </div>
  );
}
