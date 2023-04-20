import React from "react";
import anonymous from "../images/anonymous.png";


function AnonymousProxy() {
    return (
        <a href="https://aliripoll.github.io/adalab-module1-final-project-anonymous-proxy/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={anonymous}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Anonymous Proxy</h3>
                <p>HTML - SCSS</p>
                <p>Personal project</p>
            </div>
         </article>
        </a> 
    );
}

export { AnonymousProxy };