import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-1">
        <Link className="navbar-brand ms-3" to="/">
          <img
            src="media\Images\logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              //   style="--bs-scroll-height: 100px;"
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link> 
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
