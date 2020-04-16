import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import SideNav from './side-nav'
import ThemeContext from '../context/ThemeContext'

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className={`${isDark ? 'dark' : ''} gra-wrapper`}>
      <Header />
      <div className="gra-main">
        <SideNav />
        <main className="gra-content-wrapper">
          <div className="gra-content">{children}</div>
          <footer className="footer">© 2019, Built with ❤️&amp; Gralig</footer>
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
