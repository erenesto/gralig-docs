import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

const initialState = {
  isDark: false,
  toggleTheme: () => {},
}

const ThemeContext = createContext(initialState)

const ThemeProvider = props => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isThemeDark = JSON.parse(localStorage.getItem('dark'))
    if (isThemeDark) {
      setIsDark(isThemeDark)
    }
  }, [])

  function toggleTheme() {
    let dark = !isDark
    localStorage.setItem('dark', JSON.stringify(dark))
    setIsDark(prev => !prev)
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }} {...props} />
}

export default ThemeContext
export { ThemeProvider }
