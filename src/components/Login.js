import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";

const Login = () => {
  const [isAlertHidden, setAlertHidden] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/dashboard"); // Redirect to the dashboard page
    if (isLoggedIn) {
      // Redirect to another page if logged in
      return <redirect to="/Dashboard" />;
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
              <input type="text" className="username"></input>
              <h4> Password</h4>
              <input type="password"></input>
              <div className="confirmation-buttons"> 
              <Button type="button" className="box btn" onClick={handleLogin}>
                <div className="loginbutton">LOGIN</div>
              </Button>
              </div>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
