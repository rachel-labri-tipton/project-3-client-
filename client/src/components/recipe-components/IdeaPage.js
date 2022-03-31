//this page shows ideas for one type of meal and pulls in recipes with a given category: Breakfast, Lunch, Dinner,
import RecipesByType from "./RecipesByType"
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"


function IdeaPage() {
    return (
        <>

            <Container>
                    <RecipesByType />
            </Container>
         
        </>
    )
    }
    


export default IdeaPage