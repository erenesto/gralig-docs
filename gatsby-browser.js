import React from 'react'
import { NavMenuProvider } from './src/context/NavMenuContext'
import { ThemeProvider } from './src/context/ThemeContext'
import { SideNavScrollProvider } from './src/context/SideNavScrollContext'
import 'gralig'
import './src/styles/gralig-doc.scss'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <NavMenuProvider>
      <SideNavScrollProvider>{element}</SideNavScrollProvider>
    </NavMenuProvider>
  </ThemeProvider>
)
