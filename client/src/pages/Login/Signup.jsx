import React, { useContext, useState } from "react";
import loginimg from "../../images/login-pic2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContext";
import "./Login.css";

export default function Signup() {
  const [loginData, setloginData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { AuthUser, setAuthUser } = useContext(AuthUserContext);

  const navigate = useNavigate();

  function handleInput(event) {
    const { name, value } = event.target;
    setloginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      console.error();
    } else {
      setAuthUser(result);
      setloginData({
        email: "",
        password: "",
      });
    }
  };

  setTimeout(() => {
    if (AuthUser) {
      navigate("/");
    }
  }, 100);

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="imgcol">
          <img src={loginimg} alt="login img" className="login-img" />
        </div>
        <div className="formContainer">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="loginForm">
            <div className="col-sm-10">
              <input
                type="text"
                className="signupItem"
                id="signupFirstname"
                name="firstname"
                value={loginData.firstname}
                onChange={handleInput}
                placeholder="Firstname"
                required
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="signupItem"
                id="signupLastname"
                name="lastname"
                value={loginData.lastname}
                onChange={handleInput}
                placeholder="Lastname"
                required
              />
            </div>
            <div className="col-sm-10">
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                value={loginData.email}
                onChange={handleInput}
                placeholder="Email"
                required
              />
            </div>

            <div className="col-sm-10">
              <input
                type="password"
                className="signupItem"
                id="signupPass"
                name="password"
                value={loginData.password}
                placeholder="Password"
                onChange={handleInput}
                required
              />
            </div>

            <button className="signupSubmit">Sign Up</button>
          </form>
        <p>Dont have an account? <span ><NavLink to={"/login"} className="link">Sign In</NavLink></span></p> 
        </div>
      </div>
    </div>
  );
}
