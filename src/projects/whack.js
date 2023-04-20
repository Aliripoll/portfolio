import React from "react";
import whack from "../images/whack.png";


function WhackAmole() {
    return (
        <a href="https://aliripoll.github.io/whack-a-mole-retro-game/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={whack}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Whack-a-mole Game</h3>
                <p>HTML - CSS - JS</p>
                <p>Personal project</p>
            </div>
         </article>
        </a> 
    );
}

export { WhackAmole };