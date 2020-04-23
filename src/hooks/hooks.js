import { useState, useEffect, useRef, useLayoutEffect } from 'react'

export const useBeforeFirstRender = cb => {
  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    cb()
  }
}
