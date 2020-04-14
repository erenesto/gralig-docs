import React, { createContext } from 'react'
import { useState } from 'react'

const initialState = {
  isActive: false,
  toggleMenu: () => {},
}

const NavMenuContext = createContext(initialState)

const NavMenuProvider = props => {
  const [isActive, setIsActive] = useState(false)
  function toggleMenu() {
    setIsActive(prev => !prev)
  }
  return <NavMenuContext.Provider value={{ isActive, toggleMenu }} {...props} />
}

export default NavMenuContext
export { NavMenuProvider }
