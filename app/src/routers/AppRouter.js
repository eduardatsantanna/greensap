

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { PrivateRoute } from "@/components/route";
import { Footer, Navbar } from "@/pages/general";
import { LandingPage } from "@/pages/landing-page";
import { Dashboard } from "@/pages/dashboard";
import { Account } from "@/pages/account";
import { Project } from '@/pages/project';
import { MarketPlace } from "@/pages/market-place";

export const AppRouter = () => {
    return (
        <Router basename="/">
            <Navbar />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/account" component={Account} />
                <PrivateRoute exact path="/project" component={Project} />
                <Route path="/marketplace" component={MarketPlace} />
                <PrivateRoute path="/profile" component={Dashboard} />
                <Route path="*" component={() => <Redirect to="/" />}></Route>
            </Switch>
            <Footer />
        </Router >
    )
}
