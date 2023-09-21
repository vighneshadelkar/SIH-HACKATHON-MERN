import React, { createContext } from "react";
import "./Navbar.css";
import Img1 from "../../images/cd1.jpg";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";

export default function Navbar() {
  const { AuthUser } = createContext(AuthUserContext);
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
        {AuthUser ? (
          <div className="navInfo">
            <h4>NOTIFICATIONS</h4>
            <NavLink to={"/profile"}>
              <img src={Img1} alt="profile pic" className="prfPic" />
            </NavLink>
          </div>
        ) : (
          <>
            <button className="lg-btn">
              <NavLink className="logout-btn" to={"/login"}>
                LOGIN
              </NavLink>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
