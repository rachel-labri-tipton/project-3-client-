import  { Card, Button, Container, CardGroup, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"

function IdeaCard() {
    const recipeTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"]
    return (
        <> {
            recipeTypes.map(recipeType => {
                return (
                    <>
                        <Link to={`/menuideas/${recipeType}`}><Button variant="outline-dark">{recipeType} Ideas</Button></Link>
                    </>
            )}
                    )
        }
            </>)
            }

export default IdeaCard