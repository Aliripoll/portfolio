import React from "react";
import google from "../images/google-clon.png";


function GoogleClon() {
    return (
       <a href="https://aliripoll.github.io/Google-homepage-clon/" target="_blank" className="card_link"> 
         <article className="article_card">
            <img className="img_card" 
            src={google}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Google Clon</h3>
                <p>HTML - CSS</p>
                <p>Personal project</p>
            </div>
         </article>
        </a>
    );
}

export { GoogleClon };