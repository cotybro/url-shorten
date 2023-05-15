import React from 'react'
import './Stats.css'

// Images
import brandRecognition from '../../assets/images/icon-brand-recognition.svg'
import detailedRecords from '../../assets/images/icon-detailed-records.svg'
import fullyCustomizable from '../../assets/images/icon-fully-customizable.svg'

function Stats() {
  return (
    <div className='stats__wrapper'>
      <div className='stats__text'>
        <h2 className='stats__title'>Advanced Statistics</h2>
        <p className='stats__text'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className='stats__cards'>
        <div className='stats__card__line'></div>
        <div className='stats__card card__brand'>
          <div className='stats__card__icon'>
            <div className='stats__img__wrapper'>
              <img src={brandRecognition} alt='Brand Recognition' />
            </div>
            <div className='stats__info__container'>
              <h3 className='stats__card__title'>Brand Recognition</h3>
              <p className='stats__card__text'>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>
        <div className='stats__card card__detailed'>
          <div className='stats__card__icon'>
            <div className='stats__img__wrapper'>
              <img src={detailedRecords} alt='Detailed Records' />
            </div>
            <div className='stats__info__container'>
              <h3 className='stats__card__title'>Detailed Records</h3>
              <p className='stats__card__text'>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div className='stats__card card__customize'>
          <div className='stats__card__icon'>
            <div className='stats__img__wrapper'>
              <img src={fullyCustomizable} alt='Fully Customizable' />
            </div>
            <div className='stats__info__container'>
              <h3 className='stats__card__title'>Fully Customizable</h3>
              <p className='stats__card__text'>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
