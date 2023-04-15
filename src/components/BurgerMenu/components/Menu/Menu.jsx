import React from 'react'
import './Menu.css'

import ICON_CALENDAR from '../../../../assets/icons/icon-calendar.svg'
import ICON_TODO from '../../../../assets/icons/icon-todo.svg'
import ICON_REMINDERS from '../../../../assets/icons/icon-reminders.svg'
import ICON_PLANNING from '../../../../assets/icons/icon-planning.svg'
import { useNavigate } from 'react-router-dom'
import { DropdownList, DropdownMenu, Element } from '../../../DropdownList/DropdownList'
import ThemeSwitcher from '../../../ThemeSwitcher/ThemeSwitcher'

const FEATURES = [
  {title: "Todo List", icon: ICON_TODO, url: "todo", width: "17.5", height: "20", alt: "icon to do"},
  {title: "Calendar", icon: ICON_CALENDAR, url: "calendar", width: "20", height: "20", alt: "icon calendar"},
  {title: "Reminders", icon: ICON_REMINDERS, url: "reminders", width: "15", height: "20", alt: "icon reminders"},
  {title: "Planning", icon: ICON_PLANNING, url: "planning", width: "20", height: "20", alt: "icon planning"},
]

const COMPANY = [
  {title: "History", url: "history"},
  {title: "Our Team", url: "ourteam"},
  {title: "Blog", url: "blog"},
]

function Menu({isOpen, handleChange}) {

  const navigate = useNavigate()

  return (
    <>
      <div className="background" onClick={() => handleChange(!isOpen)} />
      <nav className='menu-wrapper'>
        <DropdownList>
          <DropdownMenu title="Features" className='url'>
            {FEATURES.map((link) => {
              return <Element
                  key={link.title}
                  onClick={() => navigate(`/${link.url}`)}
                  icon={<img src={link.icon} width={link.width} height={link.height} alt={link.alt} />}>
                {link.title}
              </Element>
            })}
          </DropdownMenu>
          <DropdownMenu title="Company" className='url'>
            {COMPANY.map((link) => {
              return <Element key={link.title} onClick={() => navigate(`/${link.url}`)}>
                {link.title}
              </Element>
            })}
          </DropdownMenu>
          <Element className='url' onClick={() => navigate('/careers')}>Careers</Element>
          <Element className='url' onClick={() => navigate('/About')}>About</Element>
          <Element className='flex-1'></Element>
          <Element notAText={true} className=''><ThemeSwitcher /></Element>
          <Element className='btn btn-tiercary center' onClick={() => navigate('/login')}>Login</Element>
          <Element className='btn btn-secondary center' onClick={() => navigate('/register')}>Register</Element>
        </DropdownList>
      </nav>
    </>
  )
}

export default Menu
