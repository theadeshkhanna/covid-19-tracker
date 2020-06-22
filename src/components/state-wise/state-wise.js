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
        if (this.props.StateStore.loading === true) {
            chart_data = <p>Loading!!</p>
        } else {
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
        }
        return chart_data;
    }
}

export default StateWise;
