//this is where users login
import React from "react"
import { Form, Button, Container }from 'react-bootstrap'
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { DEV_API_URL } from "../../config"

const Login = () => {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
  
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    const navigate = useNavigate()
  
    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${DEV_API_URL}/login`, formData)
        console.log(res)
        if (res.data.token) {
          console.log("Success")
          localStorage.setItem("token", res.data.token)
          navigate("/")
        }
      } catch (e) {
        setErrorMessage(e.response.data.message)
      }
    }
    return(
        <>
        <h1>Login</h1>
        {errorMessage && <div className="failure">{errorMessage}</div>}
        <Form onSubmit={onSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="eMail" onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )

    }

export default Login