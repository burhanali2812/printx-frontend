import React from "react";
import logo from "../images/logo3.png";
import main from "../images/main.png";
import mission from "../images/mission.png";
import "../style/landing.css";

function Landing() {


  return (
    <div style={{ width: "100%", margin: "0 auto", overflowX: "hidden" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ background: "white" }}>
        <div className="container-fluid d-flex align-items-center">
          {/* Brand Logo (left) */}
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

          {/* Links + Buttons */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Links (center only on lg+, left on mobile) */}
            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
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

            {/* Right buttons (right on lg+, left on mobile) */}
            <div className="d-flex mt-3 mt-lg-0 ms-lg-0">
              <button className="btn btn-outline-dark me-3 rounded-pill px-4">
                <i className="fa-solid fa-user-plus me-1"></i> Sign up
              </button>
              <button
                className="btn btn-outline-primary rounded-pill px-4"
                style={{ width: "137px" }}
              >
                <i className="fa-solid fa-right-to-bracket me-1"></i> Login
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Section 1 */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side card */}
          <div className="col-md-6">
            <div className="card text-start p-4 border-0">
              <h1 className="fw-bold text-primary mb-3">
                PrintX – Fast, Smart & Reliable Printing
              </h1>
              <p className="lead text-muted mb-4">
                Upload your files and get them printed anytime, anywhere –
                availability at your fingertips.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-2">
                <button className="btn btn-primary px-4 py-2 fw-semibold">
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
          <div className="col-md-6 text-center">
            <img
              src={main}
              alt="Main"
              className="img-fluid rounded"
              style={{
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>



      {/* Section Mission */}
      <div className="card border-0 shadow-sm  text-dark p-4 p-md-5" style={{ backgroundImage: "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)" }}>

        <h1
          className="fw-bold text-uppercase text-center  mb-4"
          style={{
            fontFamily: "revert-layer",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          Our Mission
        </h1>

        <div className="container">
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

            {/* Vertical Divider */}
            <div className="d-none d-md-flex col-md-1 justify-content-center">
              <div
                style={{
                  width: "2px",
                  backgroundColor: "white",
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
                in Pakistan by creating a  fully automated, and AI-enabled
                printing ecosystem. We aim to eliminate inefficiencies such as
                long queues, manual handling, and high printing costs Through
                intelligent recommendations, real-time monitoring, and
                location-based shop selection, our system ensures affordability,
                transparency, and convenience while promoting eco-friendly
                printing practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Comparison */}
      <div className="card border-0 shadow-sm  text-dark p-3 p-md-4" style={{background:"white"}}>
        <h1
          className="fw-bold text-uppercase text-center text-dark mb-4"
          style={{
            fontFamily: "revert-layer",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          Why Choose Us?
        </h1>

        <div className="container">
          <div className="row">
            {/* Shopkeeper Benefits */}
            <div className="col-12 col-md-5 mb-4 mb-md-0">
              <h3 className="fw-bold text-center  mb-4">
                For Shopkeepers
              </h3>
              <div className="row g-3">
                {[
                  { text: "Increased customer reach", icon: "fa-solid fa-chart-line" },
                  { text: "Automated order management", icon: "fa-solid fa-bolt" },
                  { text: "Secure and fast payments", icon: "fa-solid fa-credit-card" },
                  { text: "Business growth insights", icon: "fa-solid fa-chart-pie" },
                  { text: "Long-term customer loyalty", icon: "fa-solid fa-handshake" },
                ].map((feature, i) => (
                  <div className="col-12" key={i}>
                    <div className="card text-light  rounded-5 h-100 shadow-sm border-6 p-3 d-flex align-items-center flex-row"
                      style={{
                        backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
                      }}
                    >
                      <i className={`${feature.icon} me-2`} style={{ fontSize: "20px" }}></i>
                      <span className="mb-0 fw-semibold">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <p className="fw-bold mb-3">
                  Grow your business with smart printing solutions!
                </p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary rounded-pill px-4">
                    Register as Shopkeeper
                  </button>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="d-none d-md-flex col-md-2 justify-content-center">
              <div
                style={{
                  width: "2px",
                  backgroundColor: "#ccc",
                  height: "100%",
                }}
              ></div>
            </div>

            {/* Horizontal Divider for Mobile */}
            <div className="d-flex d-md-none col-12 justify-content-center">
              <div
                style={{
                  height: "2px",
                  backgroundColor: "#ccc",
                  width: "80%",
                  margin: "10px 0",
                }}
              ></div>
            </div>

            {/* User Benefits */}
            <div className="col-12 col-md-5">
              <h3 className="fw-bold text-center  mb-4">For Users</h3>
              <div className="row g-3">
                {[
                  { text: "Easy online printing", icon: "fa-solid fa-print" },
                  { text: "Affordable pricing", icon: "fa-solid fa-tags" },
                  { text: "Location-based shop selection", icon: "fa-solid fa-location-dot" },
                  { text: "Save time & skip queues", icon: "fa-solid fa-clock" },
                  { text: "Eco-friendly printing options", icon: "fa-solid fa-leaf" },
                ].map((feature, i) => (
                  <div className="col-12" key={i}>
                    <div className="card h-100 text-light  shadow-sm border-0 rounded-5 p-3 d-flex align-items-center flex-row" s style={{
                      backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
                    }}>
                      <i className={`${feature.icon} me-2`} style={{ fontSize: "20px" }}></i>
                      <span className="fw-semibold">{feature.text}</span>
                    </div>

                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <p className="fw-bold mb-3">
                  Experience affordable, and eco-friendly printing!
                </p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary rounded-pill px-4">
                    Register as User
                  </button>
                </div>
              </div>




            </div>
          </div>



        </div>
      </div>


      {/* Section Smart Printing */}
      <div className="card border-0 shadow-sm  text-dark bg-light text-center p-4 p-md-5" style={{
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
              }}>
        {/* Heading */}
        <h2 className="fw-bold mb-3">Smart Printing Made Simple</h2>
        <p className="text-muted mb-5">
          Whether you're a shopkeeper or a user, our platform makes printing seamless
          and efficient in just a few easy steps.
        </p>

        {/* Features */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <i className="fa-solid fa-print fa-2x mb-3 text-primary"></i>
              <h5 className="fw-bold">Easy Online Printing</h5>
              <p className="text-muted">
                Upload and order prints online without leaving your home.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <i className="fa-solid fa-store fa-2x mb-3 text-success"></i>
              <h5 className="fw-bold">Shopkeeper Growth</h5>
              <p className="text-muted">
                Expand your customer reach and manage orders digitally.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <i className="fa-solid fa-handshake fa-2x mb-3 text-warning"></i>
              <h5 className="fw-bold">Customer Loyalty</h5>
              <p className="text-muted">
                Build strong, lasting relationships with your customers.
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-5">

          <button className="btn btn-dark rounded-pill px-4">
            Get started Today
          </button>
        </div>
      </div>

      {/* Section Testimonial */}
      <div className="container text-center my-5">
        {/* Heading */}
        <h2 className="fw-bold mb-3">Users & Shopkeepers Love PrintX</h2>
        <p className="text-muted mb-4">
          Real stories from our community who trust PrintX for their printing needs.
        </p>

        {/* Trust info */}
        <p className="fw-semibold mb-4">
          Trusted by <span className="text-primary">10,000+</span> users & shopkeepers
          <br />
          <span className="text-warning">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </span>
          &nbsp; 4.9/5
        </p>

        {/* Testimonials */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 h-100 p-4 text-start position-relative rounded-4"
              style={{
                background: "linear-gradient(135deg, #e0eafc, #f9f9f9)",
              }}
            >
              {/* Top section */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold mb-1">Ali Khan</h6>
                  <span className="text-muted">@alikhan</span>
                </div>
                <span className="badge bg-dark">Shopkeeper</span>
              </div>

              {/* Review */}
              <p className="mt-3 mb-5">
                “PrintX helped me grow my business and reach new customers online.
                Orders are now streamlined and easy to manage.”
              </p>

              {/* Stars */}
              <div className="text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              {/* Date bottom-right */}
              <small className="text-muted position-absolute bottom-0 end-0 p-3">
                Sep 12, 2025
              </small>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 h-100 p-4 text-start position-relative rounded-4"
              style={{
                background: "linear-gradient(135deg, #e0eafc, #f9f9f9)",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold mb-1">Sara Ahmed</h6>
                  <span className="text-muted">@sara_ahmed</span>
                </div>
                <span className="badge bg-primary">User</span>
              </div>

              <p className="mt-3 mb-5">
                “Ordering prints online saves me so much time. I love the eco-friendly
                options and instant shop selection feature.”
              </p>

              <div className="text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>

              <small className="text-muted position-absolute bottom-0 end-0 p-3">
                Oct 2, 2025
              </small>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              className="card shadow-sm border-0 h-100 p-4 text-start position-relative rounded-4"
              style={{
                background: "linear-gradient(135deg, #e0eafc, #f9f9f9)",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="fw-bold mb-1">Bilal Raza</h6>
                  <span className="text-muted">@bilalraza</span>
                </div>
                <span className="badge bg-success">Shopkeeper</span>
              </div>

              <p className="mt-3 mb-5">
                “Managing printing requests has never been easier. PrintX makes it
                simple, and efficient for both me and my customers.”
              </p>

              <div className="text-warning">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <small className="text-muted position-absolute bottom-0 end-0 p-3">
                Nov 18, 2025
              </small>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Landing;
