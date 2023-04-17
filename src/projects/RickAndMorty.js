import React from "react";
import rickMorty from "../images/rick-morty.png";


function RickAndMorty() {
    return (
        <a href="https://aliripoll.github.io/adalab-module3-final-project-rick-and-morty/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={rickMorty}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Rick and Morty</h3>
                <p>HTML - SCSS - REACT</p>
                <p>Personal project</p>
            </div>
         </article>
        </a>
    );
}

export { RickAndMorty };