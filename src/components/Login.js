import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";
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
        <img src={bg} className="logo" alt="Logo"></img>
        <div className="login-box">
          <Form className="login-form">
            <h4> Username</h4>
            <input
              type="text"
              className="form-input"
              value={isUsername}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <h4> Password</h4>
            <input
              type={isEye}
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="login-button-container">
              <Button type="button" className="form-btn" onClick={handleLogin}>
                <div className="loginbutton">LOGIN</div>
              </Button>
              <Button type="button" className="form-btn" onClick={eye}>
                <div className="loginbutton">eye</div>
              </Button>
              <Button type="button" className="form-btn" onClick={register}>
                <div className="loginbutton">Register</div>
              </Button>
            </div>
          </Form>
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
