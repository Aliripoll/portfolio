import React from "react";
import todolist from "../images/todo-list.png";



function TodoList() {
    return (
        <a href="https://aliripoll.github.io/TODO-list/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={todolist}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>To-do List</h3>
                <p>HTML - CSS - REACT</p>
                <p>Personal project</p>
            </div>
         </article>
         </a>
    );
}

export { TodoList };