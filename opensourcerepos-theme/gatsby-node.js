const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {

    const { createNodeField } = actions
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`query MyQuery {
    allMarkdownRemark {
      nodes {
        html
        fileAbsolutePath
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
          versionControl
          repositoryUrl
          repoOrganization
          repoName
          author
        }
        excerpt
        tableOfContents(heading: "")
        fields {
          slug
        }
        timeToRead
      }
    }
  }`)
  console.log(result.data.allMarkdownRemark.nodes);
  createPage({
    path: '/',
    component: path.resolve(`${__dirname}/src/pages/index.js`),
    context: result.data.allMarkdownRemark.nodes
  })
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.path || node.slug,
      component: path.resolve(`${__dirname}/src/pages/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        ...node
      },
    })
  })
}