import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ProgressBarProject } from "@/components/progress";
import { InvestButton } from "./";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { MarketplaceContext } from "@/context";

export const ProjectCard = ({ project }) => {
    const { projectsRed } = useContext(MarketplaceContext);
    const [projects, dispatch] = projectsRed;
    const history = useHistory();
    const { url } = useRouteMatch();

    const seeDetails = () => {
        dispatch({ type: 'loading' });
        dispatch({ type: 'finished', payload: [project] });
        history.push(`${url}/project?id=${project.id}`);
    }

    const {analytics} = project;

    useEffect(() => {
        return () => {
        }
    }, [])

    return (
        <Card className="project-card" onClick={() => { seeDetails() }}>
            <Card.Img src={project.banner} className="banner-img" style={{ objectFit: "cover" }} alt="project ngo" />
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
                            {project.name}
                        </p>
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
                                {project.description && project.description.map(
                                    (desc, i) => (
                                        <p key={i}>{desc}</p>
                                    )
                                )
                                }
                            </div>


                            <div className="project-kpi">
                                <InvestButton project={project} />
                                <p className="tree-cost">${analytics.sowCost.toFixed(2)} per tree</p>
                                <p className="tree-co2">{analytics.offsetAverageTCo2.toFixed(2)} kg CO<sub>2</sub> per tree</p>
                                <p className="co2-cost">${analytics.co2AverageCost.toFixed(2)} per kg CO<sub>2</sub></p>
                            </div>

                        </div>

                        <ProgressBarProject currentT={analytics.totalTreesPlanted} goalT={analytics.totalPlantingCapacity}/>

                    </div>
                </div>

            </Card.ImgOverlay>
        </Card>
    )
}
