import React from 'react';
import './Button.css';

const button = props=>(
    <button className={props.btnClass}>{props.children}</button>
)

export default button