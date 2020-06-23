import React, {Component} from "react";
import { observer, inject } from "mobx-react";
import Chart from "../chart/chart";
import {toJS} from "mobx";
import Input from "../UI/Input/Input";

@inject("DistrictStore")
@observer
class DistrictWise extends Component {

    componentDidMount() {
        this.props.DistrictStore.getDistrictData();
    }

    render() {
        let chart_data = null;
        if (this.props.DistrictStore.data !== null) {
            chart_data = (
                <select>
                    {
                        Object.keys(this.props.DistrictStore.data)
                              .filter(obj => obj !== "State Unassigned")
                              .map((o,i) => {
                                  <Input val={o} />
                              })
                    }
                </select>
            );
        } else {
            chart_data = <p>Loading!!</p>
        }
        return chart_data;
    }
}

export default DistrictWise;
