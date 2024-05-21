import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [theme,setTheme]=useState("light")
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")

    }
    else{
      document.documentElement.classList.remove("dark")

    }
  },[theme])
  const handletheme=()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
        <nav className='flex justify-between w-[98%] m-auto items-center'>
            <ul type="none" className='flex gap-10 text-lg p-8'>
                <li className='text-2xl text-sky-300 font-semibold'>TextUtils</li>
                <li className=''><Link to="/Home">Home</Link></li>
                <li className=''><Link to="/About">About</Link></li>
                <li className=''><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className='h-8 w-8 rounded-full bg-black items-center' onClick={handletheme}><button className='px-1 py-1'>🔆</button></div>
        </nav>
      
    </div>
  )
}

export default Navbar
