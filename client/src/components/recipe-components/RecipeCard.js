//this is our component that renders one recipe

import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"

function RecipeCard() {
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        console.log("Running useEffect")
        const getData = async () => {
            const res = await axios.get(`${DEV_API_URL}/recipes`)
            setRecipeData(res.data)
            console.log(recipeData)
        }
        getData()
    }, [recipeData])
    console.log(recipeData)
    return (
    <>
        {
                recipeData.map((recipe, idx) => (
            <>
                <div key={idx} className="card">
                    <img width="100" height="100" src={recipe.image} alt="recipe" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{recipe.recipeName}</h5>
                        <p className="card-text">{recipe.description}</p>
                    </div>
                        </div>
                        </>))
        }
            </>)
    }

export default RecipeCard

