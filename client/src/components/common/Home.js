//this is our home page that shows nine different random recipe cards and the featured recipe
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import  { DEV_API_URL } from "../../config"

function Home() {
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        console.log("Running useEffect")
        const getData = async () => {
            const res = await axios.get(`${DEV_API_URL}/recipes`)
            setRecipeData(res.data)
        }
        getData()
    }, [])
    console.log({ recipeData })
    return (
        <div>
            <h1>Welcome to the recipe page</h1>
            {recipeData.map((recipe, idx) => (
                <div key={idx}>
                    <h4>{recipe.recipeName}</h4>
                    <p>{recipe.description}</p>
                    <p>{recipe.nutrition}</p>
                    <img width="50" height="50" src={recipe.image} alt="photo of recipe" />
                </div>
            ))}
        </div>
    )
  
}

export default Home