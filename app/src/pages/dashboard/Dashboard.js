
import "@/scss/dashboard/index.scss";
import { Sumary, Analytics, Main } from "./";
import React, { useEffect, useState } from "react";
import { LoadContent } from "@/pages/general";
import { useLocation, useHistory } from "react-router-dom";
import {useQuery} from "@/hooks";
import { dashboardService } from "../../services";

export const Dashboard = () => {
    const [user, setUser] = useState(null);
    const history = useHistory();
    const { pathname } = useLocation();
    const id = useQuery("id");
    const isDashboard = pathname === '/dashboard';
    
    useEffect(() => {
        dashboardService.getUser(isDashboard, id)
            .then(user => setUser(user))
            .catch(err => history.push('/'));
    }, []);

    return (
        <LoadContent>
            {user &&
                <div className="content dashboard">
                    <div className="main-content">
                        <Main user={user} />
                        <Sumary user={user} isDashboard={isDashboard} />
                        <Analytics user={user} />
                    </div>
                </div>
            }
        </LoadContent>
    )
}
