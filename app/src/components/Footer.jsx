import React from "react";

export default function Footer(props) {
    
    function changeTodoListView(event, view) {
        props.setTodoListView(view)

        // Remove the active class from existing button
        const activeElements = document.getElementById('list-view-btns-wr').querySelectorAll('.active');
        activeElements.forEach(element => {
            element.classList.remove('active');
        });

        // Add active class to clicked btn
        event.target.classList.add('active')
    }   
    
    return (
        <section id="list-view-btns-wr">
            <button className="list-view-btn active" onClick={(event) => changeTodoListView(event, "all")}>All</button>
            <button className="list-view-btn" onClick={(event) => changeTodoListView(event, "active")}>Active</button>
            <button className="list-view-btn" onClick={(event) => changeTodoListView(event, "completed")}>Completed</button>
        </section>
    )
}