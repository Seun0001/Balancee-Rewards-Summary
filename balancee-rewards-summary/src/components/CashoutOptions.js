import React from "react";

const CashoutOptions = ({ onCashout, onPromoCode }) => {
  return (
    <div className="cashout-options">
      <h2>Cashout Options</h2>
      <button onClick={onCashout}>Direct Cashout</button>
      <button onClick={onPromoCode}>Convert to Promo Code</button>
    </div>
  );
};

export default CashoutOptions;
