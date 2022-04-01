//this is our home page that shows nine different random recipe cards and the featured recipe
import React from "react"
import { Link } from "react-router-dom"
import HomeFeaturedRecipes from "./HomeFeaturedRecipes"
import RecipeCard from "../recipe-components/RecipeCard"
import { Container } from "react-bootstrap"    


function Home() {

    return (
        <>
            <section className="bg-light text-dark text-start">
                <div className="container pt-5">
                    <div className="d-md-flex align-items-center justify-content-around">
                        <div>
                            <h1 style={{ color: "mediumturquoise" }}>Simply Good <span style={{color: "black"}}>Food</span></h1>
                            <div><h2 className="lead py-5 w-50">Just two web developers bringing you their favorite healthy recipes without the hastle of scrolling through wordy blogs.</h2></div>
                            <Link to="/all-recipes"><button type="button" className="btn btn-outline-dark">Take Me to All Recipes</button></Link>
                        </div>
                        <img className="img-fluid py-5 px-5 d-sm-block" height="500" width="300" src="https://i.ibb.co/hgD0tv1/HEALTHY-Mango-Green-Salad-with-Creamy-Peanut-Dressing-15-min-9-ingredients-SO-delicious-salad-vegan.jpg" alt="homepage food" />
                    </div>
                   
                </div>
            </section>
            <section>
                    <h1 className="text-align-center pb-5 pt-5">Our Featured Recipes</h1>
                    <Container className="container w-50 pb-5 mb-5">
                        <div className="row row-cols-3 text-center align-items-center justify-content-between g-5">
                        <HomeFeaturedRecipes />
                        </div>
                </Container>
                
            </section>
                
             </>
    )
  
}

export default Home
