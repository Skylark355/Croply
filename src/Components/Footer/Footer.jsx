import React from "react";
import "./Footer.css";
import linkedin from "../../assets/Croply/linkedIn.png";
import tiktok from "../../assets/Croply/tiktok.png";
import facebook from "../../assets/Croply/facebook.png";
import youtube from "../../assets/Croply/youtube.png";
import mail from "../../assets/Croply/mail.png";
import mobile from "../../assets/Croply/mobile.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Croply</h1>
        </div>

        <p>Farm Smater, Trade Better</p>

        <div className="footer-socials">
          <img src={linkedin} alt="" />
          <img src={tiktok} alt="" />
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>

      <hr />

      <div className="footer-middle">
        <div className="footer-middle-contact">
          <h3>Contant Us</h3>
          <div className="mail">
            <img src={mail} alt="" />
            <p>croply@gmail.com</p>
          </div>

          <div className="mobile">
            <img src={mobile} alt="" />
            <p>0556894226 / 0321080284</p>
          </div>
        </div>

        <div className="footer-middle-links">
        <h3>Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div className="footer-middle-suscribe">
          <h3>Subscribe to our Newsletter</h3>
          <input type="text" name="" id="" placeholder="Subscribe" />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
      <p>&copy; CopyRight 2024.</p>
      <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
