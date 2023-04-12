import React from "react";
import teléfono from "../images/teléfono.jpeg";
import "../styles/Contact.css";



function Contact() {
    return (
        <div className="contact_div">
            <p className="contact_title">Contacta conmigo</p>
            <img 
            className="contact_img"
            src={teléfono}
            alt="imagen de contacto" />
        </div>
    );
}

export { Contact };