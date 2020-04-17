import _get from 'lodash.get'
import React from 'react'
import { Link } from 'gatsby-plugin-intl'

import CodeHighlighter from '../components/code-highlighter'

// export const RenderParagraph = ({ children }) => {
//   return <p className="gra-doc-p">{children}</p>
// }

export const RenderHeading2 = ({ children, className }) => {
  if (className !== 'heading' && className !== 'subheading') {
    return <h2 className="gra-doc-h2">{children}</h2>
  } else {
    return <h2 className={className}>{children}</h2>
  }
}

export const RenderHeading3 = ({ children, className }) => {
  if (className !== 'heading' && className !== 'subheading') {
    return <h2 className="gra-doc-h3">{children}</h2>
  } else {
    return <h2 className={className}>{children}</h2>
  }
}

export const RenderCode = ({ children }) => {
  return <code>{children}</code>
}

export const RenderPre = args => {
  // hack to get the code language
  const bodyMarkdown = _get(args, 'children.0._owner.memoizedProps.markdown')
  const codeSrc = _get(args, 'children.0.props.children.0')

  /*
  ```<lang>
  <codeSrc>
  ```
   */
  let lang = ''
  let m
  const regex = /```\w+\s*\n/gm
  while ((m = regex.exec(bodyMarkdown)) !== null) {
    // to avoid infinite looping
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }
    if (bodyMarkdown.substring(m.index + m[0].length).startsWith(codeSrc)) {
      lang = m[0].substring(3).trim()
      break
    }
  }

  return <CodeHighlighter language={lang}>{codeSrc}</CodeHighlighter>
}

export const RenderAnchor = ({ href, title, children }) => {
  const titleToLowercase = title ? title.toLowerCase() : ''

  const linkInsideOrOutside = nameOfClass => {
    if (!href || href.startsWith('http')) {
      return (
        <a href={href} className={nameOfClass} title={title}>
          {children}
        </a>
      )
    } else {
      return (
        <Link to={href} className={nameOfClass} title={title}>
          {children}
        </Link>
      )
    }
  }

  if (
    (title !== null && titleToLowercase.includes('button')) ||
    titleToLowercase.includes('buton')
  ) {
    return linkInsideOrOutside('btn')
  } else if (
    (title !== null && titleToLowercase.includes('more')) ||
    titleToLowercase.includes('daha')
  ) {
    return linkInsideOrOutside('btn btn-outline')
  } else if (
    title !== null &&
    titleToLowercase.includes('breadcrumblinkcurrent')
  ) {
    return linkInsideOrOutside('breadcrumb-link current')
  } else if (title !== null && titleToLowercase.includes('breadcrumblink')) {
    return linkInsideOrOutside('breadcrumb-link')
  } else if (title !== null && titleToLowercase.includes('navbarlogolink')) {
    return linkInsideOrOutside('navbar-logo-link')
  } else if (title !== null && titleToLowercase.includes('navlinkcurrent')) {
    return linkInsideOrOutside('nav-link current')
  } else if (title !== null && titleToLowercase.includes('navlink')) {
    return linkInsideOrOutside('nav-link')
  } else {
    if (!href || href.startsWith('http')) {
      return (
        <a href={href} title={title}>
          {children}
        </a>
      )
    } else {
      return (
        <Link to={href} title={title}>
          {children}
        </Link>
      )
    }
  }
}
