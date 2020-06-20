import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import Chart from "../chart/chart";

@inject("StateStore")
@observer
class Graph extends Component {

    handleClick = () => {
        this.props.StateStore.getData();
    };

    render() {
        return (
            <div>
                <h2>This is Graph Page</h2>
                <button onClick={this.handleClick}>click</button>
                <Chart />
            </div>
        );
    }
}

export default Graph;
