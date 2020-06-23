import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router";
import Landing from "../../components/landing/landing";
import StateWise from "../../components/stateWise/stateWise";
import {Link} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    <li><Link to="/state-wise">State-Wise</Link></li>
                    <li><Link to="/district-wise">District-wise</Link></li>
                    <li><Link to="/district-daily">District-Daily</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/state-wise" exact component={StateWise} />
                    <Route path="/district-wise" exact component={StateWise} />
                    <Route path="/district-daily" exact component={StateWise} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
