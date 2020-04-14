/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useContext } from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import NavMenuContext from '../context/navMenuContext'

const SideNav = () => {
  const { isActive, toggleMenu } = useContext(NavMenuContext)
  const intl = useIntl()

  const sidenavLinks = {
    group1: [
      {
        goTo: '',
        name: intl.formatMessage({ id: 'sidenavLinks.docs.name' }),
      },
    ],
    group2: [
      {
        goTo: 'grid',
        name: intl.formatMessage({ id: 'sidenavLinks.grid.name' }),
      },
      {
        goTo: 'dark-mode',
        name: intl.formatMessage({ id: 'sidenavLinks.dark.name' }),
      },
      {
        goTo: 'variables',
        name: intl.formatMessage({ id: 'sidenavLinks.vars.name' }),
      },
      {
        goTo: 'responsive',
        name: intl.formatMessage({ id: 'sidenavLinks.responsive.name' }),
      },
      {
        goTo: 'utils',
        name: intl.formatMessage({ id: 'sidenavLinks.utils.name' }),
      },
    ],
    group3: [
      {
        goTo: 'typography',
        name: intl.formatMessage({ id: 'sidenavLinks.typography.name' }),
      },
      {
        goTo: 'buttons',
        name: intl.formatMessage({ id: 'sidenavLinks.buttons.name' }),
      },
      {
        goTo: 'form',
        name: intl.formatMessage({ id: 'sidenavLinks.form.name' }),
      },
      {
        goTo: 'nav',
        name: intl.formatMessage({ id: 'sidenavLinks.nav.name' }),
      },
      {
        goTo: 'navbar',
        name: intl.formatMessage({ id: 'sidenavLinks.navbar.name' }),
      },
      {
        goTo: 'footer',
        name: intl.formatMessage({ id: 'sidenavLinks.footer.name' }),
      },
      {
        goTo: 'breadcrumb',
        name: intl.formatMessage({ id: 'sidenavLinks.breadcrumb.name' }),
      },
      {
        goTo: 'card',
        name: intl.formatMessage({ id: 'sidenavLinks.card.name' }),
      },
      {
        goTo: 'alerts',
        name: intl.formatMessage({ id: 'sidenavLinks.alerts.name' }),
      },
      {
        goTo: 'list',
        name: intl.formatMessage({ id: 'sidenavLinks.list.name' }),
      },
      {
        goTo: 'table',
        name: intl.formatMessage({ id: 'sidenavLinks.table.name' }),
      },
      {
        goTo: 'dropdown',
        name: intl.formatMessage({ id: 'sidenavLinks.dropdown.name' }),
      },
      {
        goTo: 'progress',
        name: intl.formatMessage({ id: 'sidenavLinks.progress.name' }),
      },
      {
        goTo: 'loading',
        name: intl.formatMessage({ id: 'sidenavLinks.loading.name' }),
      },
      {
        goTo: 'modal',
        name: intl.formatMessage({ id: 'sidenavLinks.modal.name' }),
      },
    ],
  }

  const createNavGroups = () => {
    let sideNavRender = []

    for (const group in sidenavLinks) {
      if (group === 'group1') {
        sideNavRender.push(
          <span className="gra-sidenav-group" key={group}>
            {sidenavLinks[group].map(link => (
              <li className="gra-sidenav-item" key={link.name}>
                <Link
                  to={`/docs`}
                  activeClassName="gra-sidenav-active-link"
                  className="gra-sidenav-item-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </span>
        )
      } else if (group === 'group2') {
        sideNavRender.push(
          <span className="gra-sidenav-group" key={group}>
            {sidenavLinks[group].map(link => (
              <li className="gra-sidenav-item" key={link.name}>
                <Link
                  to={`/docs/${link.goTo}`}
                  activeClassName="gra-sidenav-active-link"
                  className="gra-sidenav-item-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </span>
        )
      } else if (group === 'group3') {
        sideNavRender.push(
          <span className="gra-sidenav-group" key={group}>
            {sidenavLinks[group].map(link => (
              <li className="gra-sidenav-item" key={link.name}>
                <Link
                  to={`/docs/${link.goTo}`}
                  activeClassName="gra-sidenav-active-link"
                  className="gra-sidenav-item-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </span>
        )
      }
    }

    return sideNavRender
  }

  return (
    <>
      {isActive && (
        <span
          className="gra-side-nav-backdrop"
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        ></span>
      )}
      <nav className={`gra-sidenav ${isActive ? 'active' : ''}`}>
        <ul className="gra-sidenav-list">{createNavGroups()}</ul>
      </nav>
    </>
  )
}

export default SideNav
