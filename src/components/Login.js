import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import bg from "../img/bg.svg";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [textNotif, setTextNotif] = useState("Original message");
  const navigate = useNavigate();
  let username = "admin"
  let password = "password"


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
  else if(isUsername === ""){
    setTextNotif("E")
    toggleConfirmation()
  }
  else{
    setTextNotif("default") 
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
              <input type="text" className="username" value={isUsername}  onChange={(e) => setUsername(e.target.value)}></input>
              <h4> Password</h4>
              <input type="password" onChange={(e) => setPassword(e.target.value)} ></input>
              <div className="confirmation-buttons"> 
              <Button type="button" className="box btn" onClick={handleLogin}>
                <div className="loginbutton">LOGIN</div>
              </Button>
              </div>

<ul>
<li> Edit the Alerts for this page. Make it unniform with other page</li>
<li> add a check box for keep me signed in</li>
<li>Add the eye button that will toggle the password on making it text and password type</li>
<li>Make a onKeypress function that will trigger the handlelogin function</li>\
<li>
Connect the system to back end.
</li>


<li>
make sure that every actions are being logged into the back end
</li>
<li>

</li>

</ul>
            </Form>
          </div>
        </div>
      </div>


      <div>
          {showConfirmation && (
            <div className="confirmation-overlay" onClick={toggleConfirmation}>
              <div className="confirmation-box">
                <h2>{textNotif}</h2>
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
