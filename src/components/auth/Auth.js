import React, { useState} from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useHistory} from "react-router-dom";
import { PersonCircle } from 'react-bootstrap-icons';

const Auth = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')

    if(!email || !password){
      setError('Please Fill Your Information')
      return
    }

    else if(password.length < 7){
      setError('Password Must Contain Minimum 8 Characters')
      return
    }

    else{
      return history.push("/products")
    }
  };


  return (
    <Container className="w-50 mt-5" style={{ border: "2px solid #007bff", backgroundColor: "white", borderRadius: "10px", boxShadow:"5px 2px 3px 0"}}>
      <h3 className="text-center mt-3 text-primary"><PersonCircle size={40}/></h3>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:"#f0f7ff"}} value={email} onChange={(e) => setEmail(e.target.value)} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" style={{backgroundColor:"#f0f7ff"}} value={password} onChange={(e) => setPassword(e.target.value)} />
          </FloatingLabel>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">Sign In</Button>
        <p className="text-center text-danger mt-3">{error}</p>
      </Form>
    </Container>
  )
}

export default Auth