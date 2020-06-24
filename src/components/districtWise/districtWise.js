import React, {Component} from "react";
import { observer, inject } from "mobx-react";
import Chart from "../chart/chart";

@inject("DistrictStore")
@observer
class DistrictWise extends Component {

    state = {
        selectedState: null
    }

    componentDidMount() {
        this.props.DistrictStore.getDistrictData();
    }

    handleDropDownChange = (event) => {
        this.setState({
           selectedState: event.target.value
        });
    }

    render() {
        let chart_data = null;
        if (this.props.DistrictStore.data !== null) {
            chart_data = (
                <select onChange={this.handleDropDownChange}>
                    {
                        Object.keys(this.props.DistrictStore.data)
                              .filter(obj => obj !== "State Unassigned")
                              .map((o,i) => {
                                  return <option value = {o}>{o}</option>
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
