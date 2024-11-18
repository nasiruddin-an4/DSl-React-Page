import React from 'react'
import Navbar from './components/Navbar'
import HeaderTop from './components/HeaderTop'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  )
}

export default App