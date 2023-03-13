import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import trash2 from 'react-useanimations/lib/trash2';
import radioButton from 'react-useanimations/lib/radioButton';

const PrintList = ({ todo, indice, deleteToDo, doneToDo }) => {
    
    
    return (
        
        <div className={todo.done ? "taskContainer green" : "taskContainer"}>
            <UseAnimations
                onClick={() => doneToDo(indice)}
                className="seleccionable"
                animation={radioButton}
                reverse={todo.done}
                size={56}>
            </UseAnimations>
            <p>{todo.label}</p>
            <UseAnimations
                onClick={() => deleteToDo(indice)}
                className="seleccionable"
                animation={trash2}
                size={56}>
            </UseAnimations>
        </div>        
    )
}

export { PrintList }