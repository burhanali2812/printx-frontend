import React, { useState } from "react";
import splash from "../images/splash.png";
import { useNavigate } from "react-router-dom";
import 'animate.css';


function Splash() {
  const [registerModal, setRegisterModal] = useState(false);
  const navigate = useNavigate();

 
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center "
        style={{
    background: "linear-gradient(135deg, #e9f0ff 0%, #f6f9ff 50%, #ffffff 100%)",
  }}
      >
        <div className="text-center  mb-md-0">
          <img
            src={splash}
          
            alt="ssplash"
            className="img-fluid animate__animated animate__fadeInDown"
            style={{ maxHeight: "230px" }}
          />
          <h1 className="fw-bold"  style={{color : "#6719edff"}}>
            Beyond Printing, Towards Ease
          </h1>
          <p className="text-muted">
            Turning every print into a smooth, stress-free experience.
          </p>
          <button
            className="btn text-light rounded-4  w-100"
            style={{ background: "#6719edff" , height: "43px", marginTop: "40px"}}
              onClick={() => navigate("/login")}
          >
            Login<i class="fa-solid fa-right-to-bracket ms-2"></i>
          </button>
          <button
            className="btn  rounded-4 w-100 mt-2"
            style={{ border: "1px solid #6719edff", color : "#6719edff", height: "43px" }}
            onClick={() => setRegisterModal(true)}
          >
            Get Started<i class="fa-solid fa-user-plus ms-2"></i>
          </button>
               <div className="splash-footer small" style={{ marginTop: "50px", color: "#6719edff"}}>
          <i className="fa-regular fa-circle-check me-1"></i> Free Service | Safe & Secure
        </div>
        </div>
      </div>
   {registerModal && (
  <div
    className="modal fade show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        {/* Header */}
        <div
          className="modal-header text-light"
          style={{ height: "45px", background: "#6719ed" }}
        >
          <h5 className="modal-title">
            Choose Your Role 
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setRegisterModal(false)}
            aria-label="Close"
          ></button>
        </div>

        {/* Body */}
        <div className="modal-body px-4 py-3 text-start">
          <p className="text-muted small mb-3">
            Select the option that best matches your goals:
          </p>

          {/* Shopkeeper Option */}
          <button
            className="btn w-100 mb-3 text-start p-3 rounded-4 shadow-sm"
            style={{
              border: "1.5px solid #6719ed",
              background: "transparent",
            }}
           
          >
            <div className="d-flex align-items-center mb-2">
              <i
                className="fa-solid fa-shop me-2"
                style={{ color: "#6719ed", fontSize: "1.3rem" }}
              ></i>
              <span className="fw-bold textColor">Shopkeeper</span>
            </div>
            <ul className="text-muted small ps-4 mb-0">
              <li>
                <span className="fw-semibold text-dark">
                  Earn quickly
                </span>{" "}
                by printing users’ files.
              </li>
              <li>
                <span className="fw-semibold text-dark">
                  Manage your orders
                </span>{" "}
                efficiently in one dashboard.
              </li>
              <li>
                <span className="fw-semibold text-dark">
                  Boost your income
                </span>{" "}
                with fast service and high demand.
              </li>
            </ul>
          </button>

          {/* User Option */}
          <button
            className="btn w-100 text-start p-3 rounded-4 shadow-sm"
            style={{
              border: "1.5px solid #6719ed",
              background: "transparent",
            }}
            
          >
            <div className="d-flex align-items-center mb-2">
              <i
                className="fa-solid fa-user me-2"
                style={{ color: "#6719ed", fontSize: "1.3rem" }}
              ></i>
              <span className="fw-bold textColor">User</span>
            </div>
            <ul className="text-muted small ps-4 mb-0">
              <li>
                <span className="fw-semibold text-dark">
                  Enjoy a timeless experience
                </span>{" "}
                with quick and easy printing.
              </li>
              <li>
                <span className="fw-semibold text-dark">
                  Upload your files
                </span>{" "}
                and collect prints effortlessly.
              </li>
              <li>
                <span className="fw-semibold text-dark">
                  Save time
                </span>{" "}
                with instant order tracking and updates.
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default Splash;
