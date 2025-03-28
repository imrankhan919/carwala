import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link to={"/"}>
              <span className="text-2xl font-bold text-emerald-500">
                CARWALA
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {user ? (
              <>
                <Link to={"/my-rentals"}>My Rentals</Link>
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors text-sm font-bold hover:cursor-pointer"
                >
                  {user.name} logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
