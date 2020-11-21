import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="footer-link-title">About us</h2>
            <Link to="/"> Some link1</Link>
            <Link to="/"> Some link2</Link>
          </div>

          <div className="footer-link-items">
            <h2 className="footer-link-title">Contact us</h2>
            <Link to="/"> Some link1</Link>
            <Link to="/"> Some link2</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="footer-link-title">Travel info</h2>
            <Link to="/"> Some link1</Link>
            <Link to="/"> Some link2</Link>
          </div>
          <div className="footer-link-items">
            <h2 className="footer-link-title">Social Media</h2>
            <Link to="/"> Instagram</Link>
            <Link to="/"> Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              LUXURY TRAVEL <i className="fas fa-crown"></i>
            </Link>
          </div>
          <small className="website-rights">LUXURY TRAVEL &copy; 2020</small>
          <div className="social-icons">
            <a
              className="social-icons-link facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="social-icons-link instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
