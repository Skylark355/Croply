import React from "react";
import "./Dashboard.css";
import DashBpardTopBar from "../../Components/DashboardTopBar/DashBpardTopBar";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardMainContent from "../DashboardMainContent/DashboardMainContent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <DashBpardTopBar /> */}
      {/* <DashboardSidebar /> */}
      <div className="dashboard-content">
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default Dashboard;
