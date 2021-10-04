import React, { useContext, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { projectsService, } from "@/services";
import { MarketplaceContext } from "@/context";
import { useQuery } from "@/hooks";
import { DetailsCard } from "./DetailsCard";


export const ProjectDetails = () => {

    const { projectsRed } = useContext(MarketplaceContext);
    const [projects, dispatch] = projectsRed;
    const id = useQuery("id");
    const isMounted = useRef(true);
    console.log(projects);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
       
        if (id) {
            if(!projects.data || projects.data.lenght === 0){
            dispatch({ type: 'loading' });
            projectsService.getById(id).then(
                projects => {
                    if(isMounted.current){
                    dispatch({ type: 'finished', payload: projects });
                    console.log(projects);
                    }
                },
                error => {
                    if(isMounted.current){
                    dispatch({ type: 'error', payload: error });
                    console.log(error);
                    }
                }
            );
            }
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
