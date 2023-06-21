
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert } from 'react-bootstrap';
import './mycss.css'
import Logo from '../img/Logo.svg'
import bg from '../img/bg.svg'

const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState('primary');
  const [isAlertHidden, setAlertHidden] = useState(true);
  const username = "root";
  const password = "password";


  const handleClick = () => {
    setButtonDisabled('dark');
    setAlertHidden(false);
  };


  return (
    <>
    <div className='login-bg'>
      
    <img src={bg} className='logo'></img>|
      <div className='login-box'>
        
      <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
        <div className='screen_content'>
          <Form className='login '>  
          <h4> Username</h4>
            <input type='text' className='username'></input>
            <h4> Password</h4>
            <input type='password'></input> 
            <Button type='button' className='box btn' onClick={handleClick}><div className='loginbutton'>LOGIN</div></Button>
          </Form>
        </div>
      </div>
      
    </div>
    
    </>
  );
};


export default Login;