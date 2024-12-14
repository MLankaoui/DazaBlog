import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import { scroll } from "motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import Projects from "./components/projects/Projects.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
