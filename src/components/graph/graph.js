import React, {Component} from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import StateWise from "../state-wise/state-wise";

class Graph extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="graph/state-wise">State-Wise</Link></li>
                    <li><Link to="graph/district-wise">District-wise</Link></li>
                    <li><Link to="graph/district-daily">District-Daily</Link></li>
                </ul>
                <Switch>
                    <Route path="graph/state-wise" exact component={StateWise} />
                    <Route path="graph/district-wise" exact component={StateWise} />
                    <Route path="graph/district-daily" exact component={StateWise} />
                </Switch>
            </div>
        );
    }
}

export default Graph;
