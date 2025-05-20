import React from "react";
import "./ContentCard.css";

const ContentCard = () => {
  return (
    <div className="contentCard">
      <div className="number-card">
        <div className="number-card-title">
          <span>Number of Active Listing </span>
        </div>
        <div className="number-card-text">
          <p>2</p>
        </div>
      </div>

      <div className="number-card">
        <div className="number-card-title">
          <span>Total Sales</span>
        </div>
        <div className="number-card-text">
          <p>2</p>
        </div>
      </div>

      <div className="number-card">
        <div className="number-card-title">
          <span>Buyer Inquiries</span>
        </div>
        <div className="number-card-text">
          <p>2</p>
        </div>
      </div>

      <div className="number-card">
        <div className="number-card-title">
          <span>Weather</span>
        </div>
        <div className="number-card-text">
          <p>34° Mostly Cloudy </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
