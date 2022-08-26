import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
            <header className = 'hero'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603__340.jpg'
                )`,
                backgroundPosition: 'center center',
            }}
        >
        <div className='hero__fadeBottom'>
            <div className = 'hero__content'>
                <div className='hero__buttons'>
                    <button className='hero__button'>
                       <h1> Welcome to your Store</h1>
                    </button>
                </div>
            </div>            
         </div>
        </header>
    </>
  )
}

export default Hero