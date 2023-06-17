
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card, Container, Stack } from 'react-bootstrap';
import './mycss.css'

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
          <Form className='login'>  
      
            <input type='text' ></input>
            <input type='password'></input> 
            <Button type='button' className='box btm' variant={isButtonDisabled} onClick={handleClick} >login</Button>
            <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
          </Form>
        </Card.Body>
      </Card>
      <div class="line_bar"></div>
        <p>&#160;&#160;Neumorphism in Action&#160;&#160;</p>
  
    </Container>
    
    </>
  );
};


export default Login;