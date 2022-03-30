//this page presents five different meal types: Breakfast, Lunch, Dinner, Snacks, Desserts
//this page also contains the link to the Detox, which is a stretch goal
import { Link } from "react-router-dom"
function IdeasAndSuggestions() {
    return (
        <>
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
        </section>
         </>)

}

export default IdeasAndSuggestions