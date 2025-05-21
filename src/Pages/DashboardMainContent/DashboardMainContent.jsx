import React from "react";
import "./DashboardMainContent.css";
import croplyAI from "../../assets/Croply/croplyAI.png";
import ContentCard from "../../Components/ContentCard/ContentCard";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import Services from "../../Components/Services/Services";

const DashboardMainContent = () => {
  return (
    
    <div className="dashboard-main-content">

      {/* <DashboardSidebar/> */}
      <div className="top">
      <div className="dashboard-main-content-top-left">
        <h2>Hello,Theresa</h2>
        <p>Welcome to Croply Platform!</p>
      </div>
      <div className="dashboard-main-content-top-right">
        <img src={croplyAI} alt="" />
        <p>CroplyAI</p>
      </div>
      </div>
      <ContentCard />
      <Services />
      {/* <Services /> */}
    </div>
  );
};

export default DashboardMainContent;
