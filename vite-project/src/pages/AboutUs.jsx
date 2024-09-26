import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-5">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We help individuals and businesses achieve financial freedom with personalized loan solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - About the Company */}
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">Who We Are</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-bold text-gray-800">LoanWise</span>, we believe in empowering our clients with financial solutions tailored to their unique needs. With years of experience in the lending industry, we offer a variety of loan products designed to meet the challenges of today's economic landscape.
            </p>
          </div>

          {/* Right Section - Mission / Core Values */}
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to provide accessible and flexible loan options that enable individuals and businesses to thrive financially. We are committed to:
            </p>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-600">
              <li>Offering competitive interest rates.</li>
              <li>Providing quick and hassle-free loan approvals.</li>
              <li>Supporting clients with personalized financial guidance.</li>
              <li>Maintaining transparency and trust in all transactions.</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-green-700 mb-6">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-2xl font-semibold mb-3 text-green-700">Flexible Loan Options</h4>
              <p className="text-gray-600">
                We offer a wide range of loan products to meet your personal or business financial needs.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-2xl font-semibold mb-3 text-green-700">Fast Approval</h4>
              <p className="text-gray-600">
                Get your loan approved quickly with our streamlined application process.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-2xl font-semibold mb-3 text-green-700">Low Interest Rates</h4>
              <p className="text-gray-600">
                Benefit from competitive interest rates and flexible repayment terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
