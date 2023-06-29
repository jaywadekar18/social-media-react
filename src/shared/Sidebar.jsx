import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import {
  FaHeart,
  FaCaretDown,
  FaBookmark,
  FaHome,
  FaRocket,
  FaRegBookmark,
  FaRegUserCircle,
} from "react-icons/fa";
function Sidebar() {
  const { setUserDetail, isLoggedIn, user, setLoggedin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div>
      <div className="navbar d-flex">
        <NavLink to="/home">
          <FaHome /> Home
        </NavLink>
        <NavLink to="/explore">
          <FaRocket /> Exlore
        </NavLink>
        <NavLink to="/bookmark">
          <FaBookmark /> Bookmark
        </NavLink>
        <NavLink
          to={"/profile" + "/" + JSON.parse(localStorage.getItem("user"))?._id}
        >
          <FaRegUserCircle /> Profile
        </NavLink>
        <button className="custom-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
