import { Link, useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import RecipeCard from "./RecipeCard"

function RecipePage() {
    const { id } = useParams()
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        console.log("Running useEffect")
        const getData = async () => {
            const res = await axios.get(`${DEV_API_URL}/recipes/${id}`)
            setRecipeData(res.data)
            console.log(recipeData)
        }
        getData()
    }, [recipeData, id])
    console.log(recipeData)
    return (
        <section>
        <div className="container pt-5 pb-5">
            <h1 className="text-align-center pt-5 pb-5">{recipeData.recipeName}</h1>
            <img width="300" height="500" src={recipeData.image} alt="recipe" /> 
            <p></p>
            <div className="row align-items-start">
                    <div className="row g-5 align-items-center justify-conent-center ">
                        <li>{recipeData.recipeIngredients}</li>
                        <p>{recipeData.recipeInstructions}</p>
                    </div>
                </div>
            </div>
        </section>
        
        
    )

}

export default RecipePage