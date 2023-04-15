import React from 'react'
import './Switch.css'

function Switch(props) {
    const { name, handleChange, checked } = props

    return (
        <>
            <span className='switch-input'>
                <input type="checkbox" title={name} id={name} onChange={handleChange} checked={checked} />
                <label htmlFor={name}></label>
            </span>
        </>
    )
}

export default Switch
