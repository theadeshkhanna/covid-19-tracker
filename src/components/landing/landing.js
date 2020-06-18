import React, {Component} from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <button><Link to="/maps">Map View</Link></button>
                <button><Link to="/graph">Graph View</Link></button>
            </div>
        );
    }
}

export default Landing;
