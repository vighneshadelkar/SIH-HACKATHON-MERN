import React from "react";
import "./Navbar.css";
import Img1 from "../../images/cd1.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <form role="search">
          <input
            className="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="navInfo">
          <h4>NOTIFICATIONS</h4>
          <NavLink to={"/profile"}><img src={Img1} alt="profile pic" className="prfPic" /></NavLink>
        </div>
      </div>
    </nav>
  );
}
