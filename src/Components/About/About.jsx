import React from "react";
import "./About.css";
import man1 from "../../assets/Croply/man1.png";
import woman1 from "../../assets/Croply/woman1.png";
import man2 from "../../assets/Croply/man2.png";
import aboutImage from "../../assets/Croply/aboutImage.png";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Us</h1>
      <h3 className="sub-title">What is Croply?</h3>
      <span className="description">
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

      <h3 className="sub-title">Why Choose Croply?</h3>
      <h3 className="sub-title">FARMERS</h3>
      <h3 className="sub-title">Grow Smarter, sell Better with Croply</h3>
      <img src={man2} alt="" className="man2" />

      <div className="first-cards">
        <div className="first-card-top">
          <div className="first-card-top-left">
            <h4>Real-Time Market Information</h4>
            <div className="card-overlay">
              <h4>Real-Time Market Information</h4>
              <p className="subtext">
                Stay ahead with up-to-date market prices,buyer and seller
                details,and trends that matter. Make informed decisions and
                maximize your profits.
              </p>
            </div>
          </div>

          <div className="first-card-top-left">
            <h4>Agricultural Insights At Your Fingertips</h4>
            <div className="card-overlay">
              <h4>Agricultural Insights At Your Fingertips</h4>
              <p className="subtext">
                Access weather forecast, crop advisors, and the latest research
                to optimize your farming practices. Knowledge is power, and
                we're here to keep you informed.
              </p>
            </div>
          </div>
        </div>

        <div className="first-card-top">
          <div className="first-card-top-left">
            <h4>A Thriving Community</h4>
            <div className="card-overlay">
              <h4>A Thriving Community</h4>
              <p className="subtext">
                Join a network of farmers and buyers who share your passion for
                agricultre. Exchange ideas, share experiences, and learn from
                each other in our vibrant community forum.
              </p>
            </div>
          </div>

          <div className="first-card-top-left">
            <h4>Resources Directory</h4>
            <div className="card-overlay">
              <h4>Resources Directory</h4>
              <p className="subtext">
                Find everything you need in one place-agricultural inputs,
                equipment, financial services, and more. Croply connects you to
                the rsources that drive success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="general-button about-button">Join as a farmer</button>
      <h3 className="sub-title">BUYERS</h3>
      <h3 className="sub-title">Source Fresh, Quality Crops with Ease</h3>
      <img src={aboutImage} alt="" className="aboutImage" />

      <div className="first-cards second">
        <div className="first-card-top">
          <div className="first-card-top-left">
            <h4>Direct Farmer Connections</h4>
            <div className="card-overlay">
              <h4>Direct Farmer Connections</h4>
              <p className="subtext">
                Source fresh produce directly from trusted farmers, ensuuring
                quality and transparency
              </p>
            </div>
          </div>

          <div className="first-card-top-left">
            <h4>Real-Time Market Informations</h4>
            <div className="card-overlay">
              <h4>Real-Time Market Informations</h4>
              <p className="subtext">
                Stay updated with the latest prices and availability to make
                informed buying decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="first-card-top">
          <div className="first-card-top-left">
            <h4>Wide Variety of Crops</h4>
            <div className="card-overlay">
              <h4>Wide Variety of Crops</h4>
              <p className="subtext">
                Access a diverse range of crops from farmers in Ho and beyound.
              </p>
            </div>
          </div>

          <div className="first-card-top-left">
            <h4>Streamlined Transactions</h4>
            <div className="card-overlay">
              <h4>Streamlined Transactions</h4>
              <p className="subtext">
                Negotiate, purchase and manage orders seamlessly through our
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="general-button about-button">Join as a buyer</button>

      <h2>How Croply Works</h2>

      <div className="how-croply-works-cards">
        <div className="how-croply-works-top-cards">
          <div className="how-croply-works-card">
            <h5>1</h5>
            <p>Sign up</p>
            <span>Create your free account in minutes.</span>
          </div>

          <div className="how-croply-works-card">
            <h5>2</h5>
            <p>List Your Produce (Farmers) / 
            Browse Listings (Buyers)</p>
            <span>Showcase your crops or explore available produce.</span>
          </div>
        </div>

        <div className="how-croply-works-top-cards second">
          <div className="how-croply-works-card">
            <h5>3</h5>
            <p>Connect</p>
            <span>Communicate directly with buyers or farmers to negotiate deals.</span>
          </div>

          <div className="how-croply-works-card">
            <h5>4</h5>
            <p>Sell/Buy</p>
            <span>Close deals, manage orders, and grow your business.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
