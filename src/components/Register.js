import React, { useEffect, useState } from "react";
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
  const [isResponse, setResponse] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      console.log(response.data)
    setResponse (response.data)
    })
  },[])

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

              {isResponse.map((val)=>{

                return <p>Nanme {val.users_Username}</p>
              })}
              <h4> Register </h4>
              <input
                type="text"
                placeholder="Username"
                className="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
         
              <input
                type="password"
                placeholder="Password"
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
