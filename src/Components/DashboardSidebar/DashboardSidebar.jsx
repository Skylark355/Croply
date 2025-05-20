import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./DashboardSidebar.css";
import home from "../../assets/Croply/home.png";
import listing from "../../assets/Croply/listing.png";
import market from "../../assets/Croply/marketPrice.png";
import resource from "../../assets/Croply/resources.png";
import community from "../../assets/Croply/community.png";
import signout from "../../assets/Croply/signout.png";

const DashboardSidebar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div className="dashboard-sidebar">
      <ul className={isOpen ? "sidebar active open" : "sidebar"}>
        <a
          href=""
          onClick={() => {
            setMenu("home");
            closeMenu();
            navigate("/dashboard-home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          <img src={home} alt="" />
          Home
        </a>

        <a
          href=""
          onClick={() => {
            setMenu("listings");
            closeMenu();
            navigate("/dashboard-listings");
          }}
          className={menu === "listings" ? "active" : ""}
        >
          <img src={listing} alt="" />
          Listings
        </a>

        <a
          href=""
          onClick={() => {
            setMenu("market");
            closeMenu();
            navigate("/dashboard-market-place");
          }}
          className={menu === "market" ? "active" : ""}
        >
          <img src={market} alt="" />
          Market Prices
        </a>

        <a
          href=""
          onClick={() => {
            setMenu("resources");
            closeMenu();
            navigate("/dashboard-resources");
          }}
          className={menu === "resources" ? "active" : ""}
        >
          <img src={resource} alt="" />
          Resources
        </a>

        <a
          href=""
          onClick={() => {
            setMenu("community");
            // closeMenu();
            navigate("/dashboard-community");
          }}
          className={menu === "community" ? "active" : ""}
        >
          <img src={community} alt="" />
          Community
        </a>

        <a
          href=""
          onClick={() => {
            setMenu("community");
            // closeMenu();
          }}
          className={menu === "community" ? "active" : ""}
        >
          <img src={signout} alt="" />
          Signout
        </a>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
