import React, { useContext, useEffect } from "react"

import { ProjectCard } from "./";
import { projectsService } from "@/services";
import { MarketplaceContext } from "@/context";
import { useQuery } from "@/hooks";
import { useLocation } from "react-router-dom";



export const Projects = () => {
    const { projectsRed } = useContext(MarketplaceContext);
    const [projects, dispatch] = projectsRed;
    const id = useQuery("id");



    useEffect(() => {
        dispatch({ type: 'loading' });
        if (id) {
            projectsService.getByNgoId(id).then(
                projects => {
                    dispatch({ type: 'finished', payload: projects });
                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        } else {
            projectsService.getAll().then(
                projects => {
                    dispatch({ type: 'finished', payload: projects });
                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        }
    }, [id]);

    const profiles = [
        "/assets/example-profile-img/profile.jpg",
        "/assets/example-profile-img/profile2.jpg",
        "/assets/example-profile-img/profile3.jpg",
        "/assets/example-profile-img/profile4.jpg",
    ];

    const urls = [
        "/assets/ngo-project-1.jpeg",
        "/assets/ngo-project-2.jpeg",
        "/assets/ngo-project-3.jpeg",
    ];

    return (
        <div className="marketplace-projects">
            {projects.data && projects.data.map((project, i) => {
                return <ProjectCard
                    key={project.ID}
                    project={project}
                    id={project.ID}
                    name={project.DisplayName}
                    picture={project.DisplayPicture}
                    ownerId={project.Owner.ID}
                    ngo={project.Owner.DisplayName}
                    contact={project.owner_email}
                    webSite={project.owner_website}
                    description={project.Description}
                    location="Brazil"
                    title={project.DisplayName}
                    urlProfile={profiles[i % profiles.length]}
                    urlImg={urls[i % urls.length]}
                    carbonOffsetAverage={project.CarbonOffsetAverage}
                    treeCostAverage={project.TreeCostAverage}
                    plantationDensity={project.PlantationDensity}
                    totalPlantationArea={project.TotalPlantationArea}
                    numberOfWorkers={project.NumberOfWorkers}
                    treeCostCurrency={project.TreeCostCurrency}
                    boundaries={project.Boundaries}
                    number="720"
                    goalT="40000"
                    currentT="11,000" />;
            })}

            {/* <ProjectCard name="Save the amazon" ngo="Plant A Tree" contact="platatree@gmail.com" webSite="www.plantatree.com"  location="Brazil" title="Save the Amazonas" urlProfile="/assets/example-profile-img/profile.jpg" urlImg = "/assets/ngo-project-1.jpeg" number="720" goalT="40000" currentT="11,000"/>
            <ProjectCard name="Reforest Oaxaca" ngo="Arboles de Cordova" contact="platatree@gmail.com" webSite="www.plantatree.com"  location="Brazil" title="Breath" urlProfile="/assets/example-profile-img/profile4.jpg" urlImg = "/assets/ngo-project-2.jpeg" number="720" goalT="40000" currentT="11,000"/>
            <ProjectCard name="Breath better" ngo="Tree for tomorrow" contact="plattres@gmail.com" webSite="www.plantatree.com"  location="Mexico" title="The world need your help" urlProfile="/assets/example-profile-img/profile3.jpg" urlImg = "/assets/ngo-project-3.jpeg" number="720" goalT="40000" currentT="11,000"/>
            <ProjectCard name="Project Name" ngo="NGO Name" contact="platatree@gmail.com" webSite="www.plantatree.com"  location="United States" title="Ngo's Name Project" urlProfile="/assets/example-profile-img/profile2.jpg" number="720" goalT="40000" currentT="11,000"/> */}

        </div>
    )
}
