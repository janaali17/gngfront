import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Feedback from './components/feedback';
import GetToKnowYourself from './components/gettoknowyouself';
import LocateProduct from './components/locateproduct';
import Services from './components/onlineservices';
import Navbar from './components/navbar';
import ConsultSpecialist from './components/consultspecialist';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/gettoknowyourself" element={<GetToKnowYourself />} />
        <Route path="/locate-product" element={<LocateProduct />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/consult-specialist" element={<ConsultSpecialist />} />
      </Routes>
    </Router>
  );
}

export default App;