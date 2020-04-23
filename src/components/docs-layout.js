import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import SideNav from './sidenav'
import ThemeContext from '../context/ThemeContext'

const DocsLayout = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <>
      <div className="gra-content">{children}</div>
      <footer className="footer">© 2019, Built with ❤️&amp; Gralig</footer>
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
