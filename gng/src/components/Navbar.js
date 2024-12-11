import React from "react";

const NavBar = ({ navigate }) => {
  return (
    <nav>
      <button onClick={() => navigate("home")}>Home</button>
      <button onClick={() => navigate("login")}>Login</button>
      <button onClick={() => navigate("register")}>Register</button>
      <button onClick={() => navigate("appointment")}>Book Appointment</button>
      <button onClick={() => navigate("gettoknowyourself")}>Get to Know Yourself</button>
    </nav>
  );
};

export default NavBar;