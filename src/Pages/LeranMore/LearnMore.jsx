import React from "react";
import "./LearnMore.css";
import Navbar from "../../Components/Navbar/Navbar";

const LearnMore = () => {
  return (
    <div className="learnMore">
      <Navbar />

      <div className="learnMore-container">
        <span>
          Croply is a digital platform designed to connect farmers and buyers,
          providing tools and resources to improve agricultural productivity,
          market access, and profitability. Below is a detailed overview of
          Croply, its features, benefits, and how it works:
        </span>

        <h1>What is Croply?</h1>
        <span>
          Croply is an innovative platform that bridges the gap between farmers
          and buyers, offering real-time market information, agricultural
          resources, and a community forum for knowledge sharing. It aims to
          empower farmers by providing them with the tools they need to succeed
          while helping buyers access high-quality produce directly from
          farmers.
        </span>

        <h2>Key Features of Croply</h2>

        {/* key featues  */}
        <ul>
          <p>1. Market Information</p>
          <li>
            Real-Time Prices: Farmers and buyers can access up-to-date market
            prices for various crops.
          </li>
          <li>
            Buyer and Seller Listings: Farmers can list their produce, and
            buyers can find reliable suppliers.
          </li>
          <li>
            Trend Analysis: Insights into price trends and demand fluctuations
            to help users make informed decisions.
          </li>
        </ul>

        <ul>
          <p>2. Agricultural Information</p>
          <li>
            Weather Forecasts: Accurate weather updates to help farmers plan
            planting and harvesting.
          </li>
          <li>
            Crop Advisories: Expert advice on crop management, pest control, and
            soil health.
          </li>
          <li>
            Research and Resources: Access to the latest agricultural research,
            guides, and best practices.
          </li>
        </ul>

        <ul>
          <p>3. Community Forum</p>
          <li>
            Knowledge Sharing: Farmers can connect, share experiences, and learn
            from each other.
          </li>
          <li>
            Expert Q&A: Get answers to farming questions from agricultural
            experts.
          </li>
          <li>
            Success Stories: Read about other farmers’ achievements and gain
            inspiration.
          </li>
        </ul>

        <ul>
          <p>4. Resource Directory</p>
          <li>
            Agricultural Inputs: Find high-quality seeds, fertilizers, and
            pesticides.
          </li>
          <li>
            Machinery and Equipment: Access affordable farming tools and
            machinery.
          </li>
          <li>
            Financial Services: Explore loans, insurance, and grants tailored
            for farmers.
          </li>
        </ul>

        <ul>
          <p>5. E-Commerce Platform</p>
          <li>
            Direct Sales: Farmers can sell their produce directly to buyers
            through the platform.
          </li>
          <li>
            Secure Transactions: Safe and reliable payment options for seamless
            transactions.
          </li>
          <li>
            Order Management: Tools to track orders, deliveries, and payments.
          </li>
        </ul>
        <div className="learnMore-works">
          <h1>How Croply Works</h1>
          <p>For Farmers:</p>
          <p>1. Sign Up: Create a free account and complete your profile.</p>
          <p>
            2. List Your Produce: Add details about your crops, including type,
            quantity, and price.
          </p>
          <p>
            3. Connect with Buyers: Receive inquiries and negotiate deals
            directly on the platform.
          </p>
          <p>
            4. Access Resources: Use weather forecasts, crop advisories, and
            community forums to improve your farming practices.
          </p>
          <p>
            5. Sell and Grow: Close deals, get paid, and reinvest in your farm.
          </p>

          <p>For Buyers:</p>
          <p>1. Sign Up: Create a free account and complete your profile.</p>
          <p>
            2. Browse Listings: Explore a wide variety of crops from trusted
            farmers.
          </p>
          <p>
            3. Connect with Farmers: Communicate directly to negotiate prices
            and finalize deals.
          </p>
          <p>
            4. Place Orders: Manage your transactions and track deliveries
            through the platform.
          </p>
          <p>
            5. Access Market Insights: Stay updated on price trends and
            availability to make informed purchases.
          </p>
        </div>

        <div className="learnMore-benefit">
          <h1>Benefits of Croply</h1>
          <p>For Farmers:</p>
          <li>
            Increased Income: Direct access to buyers eliminates middlemen,
            ensuring better prices.
          </li>
          <li>
            Improved Productivity: Access to agricultural resources and expert
            advice helps farmers optimize their operations.
          </li>
          <li>
            Market Access: Real-time market information and buyer connections
            open up new opportunities.
          </li>
          <li>
            Community Support: A platform to share knowledge, solve problems,
            and learn from others.
          </li>

          <p>For Buyers:</p>
          <li>
            Quality Assurance: Directly source fresh, high-quality produce from
            trusted farmers.
          </li>
          <li>
            Transparency: Real-time market prices and trends ensure fair deals.
          </li>
          <li>
            Convenience: A one-stop platform to find, negotiate, and purchase
            agricultural products.
          </li>
          <li>
            Reliability: Build long-term relationships with farmers for
            consistent supply.
          </li>
        </div>

        <div className="learnMore-relevance">
          <h1>Local Relevance of Croply</h1>
          <p>
            Croply is tailored to meet the needs of farmers and buyers in Ho and
            the Volta Region, addressing local challenges such as:
          </p>
          <li>
            Limited Market Access: Connecting farmers directly to buyers ensures
            fair prices and reduces post-harvest losses.
          </li>
          <li>
            Climate Challenges: Weather forecasts and crop advisories help
            farmers adapt to changing conditions.
          </li>
          <li>
            Resource Scarcity: A directory of agricultural inputs and financial
            services makes it easier for farmers to access what they need.
          </li>
        </div>

        <h1>Why Croply?</h1>
        <p>Croply is more than just a platform—it’s a movement to empower farmers, strengthen agricultural value chains, and create sustainable 
        livelihoods. By leveraging technology and community, Croply is transforming the way farming and trading are done in Ho and beyond</p>
      </div>
    </div>
  );
};

export default LearnMore;
