import { useState, useEffect } from 'react'

export const useBeforeFirstRender = cb => {
  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    cb()
  }
}

export const useScrollIntoView = () => {
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    if (activeLink) {
      activeLink.scrollIntoView({
        block: 'nearest',
      })
    }
  }, [activeLink])

  return { activeLink, setActiveLink }
}
