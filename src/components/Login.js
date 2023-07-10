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

  const eye =() =>{
    if (isEye==="password"){
    setEye("text")
  }
  else
  setEye("password")
  }


  const handleLogin = () => {
    if (username === isUsername && password === isPassword) {
      setLoggedIn(true);
      navigate("/dashboard");
      if (isLoggedIn) {
        return <redirect to="/Dashboard" />;
      }
    } else if (isUsername === "") {
      handleOpenPopup();
    } else {
      handleOpenPopup();
    }
  };

  useEffect(() => {
    const listener = event => {
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
      <div className="login-bg">
        <img src={bg} className="logo" alt="Logo"></img>
        <div className="login-box">
          <div className="screen_content">
            <Form className="login ">
              <h4> Username</h4>
              <input
                type="text"
                className="username"
                value={isUsername}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <h4> Password</h4>
              <input
                type={isEye}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="confirmation-buttons">
                <Button type="button" className="box btn" onClick={handleLogin}>
                  <div className="loginbutton">LOGIN</div>
                </Button>
                <Button type="button" className="box btn" onClick={eye}>
                  <div className="loginbutton">eye</div>
                </Button>
              </div>
              <ul>
                <li>
                  Edit the Alerts for this page. Make it unniform with other
                  page
                </li>
                <li> add a check box for keep me signed in</li>
                <li>
                  Move the Eye button to next the password field  
                </li>
                <li>
                  Make a onKeypress function that will trigger the handlelogin
                  function
                </li>
                <li>Connect the system to back end.</li>
                <li>
                  make sure that every actions are being logged into the back
                  end
                </li>
              </ul>
            </Form>
          </div>
          <Alerts
            isOpen={showPopup}
            title="Wrong Credentials"
            message="Please Double check"
            onClose={handleClosePopup}
            isHidden= "true"
            onConfirm={handleConfirmAction}
          />
        </div>
      </div>

    </>
  );
};

export default Login;
