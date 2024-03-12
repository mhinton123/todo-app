import React from "react";

export default function TodoInput(props) {
    
    function addTodo() {

        // Get next id for new todo
        const nextId = props.todoItemsArr.length + 1
        const todoName = document.getElementById('todo-input').value
        
        // Check input is not empty
        if (todoName) {
            
            // Add todo to todoItemsArr
            props.setTodoItemsArr(prev => {
                return [
                    {
                        id: nextId,
                        name: todoName,
                        isCompleted: false
                    },
                    ...prev
                ]
            })

            // Reset Input field
            document.getElementById('todo-input').value = ""
        }
    }

    return (
        <section className="todo-input-wr">
            <button className="btn-wr" onClick={addTodo}>
                <div className="checkbox unchecked"></div>
            </button>
            <input type="text" id="todo-input" placeholder="Create a new todo…" />
        </section>
    )
}