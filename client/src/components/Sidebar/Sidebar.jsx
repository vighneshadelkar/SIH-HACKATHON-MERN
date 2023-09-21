import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

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
      </div>
    </div>
  );
}
