
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card, Container, Stack } from 'react-bootstrap';


const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState('primary');
  const [isAlertHidden, setAlertHidden] = useState(true);
  
  const handleClick = () => {
    setButtonDisabled('dark');
    setAlertHidden(false);
  };


  return (
    <>
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
          <Stack gap={3} className="col-md-5 mx-auto">
            <input type='text' ></input>
            <input type='password'></input> 
            <Button type='button' variant={isButtonDisabled} onClick={handleClick} size='lg' >login</Button>
            <Alert variant='success' hidden={isAlertHidden}> Login Success </Alert>
            </Stack>  
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};
