
import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const years = parseFloat(loanTerm);

    const monthlyInterestRate = annualInterestRate / 12;


    const payment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);


    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">Loan Calculator</h1>
        <form className="space-y-6" onSubmit={calculatePayment}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Annual interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter loan term in years"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              required
            />
          </div>


          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Calculate Monthly Payment
            </button>
          </div>
        </form>

    
        {monthlyPayment !== null && (
          <div className="mt-6 text-center bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-700">Your Monthly Payment: ${monthlyPayment}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
