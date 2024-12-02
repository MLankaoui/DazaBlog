import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { scroll } from "motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutPage from "./components/AboutPage.jsx";
import Projects from "./components/Projects.jsx";
import NotFound from "./components/NotFound.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css"

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
