import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Donations from './components/Donations'
import DonationForm from './components/DonationForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Donations />
      <About />
      <DonationForm />
      <Footer/>
    </>
  )
}

export default App
