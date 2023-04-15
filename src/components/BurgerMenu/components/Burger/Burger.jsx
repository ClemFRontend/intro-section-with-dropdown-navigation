import React from 'react'
import './Burger.css'

function Burger({isOpen, handleChange}) {
  return (
    <div className='burger'>
      <input id='burger' name='burger' type='checkbox' checked={isOpen} onChange={() => handleChange(!isOpen)} />
      <label htmlFor='burger'>
        <div></div>
        <div></div>
        <div></div>
      </label>
      
    </div>
  )
}

export default Burger
