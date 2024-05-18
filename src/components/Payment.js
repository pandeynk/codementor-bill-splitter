import React, { useState } from "react";

const Payment = ({ splitDetails }) => {
  const [tipPercentage, setTipPercentage] = useState(0.1);
  const [customTip, setCustomTip] = useState("");

  const handleTipChange = (e) => {
    setTipPercentage(parseFloat(e.target.value));
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    setTipPercentage(parseFloat(e.target.value) / splitDetails.share);
  };

  const total = parseFloat(splitDetails.share);
  const tipAmount = (total * tipPercentage).toFixed(2);
  const finalAmount = (total + parseFloat(tipAmount)).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Would you like to add a tip?
      </h2>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setTipPercentage(0.05)}
          className={`p-4 border rounded ${
            tipPercentage === 0.05 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>5%</span>
          <span className="text-gray-500">{(total * 0.05).toFixed(2)}</span>
        </button>
        <button
          onClick={() => setTipPercentage(0.1)}
          className={`p-4 border rounded ${
            tipPercentage === 0.1 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>10%</span>
          <span className="text-gray-500">{(total * 0.1).toFixed(2)}</span>
        </button>
        <button
          onClick={() => setTipPercentage(0.15)}
          className={`p-4 border rounded ${
            tipPercentage === 0.15 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>15%</span>
          <span className="text-gray-500">{(total * 0.15).toFixed(2)}</span>
        </button>
        <input
          type="number"
          value={customTip}
          onChange={handleCustomTipChange}
          placeholder="custom"
          className="p-4 border rounded w-24 text-center"
        />
      </div>
      <div className="text-lg mb-4">
        <p>
          You are paying: <span className="font-semibold">${finalAmount}</span>
        </p>
      </div>
      <div className="mb-4">
        <button className="bg-black text-white py-2 px-4 rounded w-full flex items-center justify-center mb-4">
          <img
            src="/apple-pay-logo.png"
            alt="Apple Pay"
            className="w-6 h-6 mr-2"
          />{" "}
          Pay with Apple Pay
        </button>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Card number"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Expiration MM / YY"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>100% Secure payments powered by Qlub_</p>
        <p>
          By using Qlub_, you accept our{" "}
          <a href="#" className="text-purple-600">
            Terms and Conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Payment;
