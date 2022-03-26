//this is our home page that shows nine different random recipe cards and the featured recipe
import React from "react"
import RecipeCard from "../recipe-components/RecipeCard"

function Home() {

    return (
        <>
            <div classNameName="container">
                    <div className="row align-items-start">
                        <div className="col">
                        <RecipeCard />
                        </div>
                        <div className="col">
                        <RecipeCard />
                        </div>
                        <div className="col">
                        <RecipeCard />
                        </div>
                    </div>
                    <div className="row align-items-center">
                </div>  
                </div>
        </>          
    )
  
}

export default Home
