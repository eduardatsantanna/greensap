
import "@/scss/dashboard/index.scss";
import { Sumary, Analytics, Main } from "./";
import { BubbleMap } from "@/components/map";
import React, { useEffect, useState } from "react";
import { LoadContent } from "@/pages/general";
import { authenticationService, ngoService } from "@/services";
import { useLocation } from "react-router-dom";
import {useQuery} from "@/hooks";

export const Dashboard = () => {


    const {pathname} = useLocation();
    const id = useQuery("id");
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        if(!id){
            setUser(authenticationService.currentUserValue);
        }else {
            ngoService.getById(id).then(
                ngo=>{
                    setUser(ngo[0]);
                },
                error=>{
                    setUser(null);
                }
            )
        }
    }, [id]);

    return (
        <LoadContent>
            {user &&
                <div className="content dashboard">
                    <div className="main-content">
                        <Main {...user} />
                        <Sumary {...user} />
                        <Analytics {...user}/>
                    </div>
                </div>
            }
        </LoadContent>
    )
}
