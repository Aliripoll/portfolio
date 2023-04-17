import React from "react";
import awesome from "../images/awesome-women.png";


function AwesomeWomen() {
    return (
       <a href="https://aliripoll.github.io/adalab-project-team-6-awesome-women-cards/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={awesome}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Awesome Women Cards</h3>
                <p>HTML - SCSS - JS</p>
                <p>Team project</p>
            </div>
         </article>
        </a> 
    );
}

export { AwesomeWomen };