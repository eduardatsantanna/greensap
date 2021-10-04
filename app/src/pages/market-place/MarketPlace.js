
import "@/scss/market-place/index.scss";
import React, { useEffect, useReducer } from "react"
import { LoadContent } from "@/pages/general";
import { Main, Projects, ProjectMap } from "./";
import { ProjectDetails } from "./";
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import { MarketplaceContext } from "@/context";
import { projectsReducer, ngosReducer } from "@/reducers";

export const MarketPlace = () => {

    const { path } = useRouteMatch();
    const projectsRed = useReducer(projectsReducer, { loading: true });
    const ngosRed = useReducer(ngosReducer, { loading: true });

    return (

        <MarketplaceContext.Provider value={{
            projectsRed,
            ngosRed
        }}>
            <div className="project-map">
                <ProjectMap />
            </div>
            <Main />
                <div style={{ overflow: "hidden" }}>
                    <div className="market-place">
                        <div className="ngos-projects">
                            <Switch>
                                <Route exact path={path}>
                                    <Projects/>
                                </Route >
                                <Route path={`${path}/project`}>
                                    <ProjectDetails />
                                </Route>
                            </Switch >
                        </div>
                    </div>
                </div>
        </MarketplaceContext.Provider >
    )
}