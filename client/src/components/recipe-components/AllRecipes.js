//this page shows all recipes 
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"
import{ Container } from "react-bootstrap"
function AllRecipes() {
    return (
        <>
        <section className="bg-light text-dark text-start">
            <div className="container pt-5">
                <div className="d-md-flex align-items-center justify-content-around">
                    <div>
                            <h1 style={{ color: "mediumturquoise" }}>Simply Good <span style={{ color: "black" }}>Recipes</span></h1>
                        <div><h2 className="lead py-5 w-50">On this page you can find all of our recipes. There aren't that many, but if you can go to our Menu Ideas page if you'd like to check out our recipes by category.</h2></div>
                        <Link to="/menuideas"><button type="button" className="btn btn-outline-dark">Take Me to Menu Ideas</button></Link>
                    </div>
                    <img className="img-fluid py-5 px-5 d-sm-block" height="500" width="300" src="https://i.ibb.co/hgD0tv1/HEALTHY-Mango-Green-Salad-with-Creamy-Peanut-Dressing-15-min-9-ingredients-SO-delicious-salad-vegan.jpg" alt="homepage food" />
                </div>
                </div>
            </section>
            <section>
                    <div>
                    <h1 className="text-align-center pb-5 pt-5 text-secondary">Check out <span variant="default"
                        style={ {color: "black"} }>all</span> our recipes here.</h1>
                    </div>
                    <Container className="container w-75 pb-5 mb-5">
                        <div className="row row-cols-4 text-center align-items-center justify-content-between g-5">
                            <RecipeCard />
                        </div>
                    </Container>
                </section>
        </>
       
    )
}

export default AllRecipes