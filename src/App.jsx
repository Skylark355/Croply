import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LearnMore from "./Pages/LeranMore/LearnMore";
import Auth from "./Pages/Auth/Auth";
import VerifyOTP from "./Pages/VerifyOTP/VerifyOTP";
import AccountSuccess from "./Pages/AccountSuccess/AccountSuccess";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardMainContent from "./Pages/DashboardMainContent/DashboardMainContent";
import DashboardList from "./Pages/DashboardListings/DashboardList";
import DashboardNavs from "./Components/DashboardNavs/DashboardNavs";
import DashboadMarketPlace from "./Pages/DashboardMarketplace/DashboadMarketPlace";
import DashboardCommunity from "./Pages/DashboardCommunity/DashboardCommunity";
import DashboardResources from "./Pages/DashboardResources/DashboardResources";
import AgroInputs from "./Pages/AgroInputs/AgroInputs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/success" element={<AccountSuccess />} />

        {/* admin dashboard */}
        <Route element={<DashboardNavs />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-listings" element={<DashboardList />} />
          <Route
            path="/dashboard-market-place"
            element={<DashboadMarketPlace />}
          />
          <Route path="/dashboard-resources" element={<DashboardResources />} />
          <Route path="/dashboard-community" element={<DashboardCommunity />} />
          <Route path="/agro-inputs" element={<AgroInputs />}/>
        </Route>

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/dashboard-home" element={<Dashboard />} /> */}
        {/* <Route path="/dashboard-listings" element={<DashboardList />} /> */}
      </Routes>
    </>
  );
};

export default App;
