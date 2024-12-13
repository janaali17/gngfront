import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import GetToKnowYourself from "./components/gettoknowyourself";
import LocateProduct from "./components/locateproduct";
import ConsultSpecialist from "./components/consultspecialist";
import OnlineServices from "./components/onlineservices";
import NavBar from "./components/navbar"; 
import "./App.css"; 
import Login from "./components/login";
import Register from "./components/register"; 
import Feedback from './components/feedback';
import Services from './components/services';

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Navbar appears consistently across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gettoknowyourself" element={<GetToKnowYourself />} />
        <Route path="/locate-product" element={<LocateProduct />} />
        <Route path="/services/consult-specialist" element={<ConsultSpecialist />} />
        <Route path="/services/online-services" element={<OnlineServices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} /> 
        <Route path="/services" element={<Services />} />

      </Routes>
    </Router>
  );
};

export default App;