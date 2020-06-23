import React, {Component} from "react";
import { observer, inject } from "mobx-react";

@inject("DistrictStore")
@observer
class DistrictWise extends Component {

    componentDidMount() {
        this.props.DistrictStore.getDistrictData();
    }

    render() {
        return (
            <h2>This is districtWise page</h2>
        );
    }
}

export default DistrictWise;
