import React from "react";
import logo from "../images/download.png";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
// import { ReactComponent as Brand } from "../../assets/icons/logo.svg";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1>
              PEB Steel Lloyd<span>.</span>
            </h1>
            <img src={logo} alt="" />
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <Hamburger /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/moreprod">Product</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/moreprod">Product</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
    </div>
  );
};
