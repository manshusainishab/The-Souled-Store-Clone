import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>HOMEGROWN INDIAN BRAND</h2>
        <h1>Over <span>6 Million</span> Happy Customers</h1>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>NEED HELP</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
          <p>COD Available</p>
          <p>30 Days Easy Returns</p>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community Initiatives</a></li>
            <li><a href="#">Souled Army</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>MORE INFO</h3>
          <ul>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>STORE NEAR ME</h3>
          <ul>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">View More</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="app-links">
          <a href="#"><img src="google-play-badge.png" alt="Get it on Google Play" /></a>
          <a href="#"><img src="app-store-badge.png" alt="Download on the App Store" /></a>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-snapchat"></i></a>
          <a href="#"><i className="fab fa-x"></i></a> {/* Twitter (X) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
