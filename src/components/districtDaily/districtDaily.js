import React, { Component } from "react"
import {inject, observer} from "mobx-react";
import Chart from "../chart/chart";

@inject("DistrictDailyStore")
@observer
class DistrictDaily extends Component {

    state = {
        selectedDistrict: null,
        selectedState: null
    }

    componentDidMount() {
        this.props.DistrictDailyStore.getDistrictDailyData();
    }

    handleStateDropDownChange = (event) => {
        this.setState({
            selectedState: event.target.value
        });
    }

    handleDistrictDropDownChange = (event) => {
        this.setState({
            selectedDistrict: event.target.value
        });
    }

    render() {
        let page_data = null;
        let chart_data = null;
        let district_dropdown = null;
        if (this.props.DistrictDailyStore.data !== null) {
            if (this.state.selectedState !== null) {
                    district_dropdown = (
                        <select onChange={this.handleDistrictDropDownChange}>
                            {
                                Object.keys(this.props.DistrictDailyStore.data.districtsDaily[this.state.selectedState])
                                    .filter(obj => obj !== "State Unassigned")
                                    .map((o,i) => {
                                        return <option value = {o}>{o}</option>
                                    })
                            }
                        </select>
                    );
                if (this.state.selectedDistrict !== null) {
                    const data = [];
                    const district = this.props.DistrictDailyStore.data.districtsDaily[this.state.selectedState][this.state.selectedDistrict];
                    // eslint-disable-next-line array-callback-return
                    district.map((o,i) => {
                        let newObj = {
                            "name": o.date,
                            "active": o.active,
                            "confirmed": o.confirmed,
                            "deaths": o.deceased
                        };
                        data.push(newObj);
                    });
                    chart_data = <Chart data={data} />
                } else {
                    chart_data = <p>Please select a district to begin with</p>
                }
            }
             else {
                chart_data = <p>Please select a state to begin with</p>
            }
            page_data = (
                <div>
                    <select onChange={this.handleStateDropDownChange}>
                        {
                            Object.keys(this.props.DistrictDailyStore.data.districtsDaily)
                                .filter(obj => obj !== "State Unassigned")
                                .map((o,i) => {
                                    return <option value = {o}>{o}</option>
                                })
                        }
                    </select>
                    <br />
                    <br />
                    {district_dropdown}
                    {chart_data}
                </div>
            );
        } else {
            page_data = <p>Loading!!</p>
        }
        return page_data;
    }
}

export default DistrictDaily;
