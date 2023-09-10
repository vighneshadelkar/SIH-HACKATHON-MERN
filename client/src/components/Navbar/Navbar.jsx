import React from "react";
import "./Navbar.css";
import Img1 from "../../images/cd1.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div class="navbar">
        <form role="search">
          <input
            class="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="navInfo">
          <h4>NOTIFICATIONS</h4>
          <NavLink to={"/profile"}><img src={Img1} alt="" class="prfPic" /></NavLink>
        </div>
      </div>
    </nav>
  );
}
