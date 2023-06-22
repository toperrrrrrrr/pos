
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert } from 'react-bootstrap';
import './mycss.css'
import bg from '../img/bg.svg'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState('primary');
  const [isAlertHidden, setAlertHidden] = useState(true);
  const username = "root";
  const password = "password";
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // For simplicity, let's assume the login is successful
    setLoggedIn(true);
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  if (isLoggedIn) {
    // Redirect to another page if logged in
    return <redirect to="/Dashboard" />;
  }


  const handleClick = () => {
    setButtonDisabled('dark');
    setAlertHidden(false);
  };

  return (
    <>
    <div className='login-bg'>
      
    <img src={bg} className='logo'></img>
      <div className='login-box'>
        
      <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
        <div className='screen_content'>
          <Form className='login '>  
          <h4> Username</h4>
            <input type='text' className='username'></input>
            <h4> Password</h4>
            <input type='password'></input> 
            
            <Button type='button' className='box btn' onClick={handleLogin}><div className='loginbutton'>LOGIN</div></Button>
          </Form>
        </div>
      </div>
      
    </div>
    
    </>
  );
};


export default Login;