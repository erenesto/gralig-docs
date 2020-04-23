import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

const initialState = {
  activeLink: null,
  setActiveLink: () => {},
  getActiveItem: () => {},
}
const SideNavScrollContext = createContext(initialState)

const SideNavScrollProvider = props => {
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    if (activeLink) {
      calculateScrollAlignPosition(activeLink)
    }
  }, [activeLink])

  function getActiveItem(link) {
    setActiveLink(link)
  }

  function calculateScrollAlignPosition(link) {
    link.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  return (
    <SideNavScrollContext.Provider
      value={{ getActiveItem, activeLink, setActiveLink }}
      {...props}
    />
  )
}

export default SideNavScrollContext
export { SideNavScrollProvider }
