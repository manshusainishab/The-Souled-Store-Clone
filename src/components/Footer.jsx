import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="footer-top">
        <div className='footer-start'><h1>HOMEGROWN INDIAN BRAND</h1></div>
        <h1>Over <span>6 Million</span> Happy Customers</h1>
      </div>
    <footer className="footer">

      <div className="footer-links">
        <div className="footer-column">
          <h3>NEED HELP</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Track Order</a></li>
            <li><a href="/">Returns & Refunds</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">My Account</a></li>
          </ul>
          <p><i data-v-3610fc48="" class=" circleicon_light fa fa-rupee"></i>COD Available</p>
          <p><i data-v-3610fc48="" class="circleicon_light fa fa-refresh"></i>30 Days Easy Returns</p>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Community Initiatives</a></li>
            <li><a href="/">Souled Army</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>MORE INFO</h3>
          <ul>
            <li><a href="/">T&C</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>STORE NEAR ME</h3>
          <ul>
            <li><a href="/">Mumbai</a></li>
            <li><a href="/">Pune</a></li>
            <li><a href="/">Bengaluru</a></li>
            <li><a href="/">Bangalore</a></li>
            <li><a href="/">View More</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='footer-bottom-head'><i class="fa fa-mobile-phone"></i>   EXPERIENCE THE SOULED STORE APP</div>
        <div className="app-links">
          <a href="/"><img src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="Get it on Google Play" /></a>
          <a href="/"><img src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="Download on the App Store" /></a>
        </div>
        <div className="social-links">
          Follow Us:
          <a href="https://www.facebook.com/souledstore/"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/TheSouledStore/"><i className="fa fa-instagram"></i></a>
          <a href="https://www.snapchat.com/add/thesouledstore"><i className="fa fa-snapchat"></i></a>
          {/* <a href="/"><i className="fa fa-x"></i></a> Twitter (X) */}
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
