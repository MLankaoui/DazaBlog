import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { scroll } from "motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutPage from "./components/AboutPage.jsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/about" element={<AboutPage />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
