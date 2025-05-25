import { LogOut, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

export const Appbar = () => {
  const { authUser } = useAuthStore();
  

  return (
    <div className="shadow h-14 flex justify-between items-center px-4 bg-white text-black">
      {/* Left Side - App Title */}
      <div className="text-lg font-semibold flex items-center gap-4">
        CASHLY
      </div>

      {/* Right Side - User Info + Dropdown */}
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">{authUser.firstName}</div>
        {authUser && (
          <details className="dropdown dropdown-end">
            <summary className="btn btn-sm p-2 rounded-full">
              <User className="size-5" />
            </summary>
            <ul className="menu dropdown-content mt-2 bg-base-100 shadow-lg rounded-box w-40 z-10 p-2">
              <li>
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    useAuthStore.setState({ authUser: null });
                  }}
                  className="flex items-center gap-2 w-full text-left"
                >
                  <LogOut className="size-4" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </details>
        )}
      </div>
    </div>
  );
};
