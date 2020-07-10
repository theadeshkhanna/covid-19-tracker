import React from "react";
import classes from "./List.css";

const List = () => {
    return (
        <ul className={classes.List}>
            <li>Stay Home</li>
            <li>Maintain Social Distance</li>
            <li>Wear Mask</li>
            <li>Be Positive</li>
            <li>Use Sanitizer</li>
        </ul>
    );
}

export default List;
