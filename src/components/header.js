import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import logo from '../images/gralig-logo.svg'
import Icons from '../images/icons/Icons'
import ThemeContext from '../context/ThemeContext'
import NavMenuContext from '../context/NavMenuContext'
import Language from './language'
import { onSpecificKeyPress } from '../utils/helpers'

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const { isActive, toggleMenu } = useContext(NavMenuContext)

  return (
    <header className="navbar gra-navbar">
      <div className="navbar-logo">
        <Link className="navbar-logo-link" to="/">
          <img className="navbar-logo-img" src={logo} alt="Gralig CSS Logo" />
        </Link>
      </div>
      <div className="navbar-content">
        <nav className="gra-nav">
          <ul className="nav">
            <li>
              <a
                className="nav-link"
                href="https://www.npmjs.com/package/gralig"
                tabIndex={0}
                role="button"
              >
                <Icons name="npm" width={18} height={18} fill={'#d9dcde'} />
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://github.com/erenesto/gralig"
                tabIndex={0}
                role="button"
              >
                <Icons name="github" width={18} height={18} fill={'#d9dcde'} />
              </a>
            </li>
            <li>
              <span
                className="nav-link"
                onKeyDown={e => onSpecificKeyPress(e, 'Enter', toggleTheme)}
                onClick={toggleTheme}
                tabIndex={0}
                role="button"
              >
                {!isDark ? (
                  <Icons name="moon" width={18} height={18} fill={'#d9dcde'} />
                ) : (
                  <Icons name="sun" width={18} height={18} fill={'#d9dcde'} />
                )}
              </span>
            </li>
            <li className="gra-menu-icon-item">
              <span
                className="nav-link gra-menu-icon-wrapper"
                onClick={toggleMenu}
                onKeyDown={toggleMenu}
                role="button"
                tabIndex={0}
              >
                <span
                  className={`gra-menu-icon ${isActive ? 'open' : ''}`}
                ></span>
              </span>
            </li>
            <li>
              <Language />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
