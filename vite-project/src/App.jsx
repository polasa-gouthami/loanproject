// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';  // Import the Navbar
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import ContactMe from './pages/ContactMe';
import ApplyNow from './pages/ApplyNow';
import Login from './pages/Login';
// import Calculator from './pages/Caluculations';
// import Footer from './pages/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Include the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
        {/* <Route path="/caluculator" element={<Calculator />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
