import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";

const Register = () => {

  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const navigate = useNavigate();



  const handleRegister = () => {
   
  };

  const handleNavigateLogin = () => {
  navigate("/");
  return <redirect to="/Login" />;

  };
  
  return (
    <>
      <div className="login-bg">
        <img src={bg} className="logo"></img>
        <div className="login-box">
          <div className="screen_content">
            <Form className="login ">
              <h4> Username</h4>
              <input type="text" className="username" value={isUsername}  onChange={(e) => setUsername(e.target.value)}></input>
              <h4> Password</h4>
              <input type="password" onChange={(e) => setPassword(e.target.value)} ></input>
              <div className="confirmation-buttons"> 
              <Button type="button" className="box btn" onClick={handleRegister}>
                <div className="loginbutton">Register</div>
              </Button>
              <Button type="button" className="box btn" onClick={handleNavigateLogin}>
                <div className="loginbutton">Login</div>
              </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Register;
