import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
export default function Login() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const { setUserDetail, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const onSubmit = (userDetails) => {
    //make POST call after validations
    console.log("e", userDetails);
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.encodedToken && res.foundUser) {
          setUserDetail({ token: res.encodedToken, ...res.foundUser });
          navigate("/home");
        }
        //todo -->handle error
      })
      .catch((err) => console.log(err));
  };
  const valid = () => {
    //Add more validations in future
    return loginForm.username.length > 0 && loginForm.password.length > 0;
  };
  return (
    <div className="login-container">
      <input
        placeholder="Enter username..."
        value={loginForm.username}
        onChange={handleChange}
        name="username"
      />
      <input
        placeholder="Enter password..."
        value={loginForm.password}
        onChange={handleChange}
        name="password"
        type="password"
      />
      <button
        disabled={!valid()}
        onClick={() => onSubmit(loginForm)}
        className="login-submit-btn"
      >
        Submit
      </button>
      <button
        onClick={() => {
          setLoginForm({
            username: "adarshbalika",
            password: "adarshBalika123",
          });
          onSubmit({ username: "adarshbalika", password: "adarshBalika123" });
        }}
        className="login-submit-btn"
      >
        Login with test creds
      </button>
      <NavLink to="/signup">
        Don't have a account?..click here to create a account
      </NavLink>
    </div>
  );
}
