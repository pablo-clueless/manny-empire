import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiMenuAlt4, HiOutlineMoon, HiOutlineShoppingBag, HiOutlineSun, HiX } from 'react-icons/hi'

import { useContextProvider } from '../contexts/ContextProvider'
import { IconButton } from './'
import logo from '../assets/images/vme_light.png'
import darklogo from '../assets/images/vme_dark.png'
import { NAVLINKS } from '../assets'

const activeNavLink  = 'bg-gray-300 text-primary px-2 py-1 rounded-md  transition-colors duration-300 ease-in-out hover:bg-slate-200'
const inactiveNavLink = 'bg-transparent text-primary px-2 py-1 rounded-md  transition-colors duration-300 ease-in-out hover:bg-slate-200'

const NavLinks = ({to, name}) => (
  <NavLink to={to} title={name} className={({isActive}) => isActive ? activeNavLink : inactiveNavLink}>
    {name}
  </NavLink>
)

const Navbar = () => {
  const { currentMode, setThemeMode, activeMenu, setActiveMenu, handleClick } = useContextProvider()
  const { amount } = useSelector(store => store.cart)

  return (
    <div className='w-full sticky top-0 left-0 flex items-center justify-between bg-white dark:bg-black p-4 navbar'>
      <Link title='Victoria Manny Empire' to='/' className='h-12 w-12 rounded-md'>
        {currentMode === 'Dark' ? (
          <img src={darklogo} alt='vicky manny logo' className='h-full w-full object-cover rounded-md' />
        ) : (
          <img src={logo} alt='vicky manny logo' className='h-full w-full object-cover rounded-md' />
        )}
      </Link>

      <div className='flex items-center gap-4'>
        {currentMode === 'Light' ? (
          <IconButton title='Toggle light mode' icon={<HiOutlineMoon />} onClick={() => setThemeMode('Dark')} />
        ) :(
          <IconButton title='Toggle dark mode' icon={<HiOutlineSun />} onClick={() => setThemeMode('Light')} />
        )}
        <IconButton title='Cart' icon={<HiOutlineShoppingBag />} onClick={() => handleClick('cart')} count={amount} />
        <div className='md:flex hidden items-center gap-2'>
          {NAVLINKS.map((link) => (
            <NavLinks key={link.id} to={link.link} name={link.name} />
          ))}
        </div>
        <div className='md:hidden block'>
          {activeMenu ? (
            <button title='Toggle sidebar' onClick={() => setActiveMenu(prev => !prev)} className='p-2 text-black dark:text-white'>
              <HiX />
            </button>
          ) : (
            <button title='Toggle sidebar' onClick={() => setActiveMenu(prev => !prev)} className='p-2 text-black dark:text-white'>
              <HiMenuAlt4 />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}


export default Navbar