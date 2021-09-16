import React from "react";
import Carousel from "react-bootstrap/Carousel"


//This isn"t used
export const CarouselImage = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{objectFit:"cover", height: "250px"}}
                    src="https://w.ndtvimg.com/sites/3/2018/11/30100653/Save-Green-an-NGO-in-Bengaluru-has-planted-12000-trees-since-200.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    
                    style={{objectFit:"cover", height: "250px"}}
                    src="https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/5985631785001/39b81879-545b-44de-8ea6-c18027df0c37/2905052a-8935-4fc3-9140-3ea4ba2952bc/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    
                    style={{objectFit:"cover", height: "250px"}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRvCnI0Y_EzSGNaO7GJJPaXflZG575DOPZg&usqp=CAU"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}
