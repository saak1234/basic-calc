import React from "react";
import classes from './Display.module.css'
const Display=props=>{
   
    return <div className={classes.adjust} >
    <p className={props.color}>{props.input}</p>
    </div>

}
export default Display;