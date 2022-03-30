import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import useContext from "react-bootstrap";
// import brands, { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function About() {
    return (
        <>
            <CardGroup style={{ height: '10rem' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Rachel Tipton</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Full Stack Software Engineer</Card.Subtitle>
                        <Card.Link href="https://www.linkedin.com/in/rachel-l-abri-tipton-4b540461/" style={{ paddingLeft: 13, textDecoration: 'none' }}><FontAwesomeIcon icon={faLinkedin} /> R.T linkedin</Card.Link>
                        <Card.Link href="https://github.com/rachel-labri-tipton" style={{ paddingLeft: 13, textDecoration: 'none' }}><FontAwesomeIcon icon={faGithub} /> rachel-labri-tipton</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Emilie Allen</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Data Scientist</Card.Subtitle>
                        <Card.Link href="https://www.linkedin.com/in/%C3%A9milie-allen-79759a62/" style={{ paddingLeft: 13, textDecoration: 'none' }}><FontAwesomeIcon icon={faLinkedin} /> E.A linkedin</Card.Link>
                        <Card.Link href="https://github.com/rachel-labri-tipton" style={{ paddingLeft: 13, textDecoration: 'none' }}><FontAwesomeIcon icon={faGithub} /> emilieallen</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>

        </>
    )
}

export default About