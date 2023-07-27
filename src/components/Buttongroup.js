import React from "react";
import Btn from './Btn';
import classes from './Buttongroup.module.css';
const Buttongroup=(props)=>{
    
    return<div className={classes.position}>
    <div><Btn onClick={props.on7}>7</Btn><Btn onClick={props.on8}>8</Btn><Btn onClick={props.on9}>9</Btn><Btn onClick={props.divide}>/</Btn></div>
    <div><Btn onClick={props.on4}>4</Btn><Btn onClick={props.on5}>5</Btn><Btn onClick={props.on6}>6</Btn><Btn onClick={props.minus}>-</Btn></div>
    <div><Btn onClick={props.on1}>1</Btn><Btn onClick={props.on2}>2</Btn><Btn onClick={props.on3}>3</Btn><Btn onClick={props.plus}>+</Btn></div>
    <div><Btn onClick={props.onstar}>*</Btn><Btn onClick={props.on0}>0</Btn><Btn onClick={props.onclear}>clear</Btn><Btn onClick={props.answer}>=</Btn></div>
    </div>

}
export default Buttongroup;