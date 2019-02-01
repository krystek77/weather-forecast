import React from 'react';
import './Button.css';

const button = props=>{

    const btnClass = ["Button",props.btnClass].join(' ')
    return (

        <button className={btnClass}>{props.children}</button>
    )
}

export default button