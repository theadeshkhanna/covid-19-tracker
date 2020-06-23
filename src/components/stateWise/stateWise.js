import React, {Component} from "react";
import Chart from "../chart/chart";
import {inject, observer} from "mobx-react";

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
                        "deaths": o.deaths
                    };
                    newData.push(newObj);
                });
            chart_data = <Chart data={newData} />
        } else {
            chart_data = <p>Loading!!</p>
        }
        return chart_data;
    }
}

export default StateWise;
