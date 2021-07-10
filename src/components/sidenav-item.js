import React, { useEffect, useRef, useContext } from 'react'
import { Link } from 'gatsby-plugin-intl'
import SideNavScrollContext from '../context/SideNavScrollContext'

const SideNavItem = ({ name, linkTo, path }) => {
  const linkAddress = linkTo ? `/docs/${linkTo}` : '/docs'
  const { setActiveLink } = useContext(SideNavScrollContext)
  let sidenavLink = useRef(null)

  useEffect(() => {
    if (
      sidenavLink.current.childNodes[0].classList.value.includes('active-link')
    ) {
      setActiveLink(sidenavLink.current.firstChild)
    }
  }, [sidenavLink, path, setActiveLink])

  return (
    <li className="gra-doc-sidenav-item" ref={sidenavLink}>
      <Link
        to={linkAddress}
        activeClassName="gra-doc-sidenav-active-link"
        className="gra-doc-sidenav-item-link"
      >
        {name}
      </Link>
    </li>
  )
}

export default SideNavItem
