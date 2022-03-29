import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "react-bootstrap/Card";
// import useContext from "react-bootstrap";
// import brands, { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function About() {
    return (
        <>
            {/* <br></br>
            <h3>This is about</h3>
            <div className="columns is-centered">
                <div className="column ">
                    <section className="section is-medium is-primary">
                        <h1 className="title is-primary"><strong>Rachel Tipton</strong></h1>
                        <hr></hr>
                        <h2 className="subtitle is-primary">
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/rachel-labri-tipton" target="_blank" rel="noreferrer">    rodages</a>
                        </h2>
                        <h2 className="subtitle is-primary">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href="https://www.linkedin.com/in/rachel-l-abri-tipton-4b540461/" target="_blank" rel="noreferrer">    Zan M. Linkedin</a>
                        </h2>
                    </section>
                </div>
                <div className="column">
                    <section className="section is-medium is-primary">
                        <h1 className="title is-primary"><strong>Emilie Allen</strong></h1>
                        <hr></hr>
                        <h2 className="subtitle is-primary">
                            <FontAwesomeIcon icon={faGithub} />
                            <a href="https://github.com/emilieallen" target="_blank" rel="noreferrer">    emilieallen</a>
                        </h2>
                        <h2 className="subtitle is-primary">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href="https://www.linkedin.com/in/%C3%A9milie-allen-79759a62/" target="_blank" rel="noreferrer">    Emilie A. Linkedin</a>
                        </h2>
                    </section>
                </div>
            </div> */}
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> 
        </>
    )
}

export default About

