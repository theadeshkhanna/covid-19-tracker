import React from "react";
import classes from "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.Navi}>
            <ul className={classes.LeftNavi}>
                <li><Link to="/" className={classes.Tag}>Home</Link></li>
                <li><Link to="/" className={classes.Tag}>Know The Developer</Link></li>
            </ul>
            <ul className={classes.RightNavi}>
                <li><Link to="/state-wise" className={classes.Tag}>State-Wise</Link></li>
                <li><Link to="/district-wise" className={classes.Tag}>District-wise</Link></li>
                <li><Link to="/district-daily" className={classes.Tag}>District-Daily</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
