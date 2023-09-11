import React from "react";
import loginimg from "../../images/login-pic.jpg";
import "./Login.css"

export default function Login() {

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { AuthUser, setAuthUser, isLoggedIn, setisLoggedIn } =
    useContext(AuthContext);

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

    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      setisLoggedIn(false);
      console.error();

    } else {
      setAuthUser(result);
      setisLoggedIn(true);
      setloginData({
        email: "",
        password: "",
      });
    }
  };

  console.log(AuthUser);

  setTimeout(() => {
    if (isLoggedIn) {
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
          <h2>WELCOME BACK !!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="email"
                  className="signupItem"
                  id="signupEmail"
                  name="email"
                  value={loginData.email}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="password"
                  className="signupItem"
                  id="signupPass"
                  name="password"
                  value={loginData.password}
                  onChange={handleInput}
                  required
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
