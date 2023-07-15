import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";
import Axios from "axios";

const Register = () => {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/api/insert", {
      userName: isUsername,
      password: isPassword,
    }).then(() => {
      alert("Successfull insert");
    });
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
              <h4> Username </h4>
              <input
                type="text"
                className="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <h4> Password </h4>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="confirmation-buttons">
                <Button
                  type="button"
                  className="box btn"
                  onClick={handleSubmit}
                >
                  <div className="loginbutton">Submit</div>
                </Button>
                <Button
                  type="button"
                  className="box btn"
                  onClick={handleNavigateLogin}
                >
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
