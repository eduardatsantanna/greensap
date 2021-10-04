import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
import { dashboardService } from "@/services";
import { TotalCount } from '@/components/utils';

export const Main = (props) => {
    const { user } = props;
    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {
        dashboardService.getAnalytics(user.type, user.id)
            .then(data => setAnalytics(data));
    }, []);

    return (
        <div className="main">
            <div className="main-profile">
                <div className="ngo-data">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}${user.img}`} alt="Profile NGO img" className="logo" />
                    </div>
                    <div className="data">
                        <p className="ngo-name">{user.name}</p>
                        <p className="title">{user.preferredLanguageCode}</p>
                        <p className="title">{user.email}</p>
                        <a href={user.webpage}>{user.webpage}</a>
                        <div className="social-media">
                            {user.facebook && <a className="facebook" href={user.facebook}><FontAwesomeIcon icon={faFacebook} className="mr-2" /></a>}
                            {user.instagram && <a className="instagram" href={user.instagram}><FontAwesomeIcon icon={faInstagram} className="mr-2" /></a>}
                            {user.twitter && <a className="twitter" href={user.twitter}><FontAwesomeIcon icon={faTwitter} className="mr-2" /></a>}
                            {user.linkedIn && <a className="linkedn" href={user.linkedIn}><FontAwesomeIcon icon={faLinkedin} className="mr-2" /></a>}
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
            {analytics && user.type === 'nonprofit' && (
                <div className="totals-percents global-kdis">
                    <div className="totals-container">
                        <TotalCount title="Investments" number={analytics.investors} simbol="" delay={100} />
                        <TotalCount title="Trees Planted" number={analytics.treesPlanted} simbol="" delay={100} />
                        <TotalCount title="Tree Cost" number={analytics.costAverage} simbol = "$" delay={100}/>
                    </div>
                </div>
            )}
            {analytics && user.type !== 'nonprofit' && (
                <div className="totals-percents global-kdis">
                    <div className="totals-container">
                        <TotalCount title="Investments" number={analytics.blocks} simbol="" delay={100} />
                        <TotalCount title="Total Gross" number={analytics.totalGross} simbol="$" delay={100} />
                        <TotalCount title="Total Net" number={analytics.totalNet} simbol = "$" delay={100}/>
                    </div>
                </div>
            )}
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
