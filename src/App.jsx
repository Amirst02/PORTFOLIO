import { useEffect } from 'react'

import './App.css'
import Navbar from './pages/Navbarr'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Services from './pages/Services'
import Journey from './pages/Journey'
import Footer from './pages/Footer'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.hero, .b20, .projects-section, .services-section, .journey-section')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('portfolio-reveal--visible')),
      { threshold: 0.12 },
    )

    sections.forEach((section) => {
      section.classList.add('portfolio-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
   <>

  <div className="top-glow-section">

<Navbar/>
<Hero/>

<About/>
<Skills/>
<Project/>
<Services/>
<Journey/>
<Footer/>

   </div>
   </>
  )
}

export default App
