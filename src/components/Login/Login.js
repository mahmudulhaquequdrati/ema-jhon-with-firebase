import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInusingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/shop";
  console.log("came from", location.state?.from);

  const handleGoogleLogin = () => {
    signInusingGoogle().then((result) => {
      history.push(redirect);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Please Log in</h2>
        <form onSubmit="">
          <input type="email" placeholder="type your email" />
          <br />
          <input type="password" placeholder="type your password" />
          <br />
          <input type="submit" value="Log in" />
        </form>
        <p>
          New to Ema-Jhon <Link to="/register">Create Account</Link>{" "}
        </p>
        <button className="btn-regular" onClick={handleGoogleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
