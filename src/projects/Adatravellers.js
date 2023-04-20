import React from "react";
import adatravellers from "../images/adatravellers.png";


function Adatravellers() {
    return (
        <a href="https://aliripoll.github.io/adalab-project-team-4-adatravellers/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={adatravellers}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Adatravellers</h3>
                <p>HTML - SCSS</p>
                <p>Team project</p>
            </div>
         </article>
        </a> 
    );
}

export { Adatravellers };