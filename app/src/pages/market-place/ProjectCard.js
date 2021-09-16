import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ProgressBarProject } from "@/components/progress";
import { InvestButton } from "./";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { projectsService } from "@/services";

export const ProjectCard = ({ project, id,ownerId, title, ngo, plantationDensity, picture, totalPlantationArea, location, description, treeCostAverage, carbonOffsetAverage, unitCarbon, urlImg = "/assets/ngo-project-1.jpeg" }) => {

    const goalT = parseInt(totalPlantationArea / plantationDensity);
  
    const history = useHistory();
    const { url } = useRouteMatch();
    const treeCost = (treeCostAverage /  carbonOffsetAverage).toFixed(2);

    const seeDetails = () => {
        history.push(`${url}/project?id=${id}`);
      
    }  

    const [invest, setInvest] = useState({
        Investments: 0,
        Tree_cost: 0,
        Trees: 0,});

    useEffect(() => {
        

        projectsService.getProjectInvestment(id).then(
            invest => {
                setInvest(invest);
            },
            error => {
            }
        );


        return () => {
            
        }
    }, [])

    return (
        <Card className="project-card" onClick={() => { seeDetails() }}>
            <Card.Img src={picture?`${process.env.PUBLIC_URL}${picture}`:`${process.env.PUBLIC_URL}/assets/ngo-project-1.jpeg`}className="banner-img" style={{ objectFit: "cover" }} alt="project ngo" />


            <Card.ImgOverlay className="card-body  p-0">

                <div className="project-header">
                    <div className="icons">
                        <div className="icon like">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="icon share">
                            <FontAwesomeIcon icon={faShareAlt} />
                        </div>
                    </div>
                    <div className="name-sponsors">
                        <p className="project-name">
                            {title} <span className="ngo-name">by <a className="" href="#/">{ngo}</a></span>
                        </p>
                        {/* <p className="location">
                            {location}
                        </p> */}

                        <div className="sponsors">
                            <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airbnb.jpg`} alt="Airbnb logo" className="sponsor-badge"></img>
                            <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/facebook.png`} alt="Facebook logo" className="sponsor-badge"></img>
                            <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/coca-cola.png`} alt="Coca Cola logo" className="sponsor-badge"></img>
                            <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/space-x.jpg`} alt="SpaceX logo" className="sponsor-badge"></img>
                            <img src={`${process.env.PUBLIC_URL}/assets/example-profile-img/airfrance.png`} alt="AirFrance logo" className="sponsor-badge"></img>
                        </div>
                    </div>

                    <div className="project-body">

                        <div className="body">

                            <div className="project-desc">
                                {description}
                            </div>


                            <div className="project-kpi">
                                <InvestButton project={project}/>
                                <p className="tree-cost">${treeCostAverage} per tree</p>
                                <p className="tree-co2">{carbonOffsetAverage} {unitCarbon} CO<sub>2</sub> per tree</p>
                                <p className="co2-cost">${treeCost} per {unitCarbon} CO<sub>2</sub></p>
                            </div>

                        </div>

                        <ProgressBarProject currentT={invest.Trees} goalT={goalT} />

                    </div>
                </div>

            </Card.ImgOverlay>
        </Card>
    )
}
