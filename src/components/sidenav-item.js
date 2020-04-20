import React, { useEffect, useRef, useContext } from 'react'
import { Link } from 'gatsby-plugin-intl'
import SideNavScrollContext from '../context/SideNavScrollContext'

const SideNavItem = ({ name, linkTo }) => {
  const linkAddress = linkTo ? `/docs/${linkTo}` : '/docs'
  const { getActiveItem } = useContext(SideNavScrollContext)
  let sidenavLink = useRef(null)

  useEffect(() => {
    if (
      sidenavLink.current.childNodes[0].classList.value.includes('active-link')
    ) {
      getActiveItem(sidenavLink)
    }
  }, [])

  return (
    <li className="gra-sidenav-item" ref={sidenavLink}>
      <Link
        to={linkAddress}
        activeClassName="gra-sidenav-active-link"
        className="gra-sidenav-item-link"
      >
        {name}
      </Link>
    </li>
  )
}

export default SideNavItem
