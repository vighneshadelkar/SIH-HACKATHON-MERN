import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Navbar2() {
  const { AuthUser, setAuthUser } = useContext(AuthUserContext);

  function Logout() {
    setAuthUser(null);
  }
  return (
    <nav className="navbar2">
      {/* <div className="navbar-logo"> */}
      {/* <img src={logo} alt="logo" /> */}
      {/* </div> */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="https://kodey18.github.io/quiz-game/">Quiz</NavLink>
        </li>
        <li>
          <NavLink to="https://kodey18.github.io/scramble-game/">Games</NavLink>
        </li>
        <li>
          <NavLink to="/event">Events</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
        {!AuthUser ? (
          <></>
        ) : (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        )}
      </ul>
      <div className="logoutDiv">
        {!AuthUser ? (
          <>
            <button className="lg-btn">
              <NavLink className="logout-btn" to={"/login"}>
                LOGIN
              </NavLink>
            </button>
          </>
        ) : (
          <>
            <button className="lg-btn">
              <NavLink className="logout-btn" onClick={Logout} to={"/"}>
                LOGOUT
              </NavLink>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
