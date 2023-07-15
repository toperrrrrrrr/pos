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
  const [isID, setId] = useState("");
  const navigate = useNavigate();
  const [isResponse, setResponse] = useState([])
  

  useEffect(() => {
    fetchData(); // Fetch data initially
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/api/get");
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      await Axios.post("http://localhost:3001/api/insert", {
        userName: isUsername,
        password: isPassword,
      });
      alert("Successfully inserted");
      fetchData(); // Fetch data again after successful insert
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    // Assuming you have the user's id stored in a variable called 'userId'
    const userId = isID ; // Replace with the actual user id
  
    try {
      const response = await Axios.delete(`http://localhost:3001/api/delete/${userId}`);
      console.log(response.data); // Success message
       fetchData();
      // Handle any further actions after successful delete
    } catch (error) {
      console.error(error); // Error message
      // Handle error cases
    }
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

                return <><p>{val.idUsers}    {val.users_Username} </p>
           
                </>
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
                <input
                type="text"
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
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


                <Button
                  type="button"
                  className="box btn"
                  onClick={handleDelete}
                >
                  <div className="loginbutton">Delete {isID}</div>
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
