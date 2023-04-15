import React from 'react'
import './Button.css'

export function Button({handleClick, children, btnType, ...props}) {
  return (
    <button type='button' onClick={handleClick} className={`btn ${btnType}`}  {...props}>{children}</button>
  )
}

export default Button