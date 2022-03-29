//this page presents five different meal types: Breakfast, Lunch, Dinner, Snacks, Desserts
//this page also contains the link to the Detox, which is a stretch goal
import { Link } from "react-router-dom"
function IdeasAndSuggestions() {
    return (
            <section className="bg-light text-dark text-start">
            <div className="container pt-5">
                <div className="d-md-flex align-items-center justify-content-around">
                    <div>
                        <h1>Simply Good Menu Ideas</h1>
                        <div><h2 className="lead py-5">Check out our recipes by category.</h2></div>
                        <Link to="/all-recipes"><button type="button" className="btn btn-outline-dark">Take Me Back to All Recipes</button></Link>
                    </div>
                    <img className="img-fluid py-5 px-5 d-sm-block" height="500" width="300" src="https://i.ibb.co/Fsx9BRW/NOURISHING-Black-Bean-Buddha-Bowl-with-Rice-Greens-Kraut-and-Lemon-Ginger-Tahini-Sauce-Simple-BIG-fl.jpg" alt="homepage food" />
                </div>
            </div>
                <div id="slides" className="carousel slide" data-bs-ride="carousel">
                    <div id="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://i.ibb.co/kczrxYz/INCREDIBLE-5-Ingredient-Banana-Egg-Pancakes-Fluffy-dairy-free-grain-free-no-sugar-added-SO-satisfyin.jpg" className="d-block w-50" alt="pancakes"/>
                        <div className="carousel-item">
                        <img src="https://i.ibb.co/Wt3c7mw/Instant-Pot-Banana-Bread-Steel-Cut-Oats-Fast-easy-BIG-banana-bread-flavor-oats-bananabread-instantpo.jpg" className="d-block w-50" alt="oatmeal"/>
                            </div>
                        <div className="carousel-item">
                        <img src="https://i.ibb.co/s2f6Z58/THE-BEST-AMAZING-Peanut-Butter-Overnight-Oats-Just-5-ingredients-5-minutes-prep-and-SO-delicious-veg.jpg" className="d-block w-50" alt="PB overnight oats" />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span>Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span>Next</span>
                        </button>
                    </div>
                </div>
                </div>
                    </section>)

}

export default IdeasAndSuggestions