import { useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import { Accordion, Card, ListGroup, Container } from "react-bootstrap"
import ReviewForm from "./ReviewForm"

function RecipePage() {

    const { id } = useParams()

    const status = localStorage.getItem("token") ? false : true;

    const [recipeData, setRecipeData] = useState(undefined)

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${DEV_API_URL}/recipes/${id}`)
            setRecipeData(res.data)
        }
        getData()
    }, [])

    if (!recipeData) {
        return <p>Recipe Loading...</p>
    }

    return (
        <>
        {/* <Card className="text-center" style={{background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 80%)", "margin": "5% 18% 5% 18%"}}></Card> */}
        <Card className="text-center" style={{background: "linear-gradient(to top, #dfe9f3 0%, white 100%)", "margin": "5% 18% 5% 18%"}}>
            <Card.Body>
                <h1 style={{color:"dimgrey", marginTop:"5px"}}>{recipeData.recipeName}</h1>
                <Card.Img src={recipeData.image} style={{width:"50%", height:"25vw", "objectFit": "contain", margin:"50px 0"}}/>
                <Accordion alwaysOpen variant="flush" defaultActiveKey="0" className="text-center" key={"a1"}>
                    <Accordion.Item eventKey="0" key={"aI1"}>
                        <Accordion.Header key={"aH1"}>Ingredients</Accordion.Header>
                        <Accordion.Body key={"aB1"}>
                            <ListGroup as="ol" variant="flush" key="l0">
                                {

                                    recipeData.recipeIngredients.map(ingredient => {
                                    
                                        return (
                                            <>
                                            <ListGroup.Item as="li" style={{border: "None"}} key={new Date().getTime()}>{ingredient}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion alwaysOpen variant="flush" defaultActiveKey="1" style={{ "margin": "5% 0% 0% 0%"}} key={"a2"}>
                    <Accordion.Item eventKey="1" key={"aI2"}>
                        <Accordion.Header key={"aH2"}>Instructions</Accordion.Header>
                        <Accordion.Body key={"aB2"}>
                        <ListGroup as="ol" key="l1">
                                {
                                    recipeData.recipeInstructions.map(instruction => {
                                        return (
                                            <>
                                            <ListGroup.Item as="li" style={{border: "None"}} key={new Date().getTime()}>{instruction}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
                <Accordion alwaysOpen className="accordion accordion-flush" style={{ "margin": "5% 0% 0% 0%"}} key={"a3"}>                    
                        <Accordion.Item eventKey="2" key={"aI3"}>
                            <Accordion.Header key={"aH3"}>Reviews</Accordion.Header>
                            <Accordion.Body key={"aB3"}>
                                <Container>
                                    <p>There should be reviews here. </p>
                                    {
                                        recipeData.review.map(review => {
                                            if (review===false) {
                                                return ( 
                                                    <p>There aren't any reviews for this recipe yet.</p>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <p>{review.text}</p>
                                                        <p>{review.createdBy}</p>
                                                    </>
                                                )
                                            }
                                            
                                        })
                                    }
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" key={"aI4"} hidden={status}>
                            <Accordion.Header key={"aH4"}>Leave a Review</Accordion.Header>
                            <Accordion.Body  key={"aB4"}>
                                <ReviewForm />
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    </>
    )
}

export default RecipePage 


