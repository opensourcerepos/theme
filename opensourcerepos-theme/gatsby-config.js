// api call
module.exports = options => {
  return {
    plugins: [{
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: options.path,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [`gatsby-remark-autolink-headers`],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-robots-txt`
    ]
  }
}
