import React from "react";
import "../styles/Projects.css";
import { TodoList } from "../projects/TodoList";
import { GoogleClon } from "../projects/GoogleClon";
import "../styles/ProjectCard.css"; 

function Projects() {
    return (
        <>
        <p className="projects_title">Mis proyectos</p>
        <article className="section">
            <TodoList/>
            <GoogleClon/>
        </article>
        </>
    );
}

export { Projects };