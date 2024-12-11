import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/Login";
import Register from "./components/register";
import ConsultSpecialist from "./components/consultspecialist";
import OnlineServices from "./components/onlineservices";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consult-specialist" element={<ConsultSpecialist />} />
        <Route path="/online-services" element={<OnlineServices />} />
      </Routes>
    </Router>
  );
}

export default App;