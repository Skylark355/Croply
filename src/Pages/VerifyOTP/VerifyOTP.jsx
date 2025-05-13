import React from "react";
import "./VerifyOTP.css";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="verify">
      <h1>Croply</h1>
      <h2>Check your Phone</h2>
      <span>We have sent a 4-digit code to your phone</span>
      <div className="otp">
        <p className="boxes"></p>
        <p className="boxes"></p>
        <p className="boxes"></p>
        <p className="boxes"></p>
      </div>
      <button
        className="verify-btn btn"
        onClick={() => {
          navigate("/success");
        }}
      >
        Verify
      </button>
      <p className="sms">Did not receive an SMS ?</p>
      <button className="send-again-btn btn">Send code again</button>
    </div>
  );
};

export default VerifyOTP;
