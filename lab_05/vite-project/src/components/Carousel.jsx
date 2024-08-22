import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/slides/slide1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/imgs/slides/slide2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/slides/slide3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
