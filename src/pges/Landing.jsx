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

      <div className="row align-items-center  ">
        {/* Left side card */}
       <div className="col-md-6">
  <div className="card text-start p-5 border-0">
    {/* Title */}
    <h1 className="fw-bold text-primary mb-3">
      PrintX – Fast, Smart & Reliable Printing
    </h1>

    {/* Subtitle / Message */}
    <p className="lead text-muted mb-4">
      Upload your files and get them printed anytime, anywhere –
      availability at your fingertips.
    </p>

    {/* Action Buttons */}
    <div className="d-flex flex-wrap gap-3 mb-2">
      <button className="btn btn-primary px-4 py-2 fw-semibold" >
        Sign Up Now
      </button>
    </div>

    <p className="mt-4 text-muted small">
      ⚡ Fast service • 💰 Affordable rates • 📑 Multiple formats
      supported
    </p>
  </div>
</div>


        {/* Right side card */}
        <div className="col-md-6">
          <div className="card text-center p-3 border-0">
            <img
              src={main}
              alt="Main"
              style={{
                width: "90%",
                marginLeft : "auto",
                marginRight : "auto",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
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
                backgroundColor: "white", // light gray divider
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

      <div className="card border-0 shadow-sm bg-light mt-4 text-dark p-3 p-md-2">
        <h1
          className="fw-bold text-uppercase text-center mb-4"
          style={{
            fontFamily: "revert-layer",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          Why choose us?
        </h1>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
            <h1>Shop</h1>
          </div>

          {/* Vertical Divider (only visible on medium+ screens) */}
          <div className="d-none d-md-flex col-md-1 justify-content-center">
            <div
              style={{
                width: "2px",
                backgroundColor: "white", // light gray divider
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
