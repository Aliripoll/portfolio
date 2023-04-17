import React from "react";
import "../styles/AboutMe.css";
import alicia from "../images/alicia.jpg";
import cv from "../documents/cv.pdf";

function AboutMe() {
    return (
     <>
     <section className="aboutMe_section">
     <img 
          className="portrait_img"
          src={alicia}
          alt="mi foto" />
      <div className="aboutMe_info">
        <p className="aboutMe_title">Hola, soy Alicia,</p>
           
                <p className="aboutMe_text">después de un tiempo sin encontrar mi lugar en el ámbito laboral, mi interés por la tecnología y mi entusiasmo por aprender cosas nuevas me llevó a cursar el bootcamp de Desarrollo Web en Adalab. <br></br>
                A lo largo de mi trayectoria en sectores diversos he tenido la oportunidad de trabajar con diferentes personas, y lo que más destaco de mi, sin duda, es la empatía y amabilidad para trabajar en equipo. Además de ello, me considero una persona organizada, detallista y responsable.
                <br></br>
                <br></br>
                
                Soy consciente de todo lo que me queda por aprender en este sector pero tengo muchas ganas de afrontar esta nueva etapa y lograr mi objetivo: trabajar como desarrolladora Front-end.</p>

                
                <a href={cv} className="aboutMe_cv">Descarga mi curriculum</a>
        </div>
            
    </section>
     </>
    );
}

export { AboutMe };