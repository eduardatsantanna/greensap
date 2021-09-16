import React, { useContext, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Slider from "react-slick";
import { breakText } from "@/helpers";

export const Ngos = ({ ngos }) => {
    const history = useHistory();
    const { url } = useRouteMatch();

    useEffect(() => {


    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4
    };

    const onFilterByNgos = (ngosId) => {
        history.push(`${url}?id=${ngosId}`);
    };
    console.log(ngos);
    return (
        <div className="ngos-profile">
            <Slider {...settings}>
                {ngos.data && ngos.data.map((ngo, i) => {
                    return (
                        <div key={ngo.DisplayName} className="ngo-pro ngos" onClick={() => onFilterByNgos(ngo.ID)}>
                            <img className="picture" src={`${process.env.PUBLIC_URL}${ngo.DisplayPicture}`} alt="Profile NGO img" />
                            <div className="name">
                                <p >{breakText(ngo.DisplayName, 30)}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )

}
