//this page shows ideas for one type of meal and pulls in recipes with a given category: Breakfast, Lunch, Dinner,
import RecipesByType from "./RecipesByType"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"


function IdeaPage() {
    return (
        <>
        {/* //     <section className="bg-light text-dark text-start">
        //         <div className="container">
        //             <div className="d-md-flex align-items-center justify-content-around">
        //                 <div>
        //                     <h1>Simply Good Ideas</h1>
        //                     <Link to="/menuideas/"><button type="button" className="btn btn-outline-dark">Take Me Back to Menu Ideas</button></Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </section> */}

            <Container>
                <RecipesByType />
            </Container>
         
        </>
    )
    }
    


export default IdeaPage