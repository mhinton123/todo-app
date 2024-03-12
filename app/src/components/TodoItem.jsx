import React from "react";
import CheckIcon from '../images/icon-check.svg'
import CrossIcon from '../images/icon-cross.svg'

export default function TodoItem(props) {
    
     // Check if item is checked or not
     let checkboxClassname = props.item.isCompleted ? "checkbox checked" : "checkbox"
     let todoDescClassname = props.item.isCompleted ? "todo-desc completed" : "todo-desc"
     
     // Check todo as completed
     function markChecked(id){
        
        // Get id of clicked btn and check it is not already checked complete
        if(!props.todoItemsArr.find(item => item.id === id).isCompleted) {
            
            //toggle isCompleted prop
            props.setTodoItemsArr(prev => {
                return prev.map(item => {
                  if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted };
                  }
                  return item;
                });
              });
        }
     }

     //Remove todo item from todoItemsArr
     function removeTodo(id) {
        const filteredArr = props.todoItemsArr.filter(item => item.id !== id)
        props.setTodoItemsArr(filteredArr)
     }
    
    return (
        <div className="todo-item-wr" >
            <div className="left-col">
                <button className="btn-wr" onClick={() => markChecked(props.item.id)}>
                    <div className={checkboxClassname}>
                        <img src={CheckIcon} alt="check icon" />
                    </div>
                </button>
                <p className={todoDescClassname}>{props.item.name}</p>
            </div>
            <div className="right-col">
                <button className="btn-wr" onClick={() => removeTodo(props.item.id)}>
                    <img src={CrossIcon} alt="cross icon" className="cross-icon" />
                </button>
            </div>
        </div>
    )
}