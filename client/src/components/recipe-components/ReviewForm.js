
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function ReviewForm () {
  
        return (
            <Container>
                <Form>
                    <Form.Group controlId="form.Name">
                        <Form.Label>Recipe Review</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Review</Form.Label>
                        <Form.Control placeholder="Did you make this recipe? Sign in to leave a review." as="textarea" rows={3} />
                    </Form.Group>
                  
                </Form>
            </Container>
        );
    }

export default ReviewForm;