import classes from "./Spinner.css";
import React from "react";

const Spinner = () => {
    return (
        <div className={classes.Spinner}>
            <div className={classes.Dot1}></div>
            <div className={classes.Dot2}></div>
        </div>
    );
}

export default Spinner;
