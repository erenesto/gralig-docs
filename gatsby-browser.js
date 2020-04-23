import React from 'react'
import { NavMenuProvider } from './src/context/navMenuContext'
import { ThemeProvider } from './src/context/ThemeContext'
import { SideNavScrollProvider } from './src/context/SideNavScrollContext'
import Layout from './src/components/layout'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <NavMenuProvider>
      <SideNavScrollProvider>{element}</SideNavScrollProvider>
    </NavMenuProvider>
  </ThemeProvider>
)
