import React, {Component} from "react";
import { observer, inject } from "mobx-react";
import Charts from "../charts/charts";
import {toJS} from "mobx";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./districtWise.css";

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
                const data = [];
                 const state_name = Object.keys(this.props.DistrictStore.data).filter(obj => obj === this.state.selectedState);
                 const pure_state = Object.keys(this.props.DistrictStore.data[state_name].districtData).filter(obj => obj !== "Other State");
                // eslint-disable-next-line array-callback-return
                     pure_state.map((o,i) => {
                         const district = toJS(this.props.DistrictStore.data[state_name].districtData[o]);
                         let newObj = {
                             "name": o,
                             "active": district.active,
                             "confirmed": district.confirmed,
                             "deaths": district.deceased,
                             "recovered": district.recovered
                         };
                         data.push(newObj);
                     });
                chart_data = <Charts data={data} />
            } else {
                chart_data = <p className={classes.Para}>Please select a state to begin with</p>
            }
            page_data = (
                <div>
                    <select onChange={this.handleDropDownChange} className={classes.Content}>
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
            page_data = <Spinner />
        }
        return page_data;
    }
}

export default DistrictWise;
