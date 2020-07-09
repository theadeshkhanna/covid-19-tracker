import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router";
import Landing from "../../components/landing/landing";
import StateWise from "../../components/stateWise/stateWise";
import DistrictWise from "../../components/districtWise/districtWise";
import DistrictDaily from "../../components/districtDaily/districtDaily";
import Navigation from "../../components/UI/Navigation/Navigation";
import KnowTheDeveloper from "../../components/KnowTheDeveloper/KnowTheDeveloper";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Switch>
                    <Route path="/KnowTheDeveloper" exact component={KnowTheDeveloper} />
                    <Route path="/state-wise" exact component={StateWise} />
                    <Route path="/district-wise" exact component={DistrictWise} />
                    <Route path="/district-daily" exact component={DistrictDaily} />
                    <Route path="/" exact component={Landing} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
