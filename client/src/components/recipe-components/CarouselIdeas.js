import { Carousel } from "react-bootstrap"


function CarouselIdeas() {
    return (
        <>
            <Carousel>
                <Carousel.Item className="bg-dark">
                    <img 
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/Wt3c7mw/Instant-Pot-Banana-Bread-Steel-Cut-Oats-Fast-easy-BIG-banana-bread-flavor-oats-bananabread-instantpo.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 text="dark" >Banana Bread Steel Cut Oats</h3>
                        <p>You've never tasted steel cut oats this good.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bg-light">
                    <img  
                        className="img-responsive center-block" width={500} height={400}
                        src="https://i.ibb.co/kczrxYz/INCREDIBLE-5-Ingredient-Banana-Egg-Pancakes-Fluffy-dairy-free-grain-free-no-sugar-added-SO-satisfyin.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>5 Ingredient Banana Egg Pancakes</h3>
                        <p>Who needs pancakes made with flour when you have bananas?</p>
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
                        <p>Don't like hot oats, we've got you covered with our overnight oats.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselIdeas