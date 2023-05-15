import React, { useState, useEffect } from 'react'
import './URL.css'

function URL() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState([])
  const [error, setError] = useState(false)
  const [copyIndex, setCopyIndex] = useState(null)

  useEffect(() => {
    const savedShortUrl = JSON.parse(localStorage.getItem('shortUrl'))
    if (savedShortUrl) {
      setShortUrl(savedShortUrl)
    }
  }, [])

  const handleUrlChange = (e) => {
    const newUrl = e.target.value
    setUrl(newUrl)
  }

  const handleShortenClick = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((data) => {
        const newShortUrl = {
          url: url,
          shortUrl: data.result.short_link,
        }
        setShortUrl((prevState) => [...prevState, newShortUrl])
        localStorage.setItem(
          'shortUrl',
          JSON.stringify([...shortUrl, newShortUrl])
        )
        setUrl('')
        setError(false)
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
  }

  return (
    <div className='url__wrapper'>
      <div className='url__container'>
        <div className='input__container'>
          <input
            type='text'
            name='url__text'
            id='url__text'
            placeholder='Shorten a link here...'
            className={`url__text ${error ? 'url__error text__error' : ''}`}
            required
            onChange={handleUrlChange}
          />
          {error && <p className='error__message'>Please add a link </p>}
        </div>
        <button
          className='btn__shorten btn__accent'
          onClick={handleShortenClick}
        >
          Shorten it!
        </button>
      </div>
      <div className='short__urls'>
        {shortUrl.map((url, index) => (
          <div className='short__url' key={url.shortUrl}>
            <p className='url__long'>{url.url}</p>
            <div className='short__url__container'>
              <p className='url__short'>{url.shortUrl}</p>
              <button
                className={`btn__copy ${
                  copyIndex === index ? 'btn__copied' : 'btn__accent'
                }`}
                onClick={() => {
                  navigator.clipboard.writeText(url.shortUrl)
                  setCopyIndex(index)
                }}
              >
                {copyIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default URL
