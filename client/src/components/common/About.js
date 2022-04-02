import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "react-bootstrap/Card";
import { Row,Col} from "react-bootstrap";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function About() {
    return (
        <>
        <Row xs={1} md={2} style={{ "margin": "5% 25% 5% 25%"}}>
            <Col style={{ "margin": "0 auto"}}>
                <Card style={{ width: '100%', margin: '15px 0px'}}>
                    <Card.Body>
                        <Card.Title>Rachel Tipton</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Full Stack Software Engineer</Card.Subtitle>
                        <Card.Link href="https://www.linkedin.com/in/rachel-l-abri-tipton-4b540461/" style={{paddingLeft: 13, textDecoration: 'none'}}><FontAwesomeIcon icon={faLinkedin} /> R.T linkedin</Card.Link>
                        <Card.Link href="https://github.com/rachel-labri-tipton" style={{paddingLeft: 13, textDecoration: 'none'}}><FontAwesomeIcon icon={faGithub} /> rachel-labri-tipton</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%', margin: '15px 0px'}}>
                    <Card.Body>
                        <Card.Title>Emilie Allen</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Data Scientist</Card.Subtitle>
                        <Card.Link href="https://www.linkedin.com/in/%C3%A9milie-allen-79759a62/" style={{paddingLeft: 13, textDecoration: 'none'}}><FontAwesomeIcon icon={faLinkedin} /> E.A linkedin</Card.Link>
                        <Card.Link href="https://github.com/rachel-labri-tipton" style={{paddingLeft: 13, textDecoration: 'none'}}><FontAwesomeIcon icon={faGithub} /> emilieallen</Card.Link>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>      
        </>
    )
}

export default About

