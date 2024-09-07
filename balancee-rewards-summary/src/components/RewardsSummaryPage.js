import React, { useState } from "react";
import EarningsOverview from "./EarningsOverview";
import CashbackHistory from "./CashbackHistory";
import CashoutOptions from "./CashoutOptions";
import { dummyData } from "../data/dummyData";
import "../styles.css";

const RewardsSummaryPage = () => {
  const [earnings] = useState(dummyData.earnings);
  const [history] = useState(dummyData.cashbackHistory);

  const handleCashout = () => {
    alert("Cashout successful!");
  };

  const handlePromoCode = () => {
    alert("Promo Code generated successfully!");
  };

  return (
    <div className="rewards-summary-page">
      <h1>Rewards Summary</h1>
      <EarningsOverview
        totalCashback={earnings.totalCashback}
        currentBalance={earnings.currentBalance}
      />
      <CashbackHistory history={history} />
      <CashoutOptions onCashout={handleCashout} onPromoCode={handlePromoCode} />
    </div>
  );
};

export default RewardsSummaryPage;
