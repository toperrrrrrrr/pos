import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";
import alert from "./alert";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  let username = "admin"
  let password = "password"

  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

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
              <h4> Username</h4>
              <input type="text" className="username"  onChange={(e) => setUsername(e.target.value)}></input>
              <h4> Password</h4>
              <input type="password" onChange={(e) => setPassword(e.target.value)} ></input>
              <div className="confirmation-buttons"> 
              <Button type="button" className="box btn" onClick={handleLogin}>
                <div className="loginbutton">LOGIN</div>
              </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      {showAlert && (
        <alert
          message="This is an alert message."
          type="success"
          onClose={handleCloseAlert}
        />
      )}
      
    </>
  );
};

export default Login;
