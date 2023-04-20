import React from "react";
import "../styles/Projects.css";
import { TodoList } from "../projects/TodoList";
import { GoogleClon } from "../projects/GoogleClon";
import "../styles/ProjectCard.css"; 
import { BreakingBad } from "../projects/BreakingBad";
import { AwesomeWomen } from "../projects/Awesome";
import { RickAndMorty } from "../projects/RickAndMorty";
import { Adatravellers } from "../projects/Adatravellers";
import { WhackAmole } from "../projects/whack";

function Projects() {
    return (
        <>
        <p className="projects_title">Mis proyectos</p>
        <article className="section">
            <TodoList/>
            <GoogleClon/>
            <WhackAmole/>
            <BreakingBad/>
            <AwesomeWomen/>
            <RickAndMorty/>
            <Adatravellers/>
        </article>
        </>
    );
}

export { Projects };