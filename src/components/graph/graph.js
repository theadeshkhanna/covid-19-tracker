import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import Chart from "../chart/chart";
import {toJS} from "mobx";

@inject("StateStore")
@observer
class Graph extends Component {

    state = {
      manipulatedData: null
    };

    componentDidMount() {
        this.props.StateStore.getData();
    }

    handleClick = () => {
        let newData = [];
        this.props.StateStore.data.filter(obj => (obj.state !== "Total"))
            .filter(obj => (obj.state !== "State Unassigned"))
            .map((o, i) => {
            let newObj = {
                "name": o.state,
                "active": o.active,
                "confirmed": o.confirmed,
                "deaths": o.deaths
            };
            newData.push(newObj);
        });

        this.setState({
            manipulatedData: newData
        });
    };

    render() {

        let thing = null;

        if (this.state.manipulatedData === null) {
            thing = (
                <p>Loading!!</p>
            );
        } else {
            thing = (
                <Chart data={this.state.manipulatedData} />
            )
        }

        return (
            <div>
                <h2>This is Graph Page</h2>
                <button onClick={this.handleClick}>state-wise</button>
                {thing}
            </div>
        );
    }
}

export default Graph;
