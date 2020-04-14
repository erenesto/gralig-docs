import React from 'react'
import { NavMenuProvider } from './src/context/navMenuContext'
import { ThemeProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <NavMenuProvider>{element}</NavMenuProvider>
  </ThemeProvider>
)
