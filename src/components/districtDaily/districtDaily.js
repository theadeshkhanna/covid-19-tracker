import React, { Component } from "react"
import {inject, observer} from "mobx-react";
import Charts from "../charts/charts";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./districtDaily.css";

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
            selectedState: event.target.value,
            selectedDistrict: null
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
                        <select onChange={this.handleDistrictDropDownChange} className={classes.DistrictContent}>
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
                            "deaths": o.deceased,
                            "recovered": o.recovered
                        };
                        data.push(newObj);
                    });
                    chart_data = <Charts data={data} />
                } else {
                    chart_data = <p className={classes.Para}>Please select a district to begin with</p>
                }
            }
             else {
                chart_data = <p className={classes.Para}>Please select a state to begin with</p>
            }
            page_data = (
                <div>
                    <select onChange={this.handleStateDropDownChange} className={classes.StateContent}>
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
            page_data = <Spinner />
        }
        return page_data;
    }
}

export default DistrictDaily;
