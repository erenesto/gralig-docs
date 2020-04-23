// const { createFilePath } = require('gatsby-source-filesystem')
// const path = require('path')

// exports.onCreateNode = ({ node, getNode, actions, getNodes }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode, basePath: 'docs' })

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const response = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   const docs = response.data.allMarkdownRemark.edges

//   const docsTemplate = path.resolve('./src/templates/doc-template.js')

//   docs.forEach(({ node }) => {
//     createPage({
//       path: `docs${node.fields.slug}`,
//       component: docsTemplate,
//       context: {
//         slug: node.fields.slug,
//       },
//     })
//   })
// }

const fs = require('fs')
const path = require('path')
const grayMatter = require('gray-matter')
const PATH_TO_MD_PAGES = path.resolve('src/pages/markdown')
const {
  siteMetadata: { supportedLanguages, defaultLanguage },
} = require('./gatsby-config')
const DOCS_TEMPLATE = path.resolve('./src/templates/doc-template.js')

const _getMdNodeIdAndLang = node => {
  const relativePath = path.relative(PATH_TO_MD_PAGES, node.absolutePath)

  const tok = relativePath.split('/')
  const pageType = tok[0]
  const mdfile = tok[tok.length - 1]
  const pageId = tok.slice(1, tok.length - 1).join('/')
  const lang = path.basename(mdfile, '.md')
  return { pageType, pageId, lang }
}

const _isMarkdownNode = n => n.internal.mediaType === `text/markdown`

const _loadMarkdownFile = n =>
  grayMatter(fs.readFileSync(n.absolutePath, 'utf-8').toString())

const _generatePagePath = ({ pageId }) => {
  return `/docs/${pageId}`
}

const _wrapGraphql = graphql => async str => {
  const result = await graphql(str)
  if (result.errors) {
    throw result.errors
  }
  return result
}

const _createMarkdownPages = ({ pages, getNode, createPage }, cb) => {
  pages.forEach(({ id, relativePath }, index) => {
    const node = getNode(id)
    const {
      fields: {
        page: { path: pagePath, lang },
      },
    } = node

    if (defaultLanguage === lang) {
      createPage({
        path: pagePath,
        component: DOCS_TEMPLATE,
        layout: 'docs',
        context: {
          relativePath,
          ...(cb ? cb(index, node) : null),
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNodes }) => {
  const { createNodeField } = actions
  if (_isMarkdownNode(node)) {
    const { pageType, pageId, lang } = _getMdNodeIdAndLang(node)
    const {
      data: { title, mdtype, description, section },
      content: body,
    } = _loadMarkdownFile(node)

    const pageData = {
      pageId,
      type: pageType,
      path: _generatePagePath({ pageType, pageId }),
      lang,
      layout: 'docs',
      versions: [],
    }

    // if is default language node
    if (lang === defaultLanguage) {
      // generate all versions of the node (including itself)
      getNodes().forEach(n => {
        if (_isMarkdownNode(n)) {
          const r = _getMdNodeIdAndLang(n)
          if (r.pageId === pageId) {
            const gm = _loadMarkdownFile(n)

            pageData.versions.push({
              lang: r.lang,
              title: gm.data.title,
              description: gm.data.description,
              mdtype: gm.data.mdtype,
              section: gm.data.section,
              markdown: gm.content,
            })
          }
        }
      })
    }

    createNodeField({
      node,
      name: 'page',
      value: pageData,
    })
  }

  return node
}

exports.createPages = async ({ graphql, actions, getNode }) => {
  const { createPage } = actions
  const _graphql = _wrapGraphql(graphql)

  const {
    data: {
      allFile: { nodes: staticPages },
    },
  } = await _graphql(`
    {
      allFile(filter: {fields: {page: {type: {eq: "docs"}}}}) {
        nodes {
              id
              relativePath
            }
      }
    }
  `)

  _createMarkdownPages({ pages: staticPages, getNode, createPage })
}
