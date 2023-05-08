import React from "react";
import vangapp from "../images/vangApp.png";



function VangApp() {
    return (
        <a href="https://github.com/Aliripoll/van-gApp" target="_blank" className="card_link">
         <article className="article_card">
            <img className="img_card" 
            src={vangapp}
            alt="to-do list App"/>
            <div className="info_card">
                <h3>En construcción...🚧</h3>
            
            </div>
         </article>
         </a>
    );
}

export { VangApp };