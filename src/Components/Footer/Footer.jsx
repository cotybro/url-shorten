import React from 'react'
import './Footer.css'

// Images
import Logo from '../../assets/images/logo.svg'
import Facebook from '../../assets/images/icon-facebook.svg'
import Twitter from '../../assets/images/icon-twitter.svg'
import Pinterest from '../../assets/images/icon-pinterest.svg'
import Instagram from '../../assets/images/icon-instagram.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__logo'>
          <img src={Logo} alt='Shortly' className='footer__logo__img' />
        </div>
        <div className='footer__col'>
          <ul>
            <li className='footer__col__title'>Features</li>
            <li className='footer__col__item'>
              <a href='#'>Link Shortening</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Branded Links</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Analytics</a>
            </li>
          </ul>
        </div>
        <div className='footer__col'>
          <ul>
            <li className='footer__col__title'>Resources</li>
            <li className='footer__col__item'>
              <a href='#'>Blog</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Developers</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Support</a>
            </li>
          </ul>
        </div>
        <div className='footer__col'>
          <ul>
            <li className='footer__col__title'>Company</li>
            <li className='footer__col__item'>
              <a href='#'>About</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Our Team</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Careers</a>
            </li>
            <li className='footer__col__item'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer__social'>
          <img src={Facebook} alt='Facebook' className='footer__social__img' />
          <img src={Twitter} alt='Twitter' className='footer__social__img' />
          <img
            src={Pinterest}
            alt='Pinterest'
            className='footer__social__img'
          />
          <img
            src={Instagram}
            alt='Instagram'
            className='footer__social__img'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
