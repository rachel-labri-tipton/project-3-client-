//this page shows all recipes 
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"
function AllRecipes() {
    return (
        <section className="bg-light text-dark text-start">
            <div className="container pt-5">
                <div className="d-md-flex align-items-center justify-content-around">
                    <div>
                        <h1>Simply Good Recipes</h1>
                        <div><h2 className="lead py-5">On this page you can find all of our recipes. There aren't that many, but if you can go to our Menu Ideas page if you'd like to check out our recipes by category.</h2></div>
                        <Link to="/menuideas"><button type="button" className="btn btn-outline-dark">Take Me to Menu Ideas</button></Link>
                    </div>
                    <img className="img-fluid py-5 px-5 d-sm-block" height="500" width="300" src="https://i.ibb.co/hgD0tv1/HEALTHY-Mango-Green-Salad-with-Creamy-Peanut-Dressing-15-min-9-ingredients-SO-delicious-salad-vegan.jpg" alt="homepage food" />
                </div>
                <div className="container align-items-center justify-content-around pt-5 pb-5">
                <h1 className="text-align-center pb-5">Have a scroll through all our recipes.</h1>
                    <div className="row g-5 align-items-center w-50">
                        <RecipeCard />
                    </div>
                </div>
                </div>
        </section>
       
    )
}

export default AllRecipes