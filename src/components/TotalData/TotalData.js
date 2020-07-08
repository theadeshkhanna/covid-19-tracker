import React from "react";
import classes from "./TotalData.css";
import CountUp from 'react-countup';

const TotalData = (props) => {
    return (
        <div className={classes.Head}>
            <div className={classes.Individual}>
                <p className={classes.Confirmed}>confirmed</p>
                <CountUp className={classes.ConfirmedData}
                         start={0}
                         separator=","
                         end={props.confirmed}/>
            </div>
            <div className={classes.Individual}>
                <p className={classes.Active}>active</p>
                <CountUp className={classes.ActiveData}
                         start={0}
                         separator=","
                         end={props.active} />
            </div>
            <div className={classes.Individual}>
                <p className={classes.Recovered}>recovered</p>
                <CountUp className={classes.RecoveredData}
                         start={0}
                         separator=","
                         end={props.recovered} />
            </div>
            <div className={classes.Individual}>
                <p className={classes.Death}>deaths</p>
                <CountUp className={classes.DeathData}
                         start={0}
                         separator=","
                         end={props.deaths} />
            </div>
        </div>
    );
}

export default TotalData;
