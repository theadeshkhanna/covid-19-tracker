import React, {Component} from "react";
import { Switch, Route } from "react-router";
import Map from "../../components/map/map";
import Landing from "../../components/landing/landing";
import Graph from "../../components/graph/graph";

class Layout extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/maps" exact component={Map} />
                <Route path="/graph" exact component={Graph} />
            </Switch>
        );
    }
}

export default Layout;
