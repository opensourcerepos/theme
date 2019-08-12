const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---opensourcerepos-theme-src-pages-index-js": hot(preferDefault(require("/Users/santosh/Projects/opensourcerepos/opensourcerepos-theme/opensourcerepos-theme/src/pages/index.js"))),
  "component---opensourcerepos-theme-src-pages-new-blog-js": hot(preferDefault(require("/Users/santosh/Projects/opensourcerepos/opensourcerepos-theme/opensourcerepos-theme/src/pages/new-blog.js"))),
  "component---opensourcerepos-theme-src-pages-blog-js": hot(preferDefault(require("/Users/santosh/Projects/opensourcerepos/opensourcerepos-theme/opensourcerepos-theme/src/pages/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/santosh/Projects/opensourcerepos/opensourcerepos-theme/test-theme/.cache/dev-404-page.js")))
}

