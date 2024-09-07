import React from "react";

const CashbackHistory = ({ history }) => {
  return (
    <div className="cashback-history">
      <h2>Cashback History</h2>
      <ul>
        {history.map((transaction, index) => (
          <li key={index}>
            <p>Date: {transaction.date}</p>
            <p>Amount Earned: ${transaction.amount}</p>
            <p>Booking Details: {transaction.bookingDetails}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CashbackHistory;
