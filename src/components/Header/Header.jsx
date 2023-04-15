import React from 'react'
import './Header.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Header() {

  return (
    <header className='header'>
      <div className="logo"><a href='/'>snap</a></div>
      <BurgerMenu />
    </header>
  )
}

export default Header
