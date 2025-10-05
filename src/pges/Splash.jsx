import React, { useState } from "react";
import splash from "../images/splash.png";

function Splash() {
  const [registerModal, setRegisterModal] = useState(false);
  const [modalText, setModalText] = useState("");
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center ">
        <div className="text-center  mb-md-0">
          <img
            src={splash}
            alt="ssplash"
            className="img-fluid "
            style={{ maxHeight: "230px" }}
          />
          <h1 className="fw-bold"  style={{color : "#6719edff"}}>
            Beyond Printing, Towards Ease
          </h1>
          <p className="text-muted">
            Turning every print into a smooth, stress-free experience.
          </p>
          <button
            className="btn text-light  w-100"
            style={{ background: "#6719edff" , height: "43px", marginTop: "40px"}}
              onClick={() => {setRegisterModal(true);
            setModalText("Login")
            }}
          >
            Login<i class="fa-solid fa-right-to-bracket ms-2"></i>
          </button>
          <button
            className="btn   w-100 mt-2"
            style={{ border: "1px solid #6719edff", color : "#6719edff", height: "43px" }}
            onClick={() => {setRegisterModal(true);
            setModalText("Register")
            }}
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
            <div className="modal-content">
              <div className="modal-header text-light" style={{height: "45px", background: "#6719edff"}}>
                <h5 className="modal-title">{modalText} as</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setRegisterModal(false)} // close handler
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn  w-100 mb-2" style={{border: "1px solid #6719edff"}}><i className="fa-solid fa-shop  me-2" style={{ color : "#6719edff"}}></i> Shopkeeper</button>
                <button className="btn w-100" style={{border: "1px solid #6719edff"}}><i className="fa-solid fa-user  me-2" style={{ color : "#6719edff"}}></i> User</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Splash;
