// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">InstantLend</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/categories" className="hover:underline">Categories</Link>
          <Link to="/contact" className="hover:underline">Contact Me</Link>
          <Link to="/apply" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Apply Now</Link>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
