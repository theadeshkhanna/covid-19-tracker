import React, {Component} from "react";
import Charts from "../charts/charts";
import {inject, observer} from "mobx-react";
import Spinner from "../UI/Spinner/Spinner";

@inject("StateStore")
@observer
class StateWise extends Component {

    componentDidMount() {
        this.props.StateStore.getData();
    };

    render() {
        let chart_data = null;
        if (this.props.StateStore.data !== null) {
            let newData = [];
            this.props.StateStore.data
                .filter(obj => (obj.state !== "Total"))
                .filter(obj => (obj.state !== "State Unassigned"))
                // eslint-disable-next-line array-callback-return
                .map((o, i) => {
                    let newObj = {
                        "name": o.state,
                        "active": o.active,
                        "confirmed": o.confirmed,
                        "deaths": o.deaths,
                        "recovered": o.recovered
                    };
                    newData.push(newObj);
                });
            chart_data = <Charts data={newData} />
        } else {
            chart_data = <Spinner />
        }
        return chart_data;
    }
}

export default StateWise;
