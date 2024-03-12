import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    
    // Get filtered list based on selected view
    let filteredArr
    
    if (props.todoListView === "all") {
        filteredArr = props.todoItemsArr
    } else if (props.todoListView === "active"){
        filteredArr = props.todoItemsArr.filter(item => item.isCompleted === false)
    } else {
        filteredArr = props.todoItemsArr.filter(item => item.isCompleted === true)
    }
    
    // Get todo item Markup
    const todoItemsArrMarkup = filteredArr.map(item => {
        return (
            <TodoItem 
                item={item}
                todoItemsArr={props.todoItemsArr}
                setTodoItemsArr={props.setTodoItemsArr}
            />
        )
    })

    function clearCompletedTodos() {
        const filteredArr = props.todoItemsArr.filter(item => !item.isCompleted)
        props.setTodoItemsArr(filteredArr)
    }

    // Get active todo count
    const activeTodoCount = props.todoItemsArr.filter(item => !item.isCompleted).length
    
    return (
        <section className="todo-list-wr">
     
                {todoItemsArrMarkup}

                <div className="todo-list-footer-wr">
                    <p className="todo-count">{activeTodoCount} items left</p>
                    <button id="clear-completed-btn" onClick={clearCompletedTodos}>Clear Completed</button>
                </div>
            </section>
    )
}