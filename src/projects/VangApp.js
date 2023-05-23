import React from "react";
import vangapp from "../images/vangApp.png";



function VangApp() {
    return (
        <a href="https://aliripoll.github.io/van-gApp/" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={vangapp}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>Vang-App</h3>
                <p>HTML - CSS - REACT</p>
                <p>Personal project</p>
            
            </div>
         </article>
         </a>
    );
}

export { VangApp };