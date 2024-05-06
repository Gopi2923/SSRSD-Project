import React from 'react'
import './HeaderBanner.css'
import logo from '../../assets/logo.png'

const HeaderBanner = () => {
  return (
    <div className='header-banner'>
        <div className="banner-title">
      <h1>
      SREE SEETHAARAMACHANDRA SWAMY VAARI DEVASTHANAM
      </h1>
      <h1 className='banner-telugutitle'>శ్రీ సీతారామచంద్ర స్వామి వారి దేవస్థానం</h1>
       <h2>భద్రాచలం, భద్రాద్రి కొత్తగూడెం జిల్లా</h2>
        </div>

        <div className="banner-logo">
            <img src={logo} alt="Logo" />
        </div>
    </div>
  )
}

export default HeaderBanner
