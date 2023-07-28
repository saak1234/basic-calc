import React from "react";
import classes from './Display.module.css'
const Display=props=>{

  
    return <div >
    <input  onKeyDown={(e) => {
          if (e.keyCode === 13) {
            props.answerHandler();
          }
        }} className={classes.adjust}  value={props.input} onChange={props.inputHandler}/>
    </div>

}
export default Display;