import React, { useState, useEffect } from 'react'
import './BurgerMenu.css'
import Burger from './components/Burger/Burger'
import Menu from './components/Menu/Menu'

function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      const wrapper = document.querySelector('.menu-wrapper')
      const background = document.querySelector('.background')
    
      if (isOpen) {
        wrapper.style.transform = "TranslateX(0)"
        background.style.opacity = "0.75"
        background.style.width = "100%"
      }
      else {
        wrapper.style.transform = "TranslateX(100%)"
        background.style.opacity = "0"
        // Wait the end of opacity animation to disable background
        setTimeout(() => {
          background.style.width = "0"
        }, 200);
      }
    }, [isOpen])

    return (
        <>
            <Burger isOpen={isOpen} handleChange={setIsOpen} />
            <Menu isOpen={isOpen} handleChange={setIsOpen} />
        </>
    )
}

export default BurgerMenu
