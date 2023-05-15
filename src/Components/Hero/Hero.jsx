import React from 'react'
import './Hero.css'

import heroImg from '../../assets/images/illustration-working.svg'

function Hero() {
  return (
    <div className='hero__container'>
      <div className='hero'>
        <div className='hero__col__left'>
          <h1 className='hero__title'>More than just shorter links</h1>
          <p className='hero__text'>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className='btn btn__accent'>Get Started</button>
        </div>
        <div className='hero__col__right'>
          <img src={heroImg} alt='Work hard' />
        </div>
      </div>
    </div>
  )
}

export default Hero
