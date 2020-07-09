import React from "react";
import classes from "./Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <nav className={classes.Nav}>
                <ul className={classes.LeftNavi}>
                    <li><NavLink to="/" activeStyle={{
                        color:  "#0B6E4F"
                    }}>Home</NavLink></li>
                    <li><NavLink to="/KnowTheDeveloper" activeStyle={{
                        color:  "#0B6E4F"
                    }}>Know The Developer</NavLink></li>
                </ul>
                <ul className={classes.RightNavi}>
                    <li><NavLink to="/state-wise" activeStyle={{
                        color:  "#0B6E4F"
                    }}>State-Wise</NavLink></li>
                    <li><NavLink to="/district-wise" activeStyle={{
                        color:  "#0B6E4F"
                    }}>District-Wise</NavLink></li>
                    <li><NavLink to="/district-daily" activeStyle={{
                        color:  "#0B6E4F"
                    }}>District-Daily</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
