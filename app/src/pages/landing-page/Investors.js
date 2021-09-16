import { investorImages } from "@/helpers";
import Slider from "react-slick";




export const Investors = () => {

    const investors = investorImages();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (

        <section className="investors">
            <h1>Our investors</h1>
            <div className="investors-images">
                <Slider {...settings}>
                    {investors.map((element, index) => (
                        <div className="image" key={index}>

                            <img  className="picture" src={element.url} alt={element.name}  />
                        </div>

                    ))}
                </Slider>
            </div>
        </section>
    );
};
