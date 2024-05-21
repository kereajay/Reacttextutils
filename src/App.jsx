import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'


function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   {/* <Home/> */}
   {/* <About/> */}
   <Contact/>

   </>
  )
}

export default App
