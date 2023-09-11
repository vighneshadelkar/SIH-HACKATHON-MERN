import React from "react";
import loginimg from "../../images/login-pic.jpg";
import "./Login.css"

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="imgcol">
          <img src={loginimg} alt="login img" className="login-img" />
        </div>
        <div className="formContainer">
          <h2>WELCOME BACK !!</h2>
          <form action="">
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
