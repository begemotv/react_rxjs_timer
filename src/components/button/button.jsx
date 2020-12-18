import React from "react";

import './button.css';

const Button = (props) => {
    const {text, onClick} = props;

    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
}

export default Button;
