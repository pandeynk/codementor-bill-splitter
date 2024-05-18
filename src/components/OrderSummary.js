import React from "react";

const OrderSummary = ({ nextStep }) => {
  const orderItems = [
    { name: "Bufalina - Large", price: 5.0 },
    { name: "Calzone", price: 5.0 },
    { name: "Capricciosa", price: 4.0 },
    { name: "Cinque Terre", price: 3.0 },
    { name: "Burger", price: 5.0 },
    { name: "Chips", price: 2.0 },
    { name: "Crispy Bicol Xpress", price: 6.0 },
    { name: "Hot & Spicy", price: 7.0 },
    { name: "Hot & Spicy w/ GB Rice", price: 12.0 },
    { name: "Original w/ GB Rice", price: 12.5 },
    { name: "Pork BBQ Skewers", price: 13.0 },
    { name: "Pizza", price: 15.65 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 5.21;
  const total = subtotal - discount;
  const gst = (total * 0.09).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {orderItems.map((item, index) => (
          <li key={index} className="flex justify-between py-2 border-b">
            {item.name} <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="text-right mb-4">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Discount: -${discount.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
        <p>GST: ${gst}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => nextStep()}
          className="text-purple-600 py-2 px-4 rounded hover:text-white"
        >
          Split the Bill
        </button>
        <button
          onClick={() => nextStep()}
          className="bg-purple-600 text-white py-2 px-4 rounded"
        >
          Pay full bill
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
