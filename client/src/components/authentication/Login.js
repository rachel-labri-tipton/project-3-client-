//this is where users login
import React from "react"
import { Form, Button, Tabs, Tab, Alert }from 'react-bootstrap'
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { DEV_API_URL } from "../../config"

const Login = () => {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [errorMessageRegister, setErrorMessageRegister] = useState(null)
    const [loginMessage, setLoginMessage] = useState(null)
  
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    const navigate = useNavigate()
  
    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${DEV_API_URL}/login`, formData)
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
          navigate("/")
        }
      } catch (e) {
        setErrorMessage(e.response.data.message)
      }
    }

    const onSubmitRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${API_URL}/register`, formData)
            console.log(res.data)

          if (res.status === 201) {
            setLoginMessage(true)
          }
        } catch (e) {
          setErrorMessageRegister(e.response.data.message)
        }
      }

    return(
        <>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3" style={{"margin": "5% 25% 5% 25%"}}>
            <Tab eventKey="login" title="Log In">
                {errorMessage && <Alert variant="danger" style={{"margin": "5% 30% 10% 30%"}}>{errorMessage}</Alert>}
                <Form onSubmit={onSubmit} style={{"margin": "5% 30% 10% 30%"}} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="eMail" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Tab>
            <Tab eventKey="register" title="Register">
                {errorMessageRegister && <Alert variant="danger" style={{"margin": "5% 30% 10% 30%"}}>{errorMessageRegister}</Alert>}
                {loginMessage && <Alert variant="success" style={{"margin": "5% 30% 10% 30%"}}>"Successfully registered !! Please log in .."</Alert>}
                <Form onSubmit={onSubmitRegister} style={{"margin": "5% 30% 10% 30%"}} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" name="userName" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="eMail" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Tab>
        </Tabs>
        </>
    )

    }

export default Login