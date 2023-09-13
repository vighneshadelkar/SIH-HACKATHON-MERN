import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { AuthUser, setAuthUser, isLoggedIn, setisLoggedIn } =
    useContext(AuthContext);

  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/courses"}>COURSES</NavLink>
        {!isLoggedIn?<NavLink to={"/"}>LOGIN</NavLink>: <></>}
        <NavLink to={"/profile"}>PROFILE</NavLink>
        <NavLink to={"/blogs"}>BLOGS</NavLink>
        <NavLink to={"https://kodey18.github.io/scramble-game/"}>GAMES</NavLink>
        <NavLink to={"https://kodey18.github.io/quiz-game/"}>QUIZ</NavLink>
      </div>
    </div>
  );
}
