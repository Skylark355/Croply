import React from "react";
import "./About.css"
import man1 from "../../assets/Croply/man1.jpg"
import woman1 from "../../assets/Croply/woman1.png"

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h3>What is Croply?</h3>
      <span>
        Croply is a digital platform designed to empower farmers and buyers in
        Ho and beyond. We provide real-time market information, agricultural
        insights, and a vibrant community to help you succeed. Whether you're a
        farmer looking to sell your produce or a buyer seeking quality crops,
        Croply is your one-stop solution for smarter farming and seamless
        trading.
      </span>

      <div className="farmer-buyer">
      <img src={man1} alt="" />
      <img src={woman1} alt="" />
      </div>
    </div>
  );
};

export default About;
