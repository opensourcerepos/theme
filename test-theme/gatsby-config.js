// api call
module.exports = {
  plugins: [{ 
    resolve: `@opensourcerepos/gatsby-theme-opensourcerepos`, 
    options: {
      path: `${__dirname}/src/repository-blogs`,
    } 
  }],
  siteMetadata: {
    title: `OpenSourceRepos`,
    siteUrl: `https://www.opensourcerepos.com`,
    description: `Open Source Repos is a blog site for explaining the architecture, code-walkthrough and key takeways for the github repository. Out main aim to is to help more developers contribute to open source projects.`,
  },
}
