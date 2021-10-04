import React, { useContext, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Slider from "react-slick";
import { breakText } from "@/helpers";
import {MarketplaceContext} from "@/context";

export const Ngos = ({ ngos }) => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const { ngosRed } = useContext(MarketplaceContext);
    const [ngoData ,dispatch] = ngosRed;

    useEffect(() => {


    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4
    };

    const onFilterByNgos = (ngo) => {
        dispatch({ type: 'loading' });
        dispatch({ type: 'finished', payload: [ngo] });
        history.push(`${url}?id=${ngo.id}`);
    };
    

    return (
        <div className="ngos-profile">
            <Slider {...settings}>
                {ngos.data && ngos.data.map((ngo, i) => {
                    return (
                        <div key={ngo.id} className="ngo-pro ngos" onClick={() => onFilterByNgos(ngo)}>
                            <img className="picture" src={ngo.img} alt="Profile NGO img" />
                            <div className="name">
                                <p >{breakText(ngo.name, 30)}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )

}
