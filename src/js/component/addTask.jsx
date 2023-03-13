import React, { useState } from "react";
import { AiFillFileAdd } from 'react-icons/ai';


const AddTask=({addToDo})=>{
     
    const [toDo,setToDo]=useState('');

    const add=(event)=>{
        if (event.keyCode===13 && (event.target.value)!=""){
            addToDo(event.target.value);
            setToDo("");
        }
    }

    return(
        <div className="inputs">
           <input type="text" onChange={(e) =>{ setToDo(e.target.value)}} value={toDo} onKeyDown={add} placeholder="Write task"></input>
        </div>
    )
};

export { AddTask }