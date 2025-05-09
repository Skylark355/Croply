import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero" id="home">
      <h1>Croply</h1>
      <h3>Farm Smarter, Trade Better</h3>
      <p>
        At Croply, we're revolutionizing the way farmers and buyers connect. Our
        digital platform is designed to empower farmers in Ho and beyond with
        the tools, information, and resources they need to thrive in today's
        agricultural marketplace. Whether you're a farmer looking to sell your
        produce or a buyer seeking quality crops, Croply is your one-stop
        solution for smarter farming and seamless trading.
      </p>
      <button
        className="general-button"
        onClick={() => {
          navigate("/learn-more");
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Hero;
