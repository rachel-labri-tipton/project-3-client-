import { useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import RecipeCard from "./RecipeCard"
// import Ingredients
// import Instructions

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
        <>
            <section>
            <h1 className="text-align-center pt-5 pb-5">{recipeData.recipeName}</h1>
            <img width="300" height="500" src={recipeData.image} alt="recipe" />
            <h2 className="text-center">Ingredients and Instructions</h2>
            <h4 className="p-3">Ingredients</h4>
            {recipeData.recipeIngredients.map(ingredient => {
                return (
                    <p className="p-1">{ingredient}</p>
                )
            })}
            <h4 className="p-5">Instructions</h4>
            {recipeData.recipeInstructions.map(instructions => {
                return (
                    <p>{instructions}</p>
           
                )
            })}  
            </section>    
        </>)
}

export default RecipePage