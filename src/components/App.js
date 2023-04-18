import React from "react";
import { Header } from "./Header";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from './Contact';
import {Link, Route, Routes} from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<AboutMe />}></Route>
      <Route path="/AboutMe" element={<AboutMe />}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Contact" element={<Contact />}></Route> 
    </Routes>

    </>
  );
}

export default App;
