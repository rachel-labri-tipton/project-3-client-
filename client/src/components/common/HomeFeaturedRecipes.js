import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Card, CardGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function HomeFeaturedRecipes() {
    const [featuredRecipes, setFeaturedRecipes] = useState(undefined)
    const [recipeData, setRecipeData] = useState(undefined)

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`${API_URL}/recipes`)
            setRecipeData(res.data)
            const newArray = []
            for (var i = 0; i < 6; i++) {
                var idx = Math.floor(Math.random() * res.data.length);
                newArray.push(res.data[idx]);
            }
            console.log(newArray)
            console.log(recipeData)
            setFeaturedRecipes(newArray)
         
        }
        getData()
    }, [])
    
 
    if (!featuredRecipes) {
        return <p>Recipes Loading...</p>
    }

    return (
        <>
            {featuredRecipes.map(recipe => (
                <CardGroup> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="p-5" width="150" height="250" variant="top" src={recipe.image} />
                        <Card.Body>
                            <Card.Title>{recipe.recipeName}</Card.Title>
                            <Card.Text>{recipe.description} </Card.Text>
                            <Link to={`/all-recipes/${recipe._id}`}><Button variant="outline-dark">Make it.</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
                ))
            }
    </>)

}

export default HomeFeaturedRecipes
