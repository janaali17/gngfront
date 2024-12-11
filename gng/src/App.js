import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/Login";
import Register from "./components/register";
import ConsultSpecialist from "./components/consultspecialist";
import OnlineServices from "./components/onlineservices";
import GetToKnowYourself from "./components/gettoknowyouself";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Define the routes for each component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consult-specialist" element={<ConsultSpecialist />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/gettoknowyourself" element={<GetToKnowYourself />} />
      </Routes>
    </Router>
  );
}

export default App;