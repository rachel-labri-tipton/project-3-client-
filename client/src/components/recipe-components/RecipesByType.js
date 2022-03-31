
import { useParams, Link } from "react-router-dom"
import { Container, CardGroup, CardImg } from "react-bootstrap"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"

function RecipesByType() {
    const { recipeType } = useParams()
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        console.log("Running useEffect")
        const getData = async () => {
            const res = await axios.get(`${DEV_API_URL}/recipes/recipe-type/${recipeType}`)
            setRecipeData(res.data)
        }
        getData()
    }, [])
    console.log(recipeData)
    return (<>
        <Container>
            <h1 className="p-5" style={{color:"thistle"}}>Simply Good <span style={{color:"black"}}> {recipeType} </span> Ideas</h1>
            <Link to="/menuideas/"><button type="button" className="btn btn-outline-dark">Take Me Back to Menu Ideas</button></Link>
        </Container>
        <div className="container py-5 w-75">
        <div className="row row-cols-4 text-center align-items-center justify-content-between g-5">
        {
            recipeData.map((recipe, idx) => (
                <div className="col col-lg-4" key={idx} >
                    <div className="card px-4 py-4">
                        <img width="150" height="250" src={recipe.image} alt="recipe" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{recipe.recipeName}</h5>
                            <p className="card-text">{recipe.description}</p>
                            <Link to={`/all-recipes/${recipe._id}`}> <button type="button" className="btn btn-outline-dark">Make it.</button></Link>
                        </div>
                    </div>
                </div>
            ))}    </div>
        </div></>)
}
        
export default RecipesByType
