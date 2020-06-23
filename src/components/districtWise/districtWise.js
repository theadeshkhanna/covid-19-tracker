import React, {Component} from "react";
import { observer, inject } from "mobx-react";

@inject("DistrictStore")
@observer
class DistrictWise extends Component {
    render() {
        return (
            <div>
                <select name="states">

                </select>
            </div>
        );
    }
}

export default DistrictWise;
