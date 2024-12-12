import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <p>Log in to Glow in Grace to explore your skincare journey.</p>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;