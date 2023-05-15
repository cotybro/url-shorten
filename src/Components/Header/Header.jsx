import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
function Header() {
  const [menu, setMenu] = useState(false)
  console.log(menu)
  return (
    <div className='header__container'>
      <div className='header'>
        <div className='header__left'>
          <img src={logo} alt='Shortly' />
          <ul>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Resources</a>
            </li>
          </ul>
        </div>
        <div className='header__right'>
          <button className='btn btn__login'>Login</button>
          <button className='btn btn__accent'>Sign Up</button>
        </div>
        <button
          className='header__burger'
          onClick={() => setMenu(!menu)}
        ></button>
      </div>
      {menu && (
        <div className='mobile__menu'>
          <ul>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Resources</a>
            </li>
          </ul>
          <div className='mobile__separate'></div>
          <div className='mobile__menu__buttons'>
            <button className='btn__mobile btn__mobile__login'>Login</button>
            <button className='btn__mobile btn__mobile__accent'>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
