import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/courses"}>COURSES</NavLink>
        <NavLink to={"/"}>LOGIN</NavLink>
        <NavLink to={"/profile"}>PROFILE</NavLink>
      </div>
    </div>
  );
}
