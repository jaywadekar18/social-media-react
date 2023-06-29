import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Privateroute from "./shared/Privateroute";
import Navbar from "./shared/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Addusers from "./shared/Addusers";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import { NavLink, useNavigate } from "react-router-dom";
import Explore from "./pages/Explore";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../src/context/AuthContext";

function App() {
  const { setUserDetail, isLoggedIn, user, setLoggedin } =
    useContext(AuthContext);
  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    if (userDetail) {
      console.log("appp.js", localStorage.getItem("user"));
      setUserDetail(JSON.parse(userDetail));
    }
  }, []);
  return (
    <div className="App">
      <nav>
        <NavLink to="/home">New tilee</NavLink>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/profile"
          element={
            <Privateroute>
              <Profile />
            </Privateroute>
          }
        ></Route>
        <Route
          path="/profile/:userId"
          element={
            <Privateroute>
              <Profile />
            </Privateroute>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/bookmark"
          element={
            <Privateroute>
              <Bookmark />
            </Privateroute>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <Privateroute>
              <Explore />
            </Privateroute>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Privateroute>
              <Home />
            </Privateroute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
