import React from "react";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div class="col">
          <img src="./images/login-pic.jpg" alt="login img" class="login-img" />
        </div>
        <div class="col col2">
          <div class="container form-container">
            <h2>WELCOME BACK !!</h2>
            <form action="">
              <div class="mb-3 row">
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="inputemail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button class="btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
