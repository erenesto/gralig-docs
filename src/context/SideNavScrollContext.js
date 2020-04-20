import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

const initialState = {
  itemOffset: '',
  listHeight: '',
  scrollDistance: '',
  getListRef: () => {},
  getActiveItem: () => {},
}

const SideNavScrollContext = createContext(initialState)

const SideNavScrollProvider = props => {
  const [scrollUnit, setScrollUnit] = useState(null)
  const [list, setList] = useState(null)
  const [itemOffset, setItemOffset] = useState(null)
  const [position, setPosition] = useState(null)

  useEffect(() => {
    setPosition(Math.floor(itemOffset / scrollUnit))
  }, [itemOffset, scrollUnit])

  useEffect(() => {
    if (list && position) {
      setScrollPosition()
    }
  }, [list, position])

  function getListRef(listRef) {
    setList(listRef)
    const distance = listRef.current.scrollHeight - listRef.current.offsetHeight
    const findScrollUnit = listRef.current.scrollHeight / distance
    setScrollUnit(findScrollUnit)
  }
  function getActiveItem(itemRef) {
    setItemOffset(itemRef.current.offsetTop)
  }

  function setScrollPosition() {
    list.current.scrollTop = position
  }

  return (
    <SideNavScrollContext.Provider
      value={{ getListRef, getActiveItem }}
      {...props}
    />
  )
}

export default SideNavScrollContext
export { SideNavScrollProvider }
