import React from "react";
import "./AgroInputsTop.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import croplyAI from "../../assets/Croply/croplyAI.png";
import { useNavigate } from "react-router-dom";

const AgroInputsTop = () => {
  const navigate = useNavigate();

  return (
    <div className="agro-inputs-top">
      <div
        className="arrow"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <FaArrowLeft className="arrow-icon" />
        <h3>Agro Inputs</h3>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="dashboard-main-content-top-right">
        <img src={croplyAI} alt="" />
        <p>CroplyAI</p>
      </div>
    </div>
  );
};

export default AgroInputsTop;
