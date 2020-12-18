import React from "react";

import './time.css';

const Time = (props) => {
    const {time} = props;

    return (
        <div className="time">{time}</div>
    )
}

export default Time;