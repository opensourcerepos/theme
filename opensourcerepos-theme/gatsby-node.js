const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {

    const { createNodeField } = actions
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, options }) => {
  const { createPage } = actions
  const result = await graphql(`query MyQuery {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date]
      order: DESC
    }){
      nodes {
        html
        fileAbsolutePath
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
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
  let basePath = `${__dirname}/src/custom-pages`;
  createPage({
    path: '/',
    component: path.resolve(`${basePath}/index.js`),
    context: {
      data: result.data.allMarkdownRemark.nodes
    }
  })
  createPage({
    path: '/new-blog',
    component: path.resolve(`${basePath}/new-blog.js`)
  })
  createPage({
    path: '/about',
    component: path.resolve(`${basePath}/about.js`),
  })
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.path || node.fields.slug,
      component: path.resolve(`${basePath}/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        ...node
      },
    })
  })
}