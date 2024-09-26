import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import LoanCategories from "./Categories";


const Home = () => {
  return (
    <>

    <section className="bg-green-900 text-white flex justify-between items-center px-10 py-20 h-screen">
      {/* Left Text Section */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold mb-4">
          Your Custom Headline
        </h1>
        <p className="text-lg mb-8">
          We help you take control of your finances with our full-suite of personalized financial products.
        </p>
        {/* Download Button */}
        <a
          href="/path-to-your-file.zip" // Path to your file (local or hosted)
          download="your-file.zip"      // Name of the downloaded file
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Download App
        </a>
        {/* Link to About Us Page */}
        <div className="mt-8">
          <Link
            to="/about"
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2">
        <img
          src="https://t3.ftcdn.net/jpg/05/91/74/14/360_F_591741423_Dd0zf4SzdbeGu6U6iKGRcn8E8RP8xioG.jpg"
          alt="Promo"
          className="w-full h-auto object-cover"
        />
      </div>
      
    </section>
    <AboutUs />
    <LoanCategories/>
    
  
    <Footer />
    </>
  
  );
};

export default Home;



