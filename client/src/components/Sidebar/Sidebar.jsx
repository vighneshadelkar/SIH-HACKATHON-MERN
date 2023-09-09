import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div class="sidebar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
