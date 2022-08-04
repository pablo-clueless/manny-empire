import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Catalogue, Checkout, Home, Modeling, Product } from './pages'
import { Cart, LazyLoader, Navbar, Sidebar } from './components'
import { useContextProvider } from './contexts/ContextProvider'
import { calculateTotal } from './store/slices/cart-slice'
import { getWithKey } from './lib'

const App = () => {
  const { activeMenu, setActiveMenu, currentMode, screenSize, setScreenSize, isClicked, setThemeMode } = useContextProvider()
  const { isSelected } = useSelector(store => store.cart)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleScreenResize)
    handleScreenResize()
    return () => window.removeEventListener('resize', handleScreenResize)
  },[])

  useEffect(() => {
    screenSize >= 768 ? setActiveMenu(false) : null
  },[screenSize])

  useEffect(() => {
    const mode = getWithKey('themeMode')
    setThemeMode(mode)
  })

  useEffect(() => {
    dispatch(calculateTotal())
  })

  useEffect(() => {
    if(isClicked.cart) {
      setActiveMenu(false)
    }
  },[isClicked])
  
  return (
    <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
      <div className='w-screen bg-white dark:bg-black'>
        <div className={`w-72 fixed top-0 ${activeMenu ? 'left-0' : '-left-full'} transition-all duration-300 sidebar`}>
          <Sidebar />
        </div>
        <Navbar />
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path='/catalogue/:id' element={<Product />} />
            <Route path='/model' element={<Modeling />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Suspense>

        {isClicked.cart && <Cart />}
      </div>
    </div>
  )
}

export default App