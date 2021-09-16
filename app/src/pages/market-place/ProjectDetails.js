import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { projectsService, } from "@/services";
import { MarketplaceContext } from "@/context";
import { useQuery } from "@/hooks";
import { DetailsCard } from "./DetailsCard";


export const ProjectDetails = () => {

    const { projectsRed } = useContext(MarketplaceContext);
    const [projects, dispatch] = projectsRed;
    const id = useQuery("id");
    useEffect(() => {
        dispatch({ type: 'loading' });
        if (id) {
            projectsService.getById(id).then(
                projects => {
                    dispatch({ type: 'finished', payload: projects });

                },
                error => {
                    dispatch({ type: 'error', payload: error });
                }
            );
        }

    }, [id]);


    return (
        
        <Card className="project-details-card">
            {projects.data && projects.data.map((project, i) => {
                return <DetailsCard key={i} project={project} />
            })}
        </Card>
    )
}
