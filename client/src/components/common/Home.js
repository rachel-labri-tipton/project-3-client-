//this is our home page that shows nine different random recipe cards and the featured recipe
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { DEV_API_URL } from "../../config"
import RecipeCard from "../recipe-components/RecipeCard"

function Home() {

    return (
        <>
        <div className="container">
            <RecipeCard />
        </div>

             
        </>      
           
    )
  
}

export default Home
