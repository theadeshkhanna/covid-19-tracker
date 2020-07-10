import React, {Component} from "react";
import classes from "./landing.css";
import {inject, observer} from "mobx-react";
import Spinner from "../UI/Spinner/Spinner";
import TotalData from "../TotalData/TotalData";
import List from "../UI/List/List";

@inject("StateStore")
@observer
class Landing extends Component {

    componentDidMount() {
        this.props.StateStore.getData();
    };

    render() {
        let pageData = null;
        if (this.props.StateStore.data !== null) {
            const data = this.props.StateStore.data
                .filter(obj => (obj.state === "Total"))
                .map((o, i) => {
                    return {
                        "active": o.active,
                        "recovered": o.recovered,
                        "confirmed": o.confirmed,
                        "deaths": o.deaths
                    };
                })[0];
            pageData = <div className={classes.Landing}>
                <List />
                <TotalData
                    confirmed={data.confirmed}
                    active={data.active}
                    recovered={data.recovered}
                    deaths={data.deaths}/>
            </div>

        } else {
            pageData = <Spinner />
        }
        return pageData;
    }
}

export default Landing;
