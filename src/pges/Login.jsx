import React, { useState } from "react";
import loginLogo from "../images/login.png";
import facebookLogo from "../images/fb.png";
import googleLogo from "../images/google.png";
import printxLogo from "../images/logo3.png";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState ({
        emailError : "",
        roleError : "",
        passwordError: ""   ,
     })
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        let hasError = false;
        setLoading(true);
        e.preventDefault();
          if(role === ""){
            setError((prev)=>({ ...prev , roleError : "Select a role"}))
            setLoading(false)
            hasError = true;
            return;
        }
        else{
            setError((prev)=>({ ...prev , roleError : ""}))
        }
        if(email === ""){
            setError((prev)=>({ ...prev , emailError : "Email cannot be Empty"}))
            setLoading(false)
            hasError = true;
            return;
        }
        else{
           setError((prev)=>({ ...prev , emailError : ""})) 
        }
      
        if(password === ""){
            setError((prev)=>({ ...prev , passwordError : "Password cannot be Empty"}))
            setLoading(false)
            hasError = true
            return;
        }
        else{
            setError((prev)=>({ ...prev , passwordError : ""}))
        }
        const payLoad = {
            email,
            password,
            role:
                role === "User" ? "user" : role === "Shopkeeper" ? "shopkeeper" : "",
        };
        const finalRole = payLoad.role;
        try {
            const response = await axios.post(
                `https://printx-backend-delta.vercel.app/printx/${finalRole}/login`,
                payLoad
            );
            if (response.data.success) {
                setLoading(false);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.userData));
                setEmail("");
                setPassword("");
                setRole("Select Role");
                alert(response.data.message);
            } else {
                setLoading(false);
                alert("Login failed" || response.data.message);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("An error occurred during login. Please try again.");
        }
    };
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
                        className="d-md-none w-100 min-vh-100 d-flex flex-column justify-content-start align-items-center text-center px-4 overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, #e9f0ff 0%, #f6f9ff 50%, #ffffff 100%)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="d-flex align-items-center justify-content-center w-100 position-relative pt-3 pb-2"
                            style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
                        >
                            <button
                                className="btn position-absolute start-0 ms-3 textColor border-0"
                                style={{ fontSize: "1.2rem" }}
                                onClick={() => navigate("/")}
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <h5 className="textColor fw-bold m-0">
                                Log In <i className="fa-solid fa-user-lock ms-2"></i>
                            </h5>
                        </div>

                        {/* Logo */}
                        <img
                            src={printxLogo}
                            alt="PrintX Logo"
                            className="animate__animated animate__fadeInDown"
                            style={{
                                width: "auto",
                                height: "70px",
                                marginTop: "30px",
                            }}
                        />

                        {/* Welcome Text */}
                        <h1 className=" text-dark mt-3 mb-1 animate__animated animate__fadeInLeft">
                            Welcome to Print<span className="text-warning fw-bold ">X</span>
                        </h1>

                        <p className="text-muted small mb-3 px-2">
                            Enter your login credentials to access your account and manage
                            your prints effortlessly.
                        </p>

                        {/* Login Form */}
                        <form
                            className="w-100"
                            style={{ maxWidth: "380px", marginTop: "30px" }}
                            onSubmit={handleLogin}
                        >
                            {/* Role */}
                            <div className="mb-2 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent  rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-user-tag"></i>
                                    </span>
                                    <select
                                        className="form-select rounded-end-4 py-2"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="User">User</option>
                                        <option value="Shopkeeper">Shopkeeper</option>
                                    </select>
                                </div>
                                 {
                                error.roleError && (
                                     <p className="text-danger text-lead ms-2">{error.roleError}</p>
                                )
                               }
                            </div>
                            {/* Email Field */}
                            <div className="mb-2 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control rounded-end-4 py-2"
                                        placeholder="Enter your email"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    />
                                </div>
                               {
                                error.emailError && (
                                     <p className="text-danger text-lead ms-2">{error.emailError}</p>
                                )
                               }
                            </div>

                            {/* Password Field */}
                            <div className="mb-1 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent  rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-lock"></i>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control rounded-end-4 py-2"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    />
                                </div>
                                 {
                                error.passwordError && (
                                     <p className="text-danger text-lead ms-2">{error.passwordError}</p>
                                )
                               }
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3 mt-2 mx-1">
                                {/* Show Password */}
                                <div className="d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        id="showPasswordmob"
                                        className="me-2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    <label
                                        htmlFor="showPasswordmob"
                                        className="textColor small fw-semibold text-decoration-none m-0"
                                    >
                                        Show Password
                                    </label>
                                </div>

                                {/* Forgot Password */}
                                <a
                                    href="/"
                                    className="small fw-semibold text-decoration-none textColor"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 rounded-4 fw-semibold py-2 shadow-sm"
                                style={{
                                    background: "#6719ed",
                                    border: "none",
                                    color: "white",
                                    letterSpacing: "0.5px",
                                }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        Verifying you...
                                        <div
                                            className="spinner-border spinner-border-sm text-light ms-2"
                                            role="status"
                                        ></div>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-right-to-bracket me-2"></i> Sign
                                        In
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div
                            className="d-flex align-items-center my-3 w-100"
                            style={{ maxWidth: "380px" }}
                        >
                            <hr className="flex-grow-1" />
                            <span className="mx-2 text-muted small">Or continue with</span>
                            <hr className="flex-grow-1" />
                        </div>

                        {/* Social Buttons */}
                        <div className="d-flex flex-column gap-2 w-100">

                            {/* Facebook Button */}
                            <button
                                className="btn w-100 rounded-4 fw-semibold py-2 text-muted d-flex align-items-center justify-content-center"
                                style={{
                                    border: "1px solid #6719edff",   // ← kept your original border
                                    background: "transparent",
                                    height: "40px",
                                }}
                            >
                                <img
                                    src={facebookLogo}
                                    alt="Facebook"
                                    style={{ width: "30px", height: "30px", marginRight: "8px" }}
                                />
                                Continue with Facebook
                            </button>

                            {/* Google Button */}
                            <button
                                className="btn w-100 rounded-4 fw-semibold py-2 text-muted d-flex align-items-center justify-content-center"
                                style={{
                                    border: "1px solid #6719edff",   // ← kept your original border
                                    background: "transparent",
                                    height: "40px",
                                }}
                            >
                                <img
                                    src={googleLogo}
                                    alt="Google"
                                    style={{ width: "20px", height: "20px", marginRight: "8px" }}
                                />
                                Continue with Google
                            </button>

                        </div>

                        {/* Signup Link */}
                        <p className="text-center mt-4 mb-2 text-muted small">
                            Don’t have an account?{" "}
                            <a
                                href="/"
                                className="textColor fw-semibold text-decoration-none"
                                style={{ color: "#6719ed" }}
                            >
                                Create one now
                            </a>
                        </p>
                    </div>

                    {/* DESKTOP VIEW  */}
                    <div className="d-none d-md-block p-4 p-md-5">
                        <h3 className="fw-bold text-center mb-4 textColor">Welcome Back</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-2 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent  rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-user-tag"></i>
                                    </span>
                                    <select
                                        className="form-select rounded-end-4 py-2"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <option value="">{role}</option>
                                        <option value="User" onClick={() => setRole("User")}>
                                            User
                                        </option>
                                        <option value="Shopkeeper" onClick={() => setRole("Shopkeeper")}>
                                            Shopkeeper
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="mb-2 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control rounded-end-4 py-2"
                                        placeholder="Enter your email"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="mb-1 text-start">
                                <div className="input-group">
                                    <span
                                        className="input-group-text bg-transparent  rounded-start-4"
                                        style={{
                                            border: "1.5px solid #6719ed",
                                            borderRight: "none",
                                            color: "#6719ed",
                                        }}
                                    >
                                        <i className="fa-solid fa-lock"></i>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control rounded-end-4 py-2"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "1.5px solid #6719ed",
                                            borderLeft: "none",
                                            color: "#6719ed",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3 mt-2 mx-1">
                                {/* Show Password */}
                                <div className="d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        id="showPasswordweb"
                                        className="me-2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    <label
                                        htmlFor="showPasswordweb"
                                        className="textColor small fw-semibold text-decoration-none m-0"
                                    >
                                        Show Password
                                    </label>
                                </div>

                                {/* Forgot Password */}
                                <a
                                    href="/"
                                    className="small fw-semibold text-decoration-none textColor"
                                    style={{ whiteSpace: "nowrap" }}
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
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        Verifying you...
                                        <div
                                            className="spinner-border spinner-border-sm text-light ms-2"
                                            role="status"
                                        ></div>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-right-to-bracket me-2"></i> Sign
                                        In
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="d-flex align-items-center my-3">
                            <hr className="flex-grow-1" />
                            <span className="mx-2 text-muted small">Or</span>
                            <hr className="flex-grow-1" />
                        </div>

                        <div className="d-flex flex-column gap-2 w-100">

                            {/* Facebook Button */}
                            <button
                                className="btn w-100 rounded-4 fw-semibold py-2 text-muted d-flex align-items-center justify-content-center"
                                style={{
                                    border: "1px solid #6719edff",   // ← kept your original border
                                    background: "transparent",
                                     height: "40px",
                                }}
                            >
                                <img
                                    src={facebookLogo}
                                    alt="Facebook"
                                    style={{ width: "35px", height: "35px", marginRight: "8px" }}
                                />
                                Continue with Facebook
                            </button>

                            {/* Google Button */}
                            <button
                                className="btn w-100 rounded-4 fw-semibold py-2 text-muted d-flex align-items-center justify-content-center"
                                style={{
                                    border: "1px solid #6719edff",   // ← kept your original border
                                    background: "transparent",
                                     height: "40px",
                                }}
                            >
                                <img
                                    src={googleLogo}
                                    alt="Google"
                                    style={{ width: "20px", height: "20px", marginRight: "8px" }}
                                />
                                Continue with Google
                            </button>

                        </div>

                        <p className="text-center mt-4 mb-0 text-muted small">
                            Don’t have an account?{" "}
                            <a
                                href="/"
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
