import React,{useState} from "react"; 
import Buttongroup from './Buttongroup';
import Display from './Display';
import classes from './Calculator.module.css';

const Calculator =props=>{
    const [input,setInput]=useState(['']);
    
    const answerHandler=()=>{

        setInput(eval(input))
    }
    return<div>
    <p className={classes.calc}>Simple Calculator</p>
    <Display input={input}/>
    <Buttongroup onstar={()=>setInput(input + '*')}
    on9={()=>setInput(input + '9')}
    on8={()=>setInput(input + '8')}
    on7={()=>setInput(input + '7')}
    on6={()=>setInput(input + '6')}
    on5={()=>setInput(input + '5')}
    on4={()=>setInput(input + '4')}
    on3={()=>setInput(input + '3')}
    on2={()=>setInput(input + '2')}
    on1={()=>setInput(input + '1')}
    on0={()=>setInput(input + '0')}
    minus={()=>setInput(input + '-')}
    divide={()=>setInput(input + '/')}
    answer={answerHandler}
    plus={()=>{setInput(input + '+')}}
    onclear={()=>{setInput('')}}
/>
    </div>
}
export default Calculator;