import React, { createContext } from 'react'
import { useScrollIntoView } from '../hooks'

const initialState = {
  activeLink: null,
  setActiveLink: () => {},
}
const SideNavScrollContext = createContext(initialState)

const SideNavScrollProvider = props => {
  const { activeLink, setActiveLink } = useScrollIntoView()

  return (
    <SideNavScrollContext.Provider
      value={{ activeLink, setActiveLink }}
      {...props}
    />
  )
}

export default SideNavScrollContext
export { SideNavScrollProvider }
