
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card, Container, Stack } from 'react-bootstrap';
import './mycss.css'
import neuButton from './neuButton';

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
    <Container className='loginbox'>
      
      <Card className='screen'>
        
        <Card.Body className='screen_content'>
          <Form className='login '>  
            <input type='text' className='username'></input>
            <input type='password'></input> 

            <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};


export default Login;