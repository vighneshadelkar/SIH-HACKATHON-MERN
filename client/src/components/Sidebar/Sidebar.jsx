import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div class="sidebar">
        <a class="active" href="#home">
          HOME
        </a>
        <NavLink to={"/courses"}>COURSES</NavLink>
        <NavLink to={"/"}>LOGIN</NavLink>
        <NavLink to={"/profile"}>PROFILE</NavLink>
      </div>
    </div>
  );
}
