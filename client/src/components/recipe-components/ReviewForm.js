
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { DEV_API_URL } from "../../config"

function ReviewForm () {

    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const { id } = useParams()

    console.log(localStorage.token)
    console.log(id)
  
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const config = {headers: { Authorization: `Bearer ${localStorage.token}` }};
            const res = await axios.post(`${DEV_API_URL}/recipes/${id}/review`, formData, config)
          if (res.status === 200) {
              setSuccessMessage(true)
              if (errorMessage) {
                  setErrorMessage(null)
              }
          }
        } catch (e) {
          setErrorMessage(e.response.data.message)
        }
      }
  
        return (
            <Container>
                {errorMessage && <Alert variant="danger" style={{"margin": "5% 30% 10% 30%"}}>{errorMessage}</Alert>}
                {successMessage && <Alert variant="success" style={{"margin": "5% 30% 10% 30%"}}>"Review successfully submitted!!"</Alert>}
                <Form onSubmit={onSubmit} >
                    <Form.Group controlId="form.Textarea" key={3} hidden={successMessage ? true : false} >
                        <Form.Control key={3.2} name="text" placeholder="Please tell us what you think.." as="textarea" rows={3} onChange={onChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{margin:"10px 0 0 0"}} hidden={successMessage ? true : false}>
                        Submit
                    </Button>
                </Form>

            </Container>
        );
    }

export default ReviewForm;