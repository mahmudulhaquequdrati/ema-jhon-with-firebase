import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="your email" />
          <br />
          <input type="password" placeholder="your password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="re-enter your password"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account <Link to="/login">Log In</Link>{" "}
        </p>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
