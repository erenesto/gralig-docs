import React, { useMemo } from 'react'

import remark2rehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'
import unified from 'unified'
import stringify from 'rehype-stringify'
import format from 'rehype-format'
import gh from 'hast-util-sanitize/lib/github'
import merge from 'deepmerge'

import {
  RenderCode,
  RenderPre,
  RenderSubHeading,
  RenderAnchor,
} from '../utils/renderMarkdown'

const Markdown = ({ markdown, mdtype }) => {
  const sanitizeSchema = merge(gh, {
    attributes: {
      '*': ['className', 'class', 'placeholder'],
      li: ['className', 'class'],
      input: {
        type: ['text', 'email', 'button'],
        disabled: false,
      },
    },
    required: {
      input: {
        disabled: false,
      },
    },
    tagNames: [
      'button',
      'label',
      'form',
      'fieldset',
      'legend',
      'textarea',
      'nav',
      'header',
      'footer',
    ],
  })

  const renderMDHTML = useMemo(
    () =>
      unified()
        .use(remarkParse)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(format)
        .use(stringify)
        .use(rehypeSanitize, sanitizeSchema)
        .use(rehypeReact, {
          createElement: React.createElement,
          components: {
            code: RenderCode,
            pre: RenderPre,
            h2: RenderSubHeading,
            a: RenderAnchor,
          },
        })
        .processSync(markdown).result,
    [markdown]
  )

  return <div>{renderMDHTML}</div>
}

export default Markdown
