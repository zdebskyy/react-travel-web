import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setClick] = useState(false);

  const handleClick = () => setClick(!isOpen);

  const onCloseMobMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={onCloseMobMenu}>
            LUXURY TRAVEL <i className="fas fa-crown"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={onCloseMobMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={onCloseMobMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={onCloseMobMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
