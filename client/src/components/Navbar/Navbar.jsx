import React from "react";
import "./Navbar.css";
import Img1 from "../../images/cd1.jpg";

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
          <img src={Img1} alt="" class="prfPic" />
        </div>
      </div>
    </nav>
  );
}
