// src/components/LoanCategories.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanCategories = () => {
  const categories = [
    { title: 'Personal Loan', description: 'Short-term loans for personal expenses.' },
    { title: 'Home Loan', description: 'Long-term loans for purchasing or constructing a home.' },
    { title: 'Auto Loan', description: 'Loans for buying cars and other vehicles.' },
    { title: 'Education Loan', description: 'Loans to cover education-related expenses.' },
  ];

  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/ApplyNow');
  };


  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -500, 
      behavior: 'smooth',
    });
  };

  
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 500, 
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Categories</h1>

    
      <div className="relative">
    
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600"
          onClick={scrollLeft}
        >
          ←
        </button>

        
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-6 scrollbar-hide"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleApplyNow}
              >
                ApplyNow
              </button>
            </div>
          ))}
        </div>


        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600"
          onClick={scrollRight}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LoanCategories;
