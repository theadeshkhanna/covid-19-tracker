import React from "react";
import classes from "./List.css";

const List = () => {
    return (
        <div className={classes.ListContainer}>
            <ul className={classes.List}>
                <li>Stay Home</li>
                <li>Maintain Social Distance</li>
                <li>Wear Mask</li>
                <li>Be Positive</li>
                <li>Use Sanitizer</li>
            </ul>
        </div>
    );
}

export default List;
