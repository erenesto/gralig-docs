import React, { useEffect, useRef, useContext } from 'react'
import { Link } from 'gatsby-plugin-intl'
import SideNavScrollContext from '../context/SideNavScrollContext'

const SideNavItem = ({ name, linkTo }) => {
  const linkAddress = linkTo ? `/docs/${linkTo}` : '/docs'
  const { getActiveItem, setActiveLink } = useContext(SideNavScrollContext)
  let sidenavLink = useRef(null)

  useEffect(() => {
    if (
      sidenavLink.current.childNodes[0].classList.value.includes('active-link')
    ) {
      getActiveItem(sidenavLink.current)
    }
  }, [sidenavLink, getActiveItem])

  const getActive = e => {
    setActiveLink(e.target)
  }

  return (
    <li className="gra-sidenav-item" ref={sidenavLink}>
      <Link
        to={linkAddress}
        activeClassName="gra-sidenav-active-link"
        className="gra-sidenav-item-link"
        onClick={e => getActive(e)}
      >
        {name}
      </Link>
    </li>
  )
}

export default SideNavItem
