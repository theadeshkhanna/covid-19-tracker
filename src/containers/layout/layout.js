import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router";
import Landing from "../../components/landing/landing";
import StateWise from "../../components/stateWise/stateWise";
import {Link} from "react-router-dom";
import DistrictWise from "../../components/districtWise/districtWise";
import DistrictDaily from "../../components/districtDaily/districtDaily";
import classes from "./layout.css";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ul className={classes.Navi}>
                    <li><Link to="/state-wise" className={classes.Tag}>State-Wise</Link></li>
                    <li><Link to="/district-wise" className={classes.Tag}>District-wise</Link></li>
                    <li><Link to="/district-daily" className={classes.Tag}>District-Daily</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/state-wise" exact component={StateWise} />
                    <Route path="/district-wise" exact component={DistrictWise} />
                    <Route path="/district-daily" exact component={DistrictDaily} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
