import React, { useState } from "react";
import splash from "../images/splash.png";

function Splash() {
  const [registerModal, setRegisterModal] = useState(false);
  const [modalText, setModalText] = useState("");
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center  mb-md-0">
          <img
            src={splash}
            alt="ssplash"
            className="img-fluid "
            style={{ maxHeight: "230px" }}
          />
          <h1 className="fw-bold text-warning">
            Beyond Printing, Towards Ease
          </h1>
          <p className="text-muted">
            Turning every print into a smooth, stress-free experience.
          </p>
          <button
            className="btn text-light  w-100 mt-2"
            style={{ background: "#1106d7ff" }}
              onClick={() => {setRegisterModal(true);
            setModalText("Register")
            }}
          >
            Login<i class="fa-solid fa-right-to-bracket ms-2"></i>
          </button>
          <button
            className="btn btn-warning  w-100 mt-2"
            onClick={() => {setRegisterModal(true);
            setModalText("Register")
            }}
          >
            Get Started<i class="fa-solid fa-user-plus ms-2"></i>
          </button>
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
              <div className="modal-header bg-dark text-light" style={{height: "45px"}}>
                <h5 className="modal-title">{modalText} as</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setRegisterModal(false)} // close handler
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary w-100 mb-2"> Shopkeeper</button>
                <button className="btn btn-primary w-100"> User</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Splash;
