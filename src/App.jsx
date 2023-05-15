import React from 'react'
import './App.css'

// Components
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import URL from './Components/URL/URL'
import Stats from './Components/Stats/Stats'
import Boost from './Components/Boost/Boost'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Hero />
        <div className='main'>
          <URL />
          <Stats />
        </div>
        <Boost />
        <Footer />
      </div>
    </>
  )
}

export default App
