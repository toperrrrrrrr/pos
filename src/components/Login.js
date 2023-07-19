import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Alerts from "./Alerts/Alerts";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isEye, setEye] = useState("password");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  let username = "admin";
  let password = "password";

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmAction = () => {
    handleClosePopup();
  };

  const eye = () => {
    if (isEye === "password") {
      setEye("text");
    } else setEye("password");
  };

  const register = () => {
    navigate("/Register");
    return <redirect to="/Register" />;
  };

  const handleLogin = () => {
    if (username === isUsername && password === isPassword) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      handleOpenPopup();
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        setLoggedIn(true);
        event.preventDefault();
        handleLogin();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <div className="screen-bg">
        <div className="login-box">
          <form className="login-form">
            <h1 className="center-text">Sign In</h1>
            <h6> Username</h6>
            <div className="input-box">
            <input
              type="text"
              className="form-input"
              value={isUsername}
              placeholder="Administrator"
              onChange={(e) => setUsername(e.target.value)}
            ></input></div>
            <h6> Password</h6>
            <div className="input-box"> 
            <input
              type={isEye}
              className="form-input"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            ></input></div>
            <div className="login-button-container">
              <button type="button" className="form-btn" onClick={handleLogin}>
              LOGIN
              </button>
              <button type="button" className="form-btn" onClick={eye}>
              Eye
              </button>
              <button type="button" className="form-btn" onClick={register}>
               register
              </button>
            </div>
          </form>
        </div>
        <Alerts
          isOpen={showPopup}
          title="Wrong Credentials"
          message="Please Double check"
          onClose={handleClosePopup}
          isHidden="true"
          onConfirm={handleConfirmAction}
        />
      </div>
    </>
  );
};

export default Login;
