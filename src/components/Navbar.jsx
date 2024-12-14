import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  // Toggle function to show/hide menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const token = localStorage.getItem("token"); // Retrieve the token from local storage

  return (
    <div className="min-h-[10vh] border-none inset-0 bg-gradient-to-b from-black/40 to-black/0 px-4 py-2 grid grid-cols-3 gap-4 content-center">
      <div className="italic text-title	font-great-vibes text-4xl px-5 font-semibold content-center">
        Edu_Consultancy
      </div>
      <div className="col-span-2 flex justify-end text-nav">
        <Link className="px-4 py-3" to="/">
          Home
        </Link>
        <Link className="px-4 py-3" to="/about">
          About
        </Link>

        <Link className="px-4 py-3" to="/products">
          Products
        </Link>
        <Link className="px-4 py-3" to="/blogs">
          Blogs
        </Link>

        <Link className="px-4 py-3" to="/feedback">
          Feedback
        </Link>
        {token ? (
          <Link className="px-4 py-3" to="/profile">
            <AccountCircleIcon />
          </Link>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="px-4 py-3 bg-orange-400 rounded-md"
          >
            Login
          </button>
        )}

        {token && (
          <button
            onClick={logout}
            className="px-4 py-3 bg-orange-400 rounded-md"
          >
            LogOut
          </button>
        )}

        <button className="px-4">
          <FacebookOutlinedIcon />
        </button>
        <button className="px-4">
          <MailIcon />
        </button>
        <button className="px-4">
          <LocalPhoneIcon />
        </button>
      </div>
    </div>
  );
}
