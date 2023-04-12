import React from "react";
import "../styles/Header.css";
import {Link, Route, Routes} from 'react-router-dom';

function Header() {
    return (
        <nav className="header_nav">
        <div className="header_name">Alicia Ripoll.</div>
        <ul className="header_list">
          <li>
            <Link to='/AboutMe'>About Me</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>    
        </nav>       
        
    );
}

export { Header };