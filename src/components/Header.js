import React from "react";
import "../styles/Header.css";
import {Link, Route, Routes} from 'react-router-dom';


function Header() {
    return (
        <nav className="header_nav">
        <div className="header_name">Alicia Ripoll.</div>
        
    
        <ul className="header_list">
          <li>
            <Link to='/AboutMe' className="link-route">Sobre mí</Link>
          </li>
          <li>
            <Link to='/Projects' className="link-route">Proyectos</Link>
          </li>
          <li>
            <Link to='/Contact' className="link-route">Contacto</Link>
          </li>
        </ul>    
        </nav>       
        
    );
}

export { Header };