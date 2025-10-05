import React from "react";
import loginLogo from "../images/login.png";

function Login() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #e8f0ff 0%, #ffffff 100%)",
        padding: "20px",
      }}
    >
      <div
        className="row shadow-lg rounded-4 bg-white overflow-hidden w-100"
        style={{ maxWidth: "900px" }}
      >
        {/* LEFT SIDE (Desktop) */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
          <img
            src={loginLogo}
            alt="login"
            className="img-fluid"
            style={{
              width: "80%",
              maxHeight: "350px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* RIGHT SIDE (Form Section) */}
        <div className="col-md-6 col-12 p-4 p-md-5 d-flex flex-column justify-content-center">
          {/* Mobile Header */}
          <div className="d-md-none text-center mb-3">
            <h4 className="fw-bold text-dark mb-1">Log In</h4>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <img
                src={loginLogo}
                alt="logo"
                style={{ width: "40px", height: "40px", marginRight: "8px" }}
              />
              <h5 className="text-primary fw-bold mb-0">YourApp</h5>
            </div>
            <p className="text-muted small mb-3">
              Use the same method that you created your account with.
            </p>
          </div>

          {/* Desktop Header */}
          <h3 className="fw-bold text-center mb-4 text-primary d-none d-md-block">
            Welcome Back 👋
          </h3>

          {/* Login Form */}
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-4 py-2"
                placeholder="Email"
              />
            </div>

            <div className="mb-2">
              <input
                type="password"
                className="form-control rounded-4 py-2"
                placeholder="Password"
              />
            </div>

            <div className="text-end mb-3">
              <a
                href="#"
                className="text-primary small fw-semibold text-decoration-none"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 rounded-4 fw-semibold py-2"
              style={{ backgroundColor: "#0d6efd", border: "none" }}
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted small">Or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Social Buttons */}
          <div className="d-flex flex-column gap-2">
            <button className="btn btn-outline-primary w-100 rounded-4 fw-semibold py-2">
              <i className="fa-brands fa-facebook me-2"></i> Continue with Facebook
            </button>
            <button className="btn btn-outline-danger w-100 rounded-4 fw-semibold py-2">
              <i className="fa-brands fa-google me-2"></i> Continue with Google
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center mt-4 mb-0 text-muted small">
            Don’t have an account?{" "}
            <a href="#" className="text-primary fw-semibold text-decoration-none">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
