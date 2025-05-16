import React from "react";
import "./DashboardMainContent.css";
import croplyAI from "../../assets/Croply/croplyAI.png";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-main-content-top-left">
        <h2>Hello,Theresa</h2>
        <p>Welcome to Croply Platform!</p>
      </div>
      <div className="dashboard-main-content-top-right">
        <img src={croplyAI} alt="" />
        <p>CroplyAI</p>
      </div>
    </div>
  );
};

export default DashboardMainContent;
