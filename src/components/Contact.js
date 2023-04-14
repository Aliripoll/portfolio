import React from "react";
import teléfono from "../images/teléfono.jpeg";
import "../styles/Contact.css";



function Contact() {
    return (
        <div className="contact">
         <div className="contact_firstDiv">
            
            <img 
            className="contact_img"
            src={teléfono}
            alt="imagen de contacto" />
         </div>
         <div className="contact_links">
         <p className="contact_title">Estoy en...</p>
            <a href="https://github.com/Aliripoll" target="_blank" className="link">Github<i class="fa-brands fa-github-alt"></i></a>
            <a href="https://www.linkedin.com/in/alicia-ripoll-ortega/" target="_blank" className="link">Linkedin<i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com/aliripoll" target="_blank" className="link">Twitter<i class="fa-brands fa-twitter"></i></a>
            <a href="mailto:aripollortega@gmail.com" target="_blank" className="link">Email<i class="fa-solid fa-envelope"></i></a>
         </div>
        </div>
    );
}

export { Contact };