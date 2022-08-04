import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import { useContextProvider } from '../contexts/ContextProvider'
import logo from '../assets/images/vme_light.png'
import darklogo from '../assets/images/vme_dark.png'
import { NAVLINKS } from '../assets'

const activeNavLink  = 'bg-gray-300 text-primary px-2 py-1 rounded-md  transition-colors duration-300 ease-in-out hover:bg-slate-200'
const inactiveNavLink = 'bg-transparent text-primary px-2 py-1 rounded-md  transition-colors duration-300 ease-in-out hover:bg-slate-200'

const NavLinks = ({to, name, onClick}) => (
  <NavLink to={to} className={({isActive}) => isActive ? activeNavLink : inactiveNavLink} onClick={onClick}>
    {name}
  </NavLink>
)

const Sidebar = () => {
  const { currentMode, activeMenu, setActiveMenu } = useContextProvider()

  return (
    <div className='w-full h-screen flex flex-col items-center bg-white dark:bg-black px-2 py-4'>
      <Link to='/' className='w-10 h-10 rounded-md'  onClick={() => setActiveMenu(false)}>
        {currentMode === 'Dark' ? (
          <img src={darklogo} alt='vicky manny logo' className='h-full w-full object-cover rounded-md' />
        ) : (
          <img src={logo} alt='vicky manny logo' className='h-full w-full object-cover rounded-md' />
        )}
      </Link>
      <p className='text-lg font-sans text-black dark:text-white uppercase mt-4 tracking-tight'>
        Victoria Manny Empire
      </p>

      <div className='mt-8 flex flex-col text-left gap-4'>
        {NAVLINKS.map((link) => (
          <NavLinks key={link.id} to={link.link} name={link.name} onClick={() => setActiveMenu(false)} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar