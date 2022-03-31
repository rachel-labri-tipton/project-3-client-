import { useParams } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"

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
            <div className="container pt-5 pb-5">
                <h1 className="text-align-center pt-5 pb-5">{recipeData.recipeName}</h1>
                <img width="300" height="500" src={recipeData.image} alt="recipe" />
                <div className="row align-items-start">
                    <div className="row g-1 align-items-center justify-content-center ">
                        {/* <h2 className="p-5">Ingredients</h2> */}
                        {recipeData.recipeIngredients.map(ingredient => {
                            return (
                                <>
                                <section className="container">
                                    <p>{ingredient}</p>
                                    </section>
                                </>
                            )
                        })}
                        <h2 className="p-5">Instructions</h2>
                        {recipeData.recipeInstructions.map(instructions => {
                            return (
                                <section className="container w-75 text-start-center">
                                    <div className="w-50 p-1">
                                        <p>{instructions} </p>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>
            </div>
      
    </>
    )

}

export default RecipePage 