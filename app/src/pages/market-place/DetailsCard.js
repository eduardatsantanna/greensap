import React, { useContext, useEffect } from 'react';
import { Card } from "react-bootstrap";
import { CircularProgress } from "@/components/progress";
import AgendaIcon from "../../assets/flat-icon/svg/agenda.svg";
import TreeIcon from "../../assets/flat-icon/svg/tree.svg";
import WebSiteIcon from "../../assets/flat-icon/svg/website.svg";
import AreaGraphIcon from "../../assets/flat-icon/svg/area-graph.svg";
import CloudIcon from "../../assets/flat-icon/svg/cloud-computing.svg";
//import PlantingIcon from "../../assets/flat-icon/svg/planting.svg";
import SavePlanetIcon from "../../assets/flat-icon/svg/save-the-planet.svg";
import WorldEnvIcon from "../../assets/flat-icon/svg/world-environment-day.svg";
import LocationIcon from "../../assets/flat-icon/svg/location.svg";
import MoneyIcon from "../../assets/flat-icon/svg/money.svg";
import PersonIcon from "../../assets/flat-icon/svg/person.svg";

import { FlatIcon } from "@/components/icon";
import { prefixNum } from "@/helpers";
import { InvestButton } from ".";
import { useState } from 'react';
import { projectsService } from '@/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { MarketplaceContext } from "@/context";


export const DetailsCard = ({project}) => {


    const [invest, setInvest] = useState({
        Investments: 0,
        Tree_cost: 0,
        Trees: 0,});

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }
    const { ngosRed } = useContext(MarketplaceContext);
    const [ngos ,dispatch] = ngosRed;


    const {
        DisplayPicture: picture,
        DisplayName: name,
        PlantationDensity: plantationDensity,
        TotalPlantationArea: plantationArea,
        Description: about,
        TreeCostAverage: treeCost,
        CarbonOffsetAverage: carbonPerTree,
        WorkerCount: workers,
        CarbonOffsetSymbol: carbonUnit,
        Country_code: location,
        SiteOwnership: ownerShip

    } = project;
    const {
        DisplayName: ngo,
        EmailAddress: email,
        WebsiteURL: webSite
    } = project.Owner;
    const goalT = parseInt(plantationArea / plantationDensity);
    const co2Cost = (treeCost / carbonPerTree).toFixed(2);
    const currentT = 0;
    const number = 740;
    const co2Absortion = carbonPerTree * goalT;

    useEffect(() => {
        
        dispatch({ type: 'finished', payload: [project.Owner] });

        projectsService.getProjectInvestment(project.ID).then(
            invest => {
                setInvest(invest);
            },
            error => {
            }
        );


        return () => {
            setInvest({});
        }
    }, [])


    return (
        <>
        <Card.Img src={picture?`${process.env.PUBLIC_URL}${picture}`:`${process.env.PUBLIC_URL}/assets/ngo-project-1.jpeg`} variant="top" className="banner-img" style={{ objectFit: "cover" }} alt="project ngo" />
            <Card.ImgOverlay className="banner-img">
            <button className="btn float-left pl-0">
                <FontAwesomeIcon className="text-white back-icon" icon={faArrowLeft} onClick={goBack} />
            </button>
                <div className="sponsors">
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airbnb.jpg`} alt="Airbnb logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/facebook.png`} alt="Facebook logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/coca-cola.png`} alt="Coca Cola logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/space-x.jpg`} alt="SpaceX logo" className="sponsor-badge"></img>
                    <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airfrance.png`} alt="AirFrance logo" className="sponsor-badge"></img>
                </div>
            </Card.ImgOverlay>
            <Card.Body className="card-body">
                <div className="project-details-header">
                    <div className="name-location">
                        <div>
                            <p className="project-name">
                                {name}  <a className="ngo-name" href="#/">By {ngo}</a>
                            </p>
                            <div className="d-flex align-items-center pt-2">
                                <FlatIcon><img src={LocationIcon} alt="icono agenda" style={{ width: "100%" }} /></FlatIcon><p className="desc" style={{ fontWeight: "600" }}>{location}</p>
                            </div>
                        </div>

                        {/* <p className="location">
                            {location}
                        </p> */}
                    </div>
                    <div className="project-kpi">
                        <InvestButton project={project}/>
                        <p className="tree-cost">${treeCost} USD per tree</p>
                        <p className="tree-co2">{carbonPerTree} {carbonUnit} CO<sub>2</sub> per tree</p>
                        <p className="co2-cost">${co2Cost} USD per {carbonUnit} CO<sub>2</sub></p>
                    </div>
                </div>

                <div className="project-details-about">
                    <h1 className="title">About</h1>
                    <p className="about-desc">
                        {about}
                    </p>
                    <div className="project-kpis">
                        <div className="kpi">
                            <FlatIcon><img src={TreeIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Target Trees Count: <span className="value"> {prefixNum(number, goalT)}</span></p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={CloudIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Estimated CO<sub>2</sub> Absortion: <span className="value">{prefixNum(number, co2Absortion)} {carbonUnit}</span></p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={AreaGraphIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Plantation Area: <span className="value">{prefixNum(number, plantationArea)} ha</span></p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={WorldEnvIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Planting Density: <span className="value">{prefixNum(number, plantationDensity)}</span></p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={SavePlanetIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Workers: <span className="value">{workers}</span></p>
                        </div>
                        {/* <div className="kpi">
                            <FlatIcon><img src={MoneyIcon} alt="icono agenda" style={{ width: "100%", marginRight: "10px" }} /></FlatIcon><p className="desc">Total Investmen: <span className="value">{`$120M USD`}</span></p>
                        </div> */}
                    </div>
                    <div className="project-details-about">
                        <h1 className="title">Landsite Ownership</h1>
                        <p>
                            {ownerShip}
                        </p>

                    </div>
                    {/* <div className="project-details-about">
                        <h1 className="title">Planting Season</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div> */}

                    <div className="project-details-about">
                        <h1 className="title">Project"s Progress</h1>
                        <div className="project-progress">

                            <div className="circular-progress mt-4">
                                <CircularProgress currentT={invest.Trees} goalT={goalT} number={number} />
                            </div>
                            <div className="progress-info">
                                <div className="total-count">
                                    <p className="counter">$ {prefixNum(number, invest.Investments)} USD</p>
                                    <p className="title">Total Investments</p>
                                </div>

                                <div className="total-count pt-4">
                                    <p className="counter">{invest.Trees}</p>
                                    <div className="title">Trees planted</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-details-about">
                    <h1 className="title">Contact</h1>
                    <div className="project-kpis">
                        <div className="kpi">
                            <FlatIcon><img src={PersonIcon} alt="icono agenda" style={{ width: "100%" }} /></FlatIcon><p className="desc ">Visit Profile</p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={WebSiteIcon} alt="icono agenda" style={{ width: "100%" }} /></FlatIcon><p className="desc">{webSite}</p>
                        </div>
                        <div className="kpi">
                            <FlatIcon><img src={AgendaIcon} alt="icono agenda" style={{ width: "100%" }} /></FlatIcon><p className="desc">{email}</p>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </>
    )
}
