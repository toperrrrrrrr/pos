import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";

const Login = () => {
  const [isAlertHidden, setAlertHidden] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLogout, setLogout] = useState(false);

  const exit = () => {
    setLogout(true);
    navigate("/");
    if (isLogout) {
      return <redirect to="/" />;
    }
  };

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const navigate = useNavigate();
  let username = "admin"
  let password = "password"
  let sstatus = ""

  const handleLogin = () => {

   if (username === isUsername && password === isPassword){
    setLoggedIn(true);
    navigate("/dashboard"); // Redirect to the dashboard page
    if (isLoggedIn) {
      return <redirect to="/Dashboard" />;
    }
  }
  else{

   toggleConfirmation()
  }

  };

  return (
    <>
      <div className="login-bg">
        <img src={bg} className="logo"></img>
        <div className="login-box">
          <div className="screen_content">
            <Form className="login ">
              <h4> {sstatus}</h4>
              <h4> Username</h4>
              <input type="text" className="username"  onChange={(e) => setUsername(e.target.value)}></input>
              <h4> Password</h4>
              <input type="password"  onChange={(e) => setPassword(e.target.value)} ></input>
              <div className="confirmation-buttons"> 
              <Button type="button" className="box btn" onClick={handleLogin}>
                <div className="loginbutton">LOGIN</div>
              </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div>
          {showConfirmation && (
            <div className="confirmation-overlay" onClick={toggleConfirmation}>
              <div className="confirmation-box">
                <h2>incorrect Credentials</h2>  
               
                <div className="confirmation-buttons">
                  <button onClick={toggleConfirmation} className="box btn">Exit</button>
                </div>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Login;
