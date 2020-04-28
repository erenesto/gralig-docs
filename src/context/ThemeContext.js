import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import { prism, okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

const initialState = {
  isDark: false,
  prism,
  okaidia,
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

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, prism, okaidia }}
      {...props}
    />
  )
}

export default ThemeContext
export { ThemeProvider }
