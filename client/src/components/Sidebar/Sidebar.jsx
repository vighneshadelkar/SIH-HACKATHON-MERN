import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { AuthUser, setAuthUser } = useContext(AuthUserContext);

  function Logout() {
    setAuthUser(null);
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/courses"}>COURSES</NavLink>
        <NavLink to={"/profile"}>PROFILE</NavLink>
        <NavLink to={"/blogs"}>BLOGS</NavLink>
        <NavLink to={"/event"}>EVENTS</NavLink>
        <NavLink to={"https://kodey18.github.io/scramble-game/"}>GAMES</NavLink>
        <NavLink to={"https://kodey18.github.io/quiz-game/"}>QUIZ</NavLink>
        {/* {!AuthUser ? (
          <NavLink to={"/login"}>LOGIN</NavLink>
        ) : (
          <NavLink className="logout" onClick={Logout} to={"/"}>
            LOGOUT
          </NavLink>
        )} */}
      </div>
    </div>
  );
}
