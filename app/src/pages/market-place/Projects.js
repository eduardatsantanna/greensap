import React, { useContext, useEffect, useRef } from "react"

import { ProjectCard } from "./";
import { useQuery } from "@/hooks";
import { projectsService } from "@/services";
import { MarketplaceContext } from "@/context";
import { ProjectCardLoading } from "./ProjectCardLoading";

export const Projects = () => {

    
    const id = useQuery("id");
    const { projectsRed } = useContext(MarketplaceContext);
    const [projects, dispatch] = projectsRed;
    const isMounted = useRef(true);
    const loadComponent = [{key:1, uniqueKey:"ramdom-one"},{key:2, uniqueKey:"ramdom-two"},{key:3, uniqueKey:"ramdom-three"}];

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        if (id) {
            
            dispatch({ type: 'loading' });
            projectsService.getByNgoId(id).then(
                projects => {
                    if(isMounted.current){
                    dispatch({ type: 'finished', payload: projects });
                    }
                },
                error => {
                    if(isMounted.current){
                    dispatch({ type: 'error', payload: error });
                    }
                }
            );
            
            
        } else {
            dispatch({ type: 'loading' });
            projectsService.getAll().then(
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
    }, [id]);
    
    return (
        <div className="marketplace-projects">
            {projects.loading && loadComponent.map(element => {
                return <ProjectCardLoading key={element.key} uniqueKey={element.uniqueKey}/>;
            })}
            {projects.data && projects.data.map((project, i) => {
                return <ProjectCard key={i} project = {project} />;
            })}
        </div>
    )
}
