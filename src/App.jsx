import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbarr'
import Hero from './pages/Hero'
import About from './pages/About'

function App() {
  

  const [count, setCount] = useState(0)

  return (
   <>

<div className="body">

<Navbar/>
<Hero/>

<About/>


   </div>
   </>
  )
}

export default App
