import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link> {/* Add Link to Contact Page */}
          </h3>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: support@loanapp.com</p>
          <p className="text-gray-400">Address: 123 Loan Street, Finance City</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 LoanApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
