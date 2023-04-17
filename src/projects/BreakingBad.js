import React from "react";
import breaking from "../images/breaking-bad.png";


function BreakingBad() {
    return (
        <a href="https://aliripoll.github.io/adalab-module2-final-project-breaking-bad/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={breaking}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Breaking Bad</h3>
                <p>HTML - SCSS - JS</p>
                <p>Personal project</p>
            </div>
         </article>
        </a>
    );
}

export { BreakingBad };