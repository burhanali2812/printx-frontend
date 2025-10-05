import React from "react";
import loginLogo from "../images/login.png";

function Login() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Mobile Image Header with Overlay Text */}
      <div className="d-md-none position-relative w-100" style={{ height: "220px" }}>
        <img
          src={loginLogo}
          alt="login"
          className="img-fluid w-100 h-100"
          style={{ objectFit: "cover"}}
        />
        
      </div>

      <div
        className="row shadow-lg rounded-4 overflow-hidden bg-white w-100 mt-3"
        style={{ maxWidth: "900px" }}
      >
        {/* LEFT SIDE (Only for Laptop/Desktop) */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-white p-4">
          <img
            src={loginLogo}
            alt="login"
            style={{
              width: "80%",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* RIGHT SIDE - LOGIN FORM */}
        <div className="col-md-6 col-12 bg-white p-4 p-md-5 d-flex flex-column justify-content-center">
          <h3 className="fw-bold text-center mb-4 text-primary">Welcome Back 👋</h3>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 rounded-3 fw-semibold py-2"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-3 text-muted">or</div>

          <div className="d-flex flex-column gap-2 mt-3">
            <button className="btn btn-outline-danger w-100 rounded-3 fw-semibold">
              <i className="fa-brands fa-google me-2"></i> Continue with Google
            </button>

            <button className="btn btn-outline-primary w-100 rounded-3 fw-semibold">
              <i className="fa-brands fa-facebook me-2"></i> Continue with Facebook
            </button>
          </div>

          <p className="text-center mt-4 mb-0 text-muted">
            Don’t have an account?{" "}
            <a href="#" className="text-primary fw-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
