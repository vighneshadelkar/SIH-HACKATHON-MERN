import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div class="sidebar">
        <a class="active" href="#home">
          HOME
        </a>
        <a href="#news">COURSES</a>
        <a href="#contact">GAMES</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
