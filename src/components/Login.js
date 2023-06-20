
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card, Container, Stack } from 'react-bootstrap';
import './mycss.css'
import '../img/Logo.svg'

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
      
      <div className='login-box'>
        <svg src='../img/Logo.svg'></svg>
        <div className='screen_content'>
          <Form className='login '>  
            <input type='text' className='username'></input>
            <input type='password'></input> 
            <Button type='button' className='box btn' onClick={handleClick}><div className='loginbutton'>LOGIN</div></Button>
            <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
};


export default Login;