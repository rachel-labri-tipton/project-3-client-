import { Carousel } from "react-bootstrap"


function CarouselIdeas() {
    return (
        <>
            <Carousel>
                <Carousel.Item className="bg-dark">
                    <img 
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/kczrxYz/INCREDIBLE-5-Ingredient-Banana-Egg-Pancakes-Fluffy-dairy-free-grain-free-no-sugar-added-SO-satisfyin.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 text="dark" >Banana Egg Pancakes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-light">
                    <img  
                        className="img-responsive center-block" width={500} height={400}
                        src="https://minimalistbaker.com/wp-content/uploads/2019/12/Massaged-Kale-Salad-SQUARE.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Massaged Kale Salad</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img 
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/s2f6Z58/THE-BEST-AMAZING-Peanut-Butter-Overnight-Oats-Just-5-ingredients-5-minutes-prep-and-SO-delicious-veg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Peanut Butter Overnight Oats</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-light">
                    <img
                        className="img-responsive center-block" width={500} height={400}
                        src="https://minimalistbaker.com/wp-content/uploads/2018/03/Hummus-from-Scratch-SQUARE.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Hummus from Scratch</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-dark">
                    <img
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/vzsGszm/HEALTHY-Spanish-Quinoa-Stuffed-Peppers-10-ingredients-packed-with-protein-and-fiber-and-SO-flavorful.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Mexican Quinoa Stuffed Peppers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-light">
                    <img
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/NVXN82f/Vegan-Funfetti-Cupcakes-One-bowl-10-ingredients-SUPER-delicious-cupcakes-vegan.webp"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3>Vegan Funfetti Cupcakes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselIdeas