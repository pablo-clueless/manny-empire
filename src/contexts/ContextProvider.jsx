import { createContext, useContext, useState } from 'react'

import { setWithKey } from '../lib'

const Context = createContext()

const initialState = {
    chat: false,
    cart: false,
}

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [activeMenu, setActiveMenu] = useState(false)
    const [currentMode, setCurrentMode] = useState('Light')
    const [isClicked, setIsClicked] = useState(initialState)

    const setThemeMode = (mode) => {
        setCurrentMode(mode)
        setWithKey('themeMode', mode)
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    const handleUnclick = (clicked) => {
        setIsClicked({...initialState, [clicked]: false})
    }

    return (
        <Context.Provider value={{currentMode,setThemeMode,screenSize,setScreenSize,activeMenu,setActiveMenu,isClicked,handleClick,handleUnclick}}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context)