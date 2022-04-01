import { useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import { Accordion, Card, ListGroup, Container } from "react-bootstrap"
import ReviewForm from "./ReviewForm"

function RecipePage() {
    const { id } = useParams()
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
                <Accordion alwaysOpen variant="flush" defaultActiveKey="0" className="text-center">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup as="ol" variant="flush" >
                                {
                                    recipeData.recipeIngredients.map(ingredient => {
                                        return (
                                            <>
                                            <ListGroup.Item as="li" style={{border: "None"}} key={ingredient}>{ingredient}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion alwaysOpen variant="flush" defaultActiveKey="1" style={{ "margin": "5% 0% 0% 0%"}}>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                        <ListGroup as="ol">
                                {
                                    recipeData.recipeInstructions.map(instruction => {
                                        return (
                                            <>
                                            <ListGroup.Item as="li" style={{border: "None"}} key={instruction[0]}>{instruction}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
                <Accordion alwaysOpen variant="flush" style={{ "margin": "5% 0% 0% 0%"}}>                    
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Reviews</Accordion.Header>
                            <Accordion.Body>
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
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Leave a Review</Accordion.Header>
                            <Accordion.Body>
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


