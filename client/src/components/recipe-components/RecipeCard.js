//this is our component that renders one recipe

import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import { Link } from "react-router-dom"

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
   
    return (
    <>
        {
                recipeData.map((recipe, idx) => (
            <>
                <div key={idx} className="card px-5 py-5">
                    <img width="300" height="500" src={recipe.image} alt="recipe" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{recipe.recipeName}</h5>
                                <p className="card-text">{recipe.description}</p>
                                <Link to={`/all-recipes/${recipe._id}`}> <button type="button" className="btn btn-outline-dark">Looks good. I wanna try it.</button></Link>
                    </div>
                        </div>
                        </>))
        }
            </>)
    }

export default RecipeCard

