import React from "react";

const TotalData = (props) => {
    return (
        <div>
            <p>confirmed: {props.confirmed}</p>
            <p>active: {props.active}</p>
            <p>recovered: {props.recovered}</p>
            <p>deaths: {props.deaths}</p>
        </div>
    );
}

export default TotalData;
