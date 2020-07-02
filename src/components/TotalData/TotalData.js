import React from "react";
import classes from "./TotalData.css";

const TotalData = (props) => {
    return (
        <div>
            <ul className={classes.List}>
                <li><p>confirmed</p> {props.confirmed}</li>
                <li><p>active</p> {props.active}</li>
                <li><p>recovered</p> {props.recovered}</li>
                <li><p>deaths</p> {props.deaths}</li>
            </ul>
        </div>
    );
}

export default TotalData;
