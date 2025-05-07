import React from "react";
import "./Blogs.css";
import blogImage from "../../assets/Croply/blogImage.jpg";
import blogImage1 from "../../assets/Croply/blogImage1.jpg"
import blogImage2 from "../../assets/Croply/blogImage2.webp"

const Blogs = () => {
  return (
    <div className="blogs" id="blog">
      <h1>Blogs</h1>

      <div className="blogs-cards">
        <div className="blogs-card">
          <div className="blogImage">
            <img src={blogImage} alt="" />
          </div>
          {/* <img src={blogImage1} alt="" /> */}
          <p>December 5, 2024 by John</p>
          <h2>How to use Agricultural-Tech </h2>
          <p>
            Agricultural technology (Agri-Tech) improves farm productivity,
            efficiency, and sustainability by integrating modern tools like
            drones, sensors, mobile apps, and AI into farming practices. Here's
            how farmers can use Agri-Tech to boost their agricultural
            operations.
          </p>
        </div>

        <div className="blogs-card">
          <div className="blogImage">
            <img src={blogImage1} alt="" />
          </div>
          {/* <img src={blogImage1} alt="" /> */}
          <p>December 5, 2024 by John</p>
          <h2>How to Apply Fertilizer Effectively</h2>
          <p>
            Applying fertilizers correctly ensures optimal plant growth, higher
            yields, and improved soil fertility while minimizing waste and
            environmental harm. Here’s a step-by-step guide on how to use
            fertilizers effectively.
          </p>
        </div>

        <div className="blogs-card">
          <div className="blogImage">
            <img src={blogImage2} alt="" />
          </div>
          {/* <img src={blogImage1} alt="" /> */}
          <p>December 5, 2024 by John</p>
          <h2>Fungal Smut Crop Disease </h2>
          <p>
            Smut disease is a fungal infection that affects crops, leading to
            black, powdery spore masses in grains, leaves, stems, or flowers. It
            reduces yield quality and quantity, making it a serious threat to
            farmers.
          </p>
        </div>

        <div className="blogs-card">
          <div className="blogImage">
            <img src={blogImage} alt="" />
          </div>
          {/* <img src={blogImage1} alt="" /> */}
          <p>December 5, 2024 by John</p>
          <h2>How to use Agricultural-Tech </h2>
          <p>
            Agricultural technology (Agri-Tech) improves farm productivity,
            efficiency, and sustainability by integrating modern tools like
            drones, sensors, mobile apps, and AI into farming practices. Here's
            how farmers can use Agri-Tech to boost their agricultural
            operations.
          </p>
        </div>
      </div>

      <div className="ready-to-join">
      <h1>Ready to Join the Croply Community?</h1>

      <span>Whether you're a farmer or a buyer, Croply is here to make your journey easier, 
smarter, and more profitable. Sign up today and experience the power 
of smarter farming and better trading.</span>

<p>Sign up now and experience the power of smarter farming and better trading.</p>

<div className="ready-cta">
  <button className="general-button">Join as a Farmer</button>
  <button className="general-button">Join as a Buyer</button>
</div>
      </div>
    </div>
  );
};

export default Blogs;
