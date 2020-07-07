import React from "react";
import classes from "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <nav className={classes.Nav}>
                <ul className={classes.LeftNavi}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/KnowTheDeveloper">Know The Developer</Link></li>
                </ul>
                <ul className={classes.RightNavi}>
                    <li><Link to="/state-wise">State-Wise</Link></li>
                    <li><Link to="/district-wise">District-Wise</Link></li>
                    <li><Link to="/district-daily">District-Daily</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
