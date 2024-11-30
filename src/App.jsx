import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { scroll } from "motion"

function App() {

  return (
    <>
        <Header />
        <Hero />
    </>
  )
}

export default App
