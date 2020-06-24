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
        let page_data = null;
        let chart_data = null;
        if (this.props.DistrictStore.data !== null) {
            if (this.state.selectedState !== null) {
                 const state_name = Object.keys(this.props.DistrictStore.data)
                    .filter(obj => obj === this.state.selectedState);

            } else {
                chart_data = <p>Please select a state to begin with</p>
            }
            page_data = (
                <div>
                    <select onChange={this.handleDropDownChange}>
                        {
                            Object.keys(this.props.DistrictStore.data)
                                .filter(obj => obj !== "State Unassigned")
                                .map((o,i) => {
                                    return <option value = {o}>{o}</option>
                                })
                        }
                    </select>
                    {chart_data}
                </div>
            );
        } else {
            page_data = <p>Loading!!</p>
        }
        return page_data;
    }
}

export default DistrictWise;
