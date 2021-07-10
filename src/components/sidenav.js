/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react'
import SideNavItem from './sidenav-item'
import NavMenuContext from '../context/NavMenuContext'
import { useNavLinks } from '../hooks'

const SideNav = ({ path }) => {
  const { isActive, toggleMenu } = useContext(NavMenuContext)
  const { sidenavLinks } = useNavLinks()

  const createNavGroups = () => {
    let sideNavRender = []

    for (const group in sidenavLinks) {
      if (group === 'group1') {
        sideNavRender.push(
          <li className="gra-doc-sidenav-group" key={group}>
            <ul>
              {sidenavLinks[group].map(link => (
                <SideNavItem
                  key={link.name}
                  name={link.name}
                  linkTo={link.goTo}
                  path={path}
                />
              ))}
            </ul>
          </li>
        )
      } else if (group === 'group2') {
        sideNavRender.push(
          <li className="gra-doc-sidenav-group" key={group}>
            <ul>
              {sidenavLinks[group].map(link => (
                <SideNavItem
                  key={link.name}
                  name={link.name}
                  linkTo={link.goTo}
                  path={path}
                />
              ))}
            </ul>
          </li>
        )
      } else if (group === 'group3') {
        sideNavRender.push(
          <li className="gra-doc-sidenav-group" key={group}>
            <ul>
              {sidenavLinks[group].map(link => (
                <SideNavItem
                  key={link.name}
                  name={link.name}
                  linkTo={link.goTo}
                  path={path}
                />
              ))}
            </ul>
          </li>
        )
      }
    }

    return sideNavRender
  }

  return (
    <>
      {isActive && (
        <span
          className="gra-doc-side-nav-backdrop"
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        ></span>
      )}
      <nav className={`gra-doc-sidenav ${isActive ? 'active' : ''}`}>
        <ul className="gra-doc-sidenav-list">{createNavGroups()}</ul>
      </nav>
    </>
  )
}

export default SideNav
