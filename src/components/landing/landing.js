import React, {Component} from "react";
import { Link } from "react-router-dom";
import classes from "./landing.css";

class Landing extends Component {
    render() {
        return (
            <div className={classes.Landing}>
                <h2>Welcome to Worlds Largest Corona Database</h2>
                <Link to="/maps" className={classes.Button}><button>Map View</button></Link>
                <Link to="/graph" className={classes.Button}><button>Graph View</button></Link>
            </div>
        );
    }
}

export default Landing;
