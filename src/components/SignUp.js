import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function SignUp() {
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'></h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='Email' required></Form.Control>
                </Form.Group>
                
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required></Form.Control>
                </Form.Group>
                
                <Form.Group id="confPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' required></Form.Control>
                </Form.Group>
            </Form>
            <Button type="submit" className='w-100'>Sign Up</Button>
        </Card.Body>


      </Card>
      <div className='w-100 text-center mt-2'> Already have an account? Login</div>
    </>
  )
}
