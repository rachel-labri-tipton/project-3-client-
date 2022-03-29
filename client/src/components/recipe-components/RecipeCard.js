//this is our component that renders one recipe

import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import { Link } from "react-router-dom"

function RecipeCard() {
    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        console.log("Running useEffect")
        const getData = async () => {
            const res = await axios.get(`${API_URL}/recipes`)
            setRecipeData(res.data)
            console.log(recipeData)
        }
        getData()
    }, [recipeData])
   
    return (
    <>
        {
                recipeData.map((recipe, idx) => (
                    <div className="col col-lg-4">
                            <div key={idx} className="card px-4 py-4">
                                <img width="150" height="250" src={recipe.image} alt="recipe" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.recipeName}</h5>
                                    <p className="card-text">{recipe.description}</p>
                                    <Link to={`/all-recipes/${recipe._id}`}> <button type="button" className="btn btn-outline-dark">Make it.</button></Link>
                                </div>
                        </div>
                    </div>
                ))
        }
            </>)
    }

export default RecipeCard

