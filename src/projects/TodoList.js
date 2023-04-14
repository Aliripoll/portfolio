import React from "react";
import todolist from "../images/todo-list.png";


function TodoList() {
    return (
        <article className="article_card">
            <img className="img_card" 
            src={todolist}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>To-do List</h3>
                <p>REACT - HTML - CSS</p>
                <p>Personal project</p>
            </div>
        </article>
    );
}

export { TodoList };