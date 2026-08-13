import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Certification from './components/Certification'
import Languages from './components/Languages'
import CareerGoal from './components/CareerGoal'
import CurrentlyLearning from './components/CurrentlyLearning'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpaceBackgroundEffects from './components/SpaceDecorations'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="bg-space-dark min-h-screen relative overflow-hidden">
      <SpaceBackgroundEffects />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Certification />
          <Languages />
          <CareerGoal />
          <CurrentlyLearning />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
