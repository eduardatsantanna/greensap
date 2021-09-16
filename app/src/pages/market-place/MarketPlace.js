
import "@/scss/market-place/index.scss";
import React, { useState, useEffect, useReducer } from "react"
import { LoadContent } from "@/pages/general";
import { Main, Projects, ProjectMap } from "./";
import { ProjectDetails } from "./";
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { useQuery } from "@/hooks/useQuery";
import { MarketplaceContext } from "@/context";
import { projectsReducer, ngosReducer } from "@/reducers";
import { projectsService } from "../../services/projects.service";

export const MarketPlace = () => {

    const [viewMap, setViewMap] = useState(null);
    const { path } = useRouteMatch();
    const query = useQuery();
    const projectsRed = useReducer(projectsReducer, { loading: true });
    const ngosRed = useReducer(ngosReducer, { loading: true });


    useEffect(() => {

    }, []);


    return (

        <MarketplaceContext.Provider value={{
            projectsRed,
            ngosRed
        }}>


            <div className="project-map">
                <ProjectMap />
            </div>
            <Main />
            <LoadContent>
                <div style={{overflow: "hidden"}}>

                    <div className="market-place">

                        <div className="ngos-projects">


                            <Switch>
                                <Route exact path={path}>

                                    <Projects />
                                </Route >
                                <Route exact path={`${path}/project`}>
                                    <ProjectDetails />
                                </Route>
                            </Switch >

                        </div>
                    </div>

                </div>
            </LoadContent>
        </MarketplaceContext.Provider >
    )
}