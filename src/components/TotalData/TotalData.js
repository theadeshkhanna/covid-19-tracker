import React from "react";
import classes from "./TotalData.css";
import CountUp from 'react-countup';

const TotalData = (props) => {
    return (
        <div className={classes.Head}>
            <ul className={classes.List}>
                <li className={classes.Confirmed}>
                    <p>confirmed</p>
                    <CountUp className={classes.ConfirmedData}
                             start={0}
                             separator=","
                             end={props.confirmed}/>
                </li>
                <li className={classes.Active}>
                    <p>active</p>
                    <CountUp className={classes.ActiveData}
                             start={0}
                             separator=","
                             end={props.active} />
                </li>
                <li className={classes.Recovered}>
                    <p>recovered</p>
                    <CountUp className={classes.RecoveredData}
                             start={0}
                             separator=","
                             end={props.recovered} />
                </li>
                <li className={classes.Death}>
                    <p>deaths</p>
                    <CountUp className={classes.DeathData}
                             start={0}
                             separator=","
                             end={props.deaths} />
                </li>
            </ul>
        </div>
    );
}

export default TotalData;
