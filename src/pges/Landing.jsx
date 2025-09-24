import React from "react";
import logo from "../images/logo3.png";
import main from "../images/main.png";
import mission from "../images/mission.png";
import "../style/landing.css";
function Landing() {
  return (
    <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
      <nav className="navbar navbar-expand-lg " style={{ background: "white" }}>
        <div className="container-fluid">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ's
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div>
              <button className="btn btn-outline-dark me-3 rounded-pill px-4">
                <i className="fa-solid fa-user-plus me-1"></i> Sign up
              </button>
              <button
                className="btn btn-outline-primary rounded-pill px-4"
                style={{ width: "137px" }}
              >
                <i className="fa-solid fa-right-to-bracket me-1 "></i> Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="row align-items-center container">
        {/* Left side text */}
        <div className="col-md-6">
          <h1 className="fw-bold">Hello</h1>
          <p className="lead">
            This is where you can put a short intro or tagline.
          </p>
        </div>

        {/* Right side image */}
        <div className="col-md-6 text-center">
          <img
            src={main}
            alt="Main"
            style={{
              width: "100%",
              maxHeight: "900px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      <div className="card border-0 shadow-sm bg-dark mt-4 text-light p-4 p-md-5">
        <h1
          className="fw-bold text-uppercase text-center mb-4"
          style={{
            fontFamily: "revert-layer",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          Our Mission
        </h1>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
            <img
              src={mission}
              alt="Mission"
              className="img-fluid rounded"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Vertical Divider (only visible on medium+ screens) */}
          <div className="d-none d-md-flex col-md-1 justify-content-center">
            <div
              style={{
                width: "2px",
                backgroundColor: "#6c757d", // light gray divider
                height: "80%",
              }}
            ></div>
          </div>

          {/* Right Text */}
          <div className="col-12 col-md-6">
            <p
              className="lead mx-auto text-center text-md-start"
              style={{
                lineHeight: "1.8",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              }}
            >
              Our mission is to revolutionize the traditional printing process
              in Pakistan by creating a smart, fully automated, and AI-enabled
              printing ecosystem. We aim to eliminate inefficiencies such as
              long queues, manual handling, and high printing costs by providing
              users with an accessible digital platform that connects
              universities, local print shops, and students. Through intelligent
              recommendations, real-time monitoring, and location-based shop
              selection, our system ensures affordability, transparency, and
              convenience while promoting eco-friendly printing practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
