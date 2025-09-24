import React from "react";
import logo from "../images/logo3.png";
import de from "../images/de.jpg";
import "../style/landing.css"
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

      <div className="row align-items-center">
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
            src={de}
            alt="Main"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

 <div className="card border-0 shadow-sm bg-dark mt-4 text-light p-4 p-md-5 text-center">
  <h1
    className="fw-bold text-uppercase mb-3"
    style={{ fontFamily: "revert-layer", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
  >
    Our Mission
  </h1>
  <p
    className="lead mx-auto"
    style={{
      lineHeight: "1.8",
      maxWidth: "900px",
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    }}
  >
    Our mission is to revolutionize the traditional printing process in Pakistan by creating a smart,
    fully automated, and AI-enabled printing ecosystem. We aim to eliminate inefficiencies such as
    long queues, manual handling, and high printing costs by providing users with an accessible digital
    platform that connects universities, local print shops, and students. Through intelligent recommendations,
    real-time monitoring, and location-based shop selection, our system ensures affordability, transparency,
    and convenience while promoting eco-friendly printing practices.
  </p>
</div>


    </div>
  );
}

export default Landing;
