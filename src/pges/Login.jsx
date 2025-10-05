import React from "react";
import loginLogo from "../images/login.png";
import printxLogo from "../images/logo3.png"
import "../style/login.css"
import { FaArrowLeft } from "react-icons/fa"; // back icon

function Login() {
  return (
    <div
      className=" min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background:
          " linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(198, 218, 245, 1) 94%)",
        
      }}
    >
      <div
        className="row shadow-lg bg-white col-sm-none overflow-hidden w-100"
        style={{
          maxWidth: "900px",
          height: "100%", 
        }}
      >
        {/* LEFT SIDE (Desktop Only) */}
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
        <div className="col-md-6 col-12 p-0 d-flex flex-column justify-content-center">
          {/* MOBILE VIEW */}
          <div
            className="d-md-none w-100 min-vh-100 d-flex flex-column justify-content-start align-items-center text-center px-4"
            style={{
              background:
                "linear-gradient(135deg, #dbeafe 0%, #f1f5ff 40%, #ffffff 100%)",
              paddingBottom: "40px",
            }}
          >
            {/* Header with Back Button & Title */}
            <div
              className="d-flex align-items-center justify-content-center w-100 position-relative pt-3 pb-2"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
            >
              <button
                className="btn position-absolute start-0 ms-3 textColor border-0"
                style={{ fontSize: "1.2rem" }}
                onClick={() => window.history.back()}
              >
                <FaArrowLeft />
              </button>
              <h2 className="textColor fw-bold m-0">Log In<i class="fa-solid fa-user-lock ms-2"></i></h2>
            </div>

            {/* Subheading */}
            <img src={printxLogo} style={{width:"auto", height:"60px" , marginTop: "30px"}}/>
            <p className="text-muted small mb-3 mt-3">
             Log in securely and continue your journey with PrintX.
            </p>

            {/* Form */}
            <form className="w-100" style={{ maxWidth: "400px" }}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-4 py-2"
                  placeholder="Email"
                  style={{
                    backgroundColor: "transparent",
                    border: "1.5px solid #6719edff",
                    color: "#0d6efd",
                  }}
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control rounded-4 py-2"
                  placeholder="Password"
                  style={{
                    backgroundColor: "transparent",
                    border: "1.5px solid #6719edff",
                    color: "#0d6efd",
                  }}
                />
              </div>

              <div className="text-end mb-3">
                <a
                  href="#"
                  className=" small fw-semibold text-decoration-none textColor"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn w-100 rounded-4 fw-semibold py-2"
                style={{
                  background: " #6719edff",
                  border: "none",
                  color: "white",
                }}
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div
              className="d-flex align-items-center my-3 w-100"
              style={{ maxWidth: "400px" }}
            >
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">Or</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Social Buttons */}
            <div className="d-flex flex-column gap-2 w-100">
            <button className="btn  w-100 rounded-4 fw-semibold py-2" style={{border: "1px solid #6719edff", color: "#6719edff", background: "transparent"}}>
              <i className="fa-brands fa-facebook me-2"></i> Continue with Facebook
            </button>
            <button className="btn btn-outline-dark w-100 rounded-4 fw-semibold py-2">
              <i className="fa-brands fa-google me-2"></i> Continue with Google
            </button>
          </div>

            {/* Signup Link */}
            <p className="text-center mt-4 mb-2 text-muted small">
              Don’t have an account?{" "}
              <a href="#" className="textColor fw-semibold text-decoration-none">
                Sign up
              </a>
            </p>
          </div>

          {/* DESKTOP VIEW  */}
          <div className="d-none d-md-block p-4 p-md-5">
            <h3 className="fw-bold text-center mb-4 textColor">
              Welcome Back 
            </h3>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-4 py-2"
                  placeholder="Email"
                  style={{
                    backgroundColor: "transparent",
                    border: "1.5px solid #6719edff",
                    color: "#0d6efd",
                  }}
                />
              </div>

              <div className="mb-2">
                <input
                  type="password"
                  className="form-control rounded-4 py-2"
                  placeholder="Password"
                  style={{
                    backgroundColor: "transparent",
                    border: "1.5px solid #6719edff",
                    color: "#0d6efd",
                  }}
                />
              </div>

              <div className="text-end mb-3">
                <a
                  href="#"
                  className="textColor small fw-semibold text-decoration-none"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn w-100 rounded-4 fw-semibold py-2"
                style={{
                  background: "#6719edff",
                  border: "none",
                  color: "white",
                }}
              >
                Sign In
              </button>
            </form>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">Or</span>
              <hr className="flex-grow-1" />
            </div>

           <div className="d-flex flex-column gap-2 w-100">
            <button className="btn  w-100 rounded-4 fw-semibold py-2" style={{border: "1px solid #6719edff", color: "#6719edff", background: "transparent"}}>
              <i className="fa-brands fa-facebook me-2"></i> Continue with Facebook
            </button>
            <button className="btn btn-outline-dark w-100 rounded-4 fw-semibold py-2">
              <i className="fa-brands fa-google me-2"></i> Continue with Google
            </button>
          </div>

            <p className="text-center mt-4 mb-0 text-muted small">
              Don’t have an account?{" "}
              <a
                href="#"
                className="textColor fw-semibold text-decoration-none"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
