import React from "react";
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="mob" src={assets.logo1} alt="" />
          <p>
           Gourmet Go is your go-to destination for fast, fresh, and flavorful food delivery. Whether you're craving a hearty meal, a healthy bite, or a sweet treat, we bring the best dishes from top-rated local restaurants straight to your doorstep. With a commitment to quality and speed, we ensure every order is prepared with care and delivered with love.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Gourmet Go.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
