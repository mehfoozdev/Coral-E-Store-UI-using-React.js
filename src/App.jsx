import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/home/Home'
import Footer from './Components/Footer'



function App() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default App
