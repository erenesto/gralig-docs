import React, { useMemo } from 'react'

import remark2rehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'
import unified from 'unified'
import stringify from 'rehype-stringify'
import gh from 'hast-util-sanitize/lib/github'
import merge from 'deepmerge'
import format from 'rehype-format'

import {
  RenderCode,
  RenderPre,
  RenderHeading2,
  RenderHeading3,
  RenderAnchor,
  RenderParagraph,
} from '../utils/renderMarkdown'

const Markdown = ({ markdown, mdtype }) => {
  const sanitizeSchema = merge(gh, {
    attributes: {
      '*': [
        'className',
        'class',
        'placeholder',
        'width',
        'height',
        'viewBox',
        'fill',
        'cx',
        'cy',
        'r',
        'style',
        'aria-labelledby',
        'role',
        'ref',
      ],
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
      'svg',
      'circle',
      'path',
    ],
  })

  const renderMDHTML = useMemo(
    () =>
      unified()
        .use(remarkParse, { commonmark: true })
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(stringify)
        .use(format)
        .use(rehypeSanitize, sanitizeSchema)
        .use(rehypeReact, {
          createElement: React.createElement,
          components: {
            code: RenderCode,
            pre: RenderPre,
            h2: RenderHeading2,
            h3: RenderHeading3,
            a: RenderAnchor,
            p: RenderParagraph,
          },
        })
        .processSync(markdown).result,
    [markdown, sanitizeSchema]
  )

  return <div>{renderMDHTML}</div>
}

export default Markdown
