import { useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import { Accordion, Card, ListGroup } from "react-bootstrap"

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
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{recipeData.recipeName}</Card.Title>
                <Card.Img src={recipeData.image} width="300" height="500"/>
                <Accordion alwaysOpen flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Ingredients</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup as="ol">
                                {
                                    recipeData.recipeIngredients.map(ingredient => {
                                        return (
                                            <>
                                            <ListGroup.Item as="li" key={ingredient}>{ingredient}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Instructions</Accordion.Header>
                        <Accordion.Body>
                        <ListGroup as="ol">
                                {
                                    recipeData.recipeInstructions.map(instruction => {
                                        return (
                                            <>
                                            <ListGroup.Item as="li" key={instruction[0]}>{instruction}</ListGroup.Item>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    </>
    )
}

export default RecipePage 


