import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="pt-4 text-sm text-center text-gray-700">
      {label}
      <Link className="text-blue-600 hover:underline pl-1" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}
