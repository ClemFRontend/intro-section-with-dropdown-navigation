import React, { useEffect, useState } from 'react'
import './DropdownList.css'

/**
 * 
 * Englobe dropdown menus
 * 
 * @param {any} children
 * @returns {HTMLElement}
 */
export function DropdownList({children}) {
    return <ul className='dropdown-list'>{children}</ul>
}

/**
 * 
 * Everything under this tag will be collapsable
 * 
 * @param {String} title 
 * @param {HTMLElement} icon
 * @param {String} children
 * @returns {HTMLElement}
 */
export function DropdownMenu({title, className, icon, children, ...props}) {

    const [display, setDisplay] = useState('none')
    const [rotation, setRotation] = useState('0')
    const [maxIconWidth, setMaxIconWidth] = useState(0)

    /**
     * Get the max width of an icon and apply it to div icon
     * The aim is to center icon according to icon width to avoid offset
     */
    React.Children.toArray(children).forEach((item) => {
        if (item.props.icon !== undefined) {
            const iconWidth = item.props.icon.props.width
            if (maxIconWidth < iconWidth) {
                setMaxIconWidth(iconWidth)
            }
        }
    })

    useEffect(() => {
        if (maxIconWidth !== 0) {
            const itemIconWidthElement = document.querySelectorAll('.element-icon')
            itemIconWidthElement.forEach((icon) => {
                icon.style.width = `${maxIconWidth}px`
            })
        }
    }, [maxIconWidth])
    /* */

    function toogleDisplay() {
        if (display === 'none') {
            setDisplay("block")
            setRotation("180deg")
        } else {
            setDisplay("none")
            setRotation("0deg")
        }
    }

    return (
        <li className={`dropdown-menu ${className}`} {...props}>
            <button type='button' onClick={() => toogleDisplay()}>
                {title}
                {icon === undefined ?
                    <svg style={{rotate: rotation}} width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.5" fill="transparent" d="m1 1 4 4 4-4"/></svg>
                    :
                    icon
                }
            </button>

            <ul style={{display: display}}>
                {children}
            </ul>
        </li>
    )
}

/**
 * 
 * Element of list. Can be under DropdownMenu or DropdownList.
 * 
 * @param {HTMLElement} icon
 * @param {String} children
 * @returns 
 */
export function Element({notAText, icon, hideDot=false, onClick, children, ...props}) {

    return (
        <li className="element" onClick={onClick} {...props} >
            {icon !== undefined && 
                <div className='element-icon'>
                    {icon}
                </div>
            }
            {notAText ? <>{children}</> : <p>{children}</p>}
            
        </li>
    )
}