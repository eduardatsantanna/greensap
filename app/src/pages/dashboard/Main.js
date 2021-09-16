import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
import { ngoService, userService } from "@/services";
import { TotalCount } from '@/components/utils';



export const Main = ({ ID, DisplayPicture = "", DisplayName = "", Country = "", WebsiteURL = "", EmailAddress = "", Facebook, Instagram, Twitter, LinkedIn, Investments = 0, TreesPlanted = 0, AverageTreeCost = 0, Followers = 0, Investors = 0, CurrentInvestments = 0, CurrentTreesPlantend = 0, CurrentAverageTreeCost = 0, CurrentFollowers = 0, CurrentInvestors = 0, type }) => {
    const [summary, setSummary] = useState({
        Investments: -1,
        Trees: -1,
        Tree_cost: -1,
    });

    useEffect(() => {
        let response;
        if (type === "user") {
            response = userService.getUserInvestment(ID);
        } else {
            response = ngoService.getNGOInvestment(ID);
        }
        response.then(data => setSummary(data));
    }, []);

    return (
        <div className="main">
            <div className="main-profile">
                <div className="ngo-data">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}${(DisplayPicture)? DisplayPicture: '/assets/example-profile-img/greenhope.jpg'}`} alt="Profile NGO img" className="logo" />
                    </div>
                    <div className="data">
                        <p className="ngo-name">{DisplayName}</p>
                        <p className="title">{Country}</p>
                        <p className="title">{EmailAddress}</p>
                        <a href={`https://${WebsiteURL}`}>{WebsiteURL}</a>
                        <div className="social-media">
                            {Facebook && <a className="facebook" href={Facebook}><FontAwesomeIcon icon={faFacebook} className="mr-2" /></a>}
                            {Twitter && <a className="twitter" href={Twitter}><FontAwesomeIcon icon={faTwitter} className="mr-2" /></a>}
                            {Instagram && <a className="instagram" href={Instagram}><FontAwesomeIcon icon={faInstagram} className="mr-2" /></a>}
                            {LinkedIn && <a className="linkedn" href={LinkedIn}><FontAwesomeIcon icon={faLinkedin} className="mr-2" /></a>}
                        </div>
                    </div>
                </div>
                <div className="sponsors">
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airbnb.jpg`} alt="Airbnb logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/facebook.png`} alt="Facebook logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/coca-cola.png`} alt="Coca Cola logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/space-x.jpg`} alt="SpaceX logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airfrance.png`} alt="AirFrance logo" className="sponsor-badge"></img>
                </div>
            </div>
            <div className="totals-percents global-kdis">
                <div className="totals-container">
                    {summary.Investments === -1 ? null : <TotalCount title="Investments" number={summary.Investments} simbol = "$" delay={1000} />}
                    {summary.Trees === -1 ? null : <TotalCount title="Trees Planted" number={summary.Trees} simbol="" delay={1000}/>}
                    {summary.Tree_cost === -1 ? null : <TotalCount title="Tree Cost" number={summary.Tree_cost} simbol = "$" delay={1000}/>}
                </div>
            </div>
            {/* <div className="totals-percents global-followers">
                <div className="total">
                    <div className="total-count">
                        <p className="global-counter">{Followers}</p>
                        <p className={`global-percent ${CurrentFollowers > 0 ? "text-success" : "text-danger"}`}>{`${number(CurrentFollowers)} (${(CurrentFollowers / Followers * 100).toFixed(0)}%)`}</p>
                        <p className="global-title">Followers</p>
                    </div>
                </div >
                <div className="total">
                    <div className="total-count">
                        <p className="global-counter">{Investors}</p>
                        <p className={`global-percent ${CurrentInvestors > 0 ? "text-success" : "text-danger"}`}>{`+${number(CurrentInvestors)} (${(CurrentInvestors / Investors * 100).toFixed(0)}%)`}</p>
                        <p className="global-title">Investors</p>
                    </div>
                </div >
            </div> */}
        </div>
    )
}
