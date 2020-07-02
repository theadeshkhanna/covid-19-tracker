import React from "react";
import classes from "./TotalData.css";

const TotalData = (props) => {
    return (
        <div>
            <ul className={classes.List}>
                <li className={classes.Confirmed}><p>confirmed</p> <span>{props.confirmed}</span></li>
                <li className={classes.Active}><p>active</p> <span>{props.active}</span></li>
                <li className={classes.Recovered}><p>recovered</p> <span>{props.recovered}</span></li>
                <li className={classes.Death}><p>deaths</p> <span>{props.deaths}</span></li>
            </ul>
        </div>
    );
}

export default TotalData;
