import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet,RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Mains=()=>{
  return(
    <>

    <Navbar/>
    <Outlet/>

    </>
  )
}
const routera=createBrowserRouter([
  {
    path:'/',
    element:<Mains/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routera}/>)