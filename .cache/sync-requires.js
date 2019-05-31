const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/404.js"))),
  "component---src-pages-blog-en-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/blog.en.js"))),
  "component---src-pages-blog-es-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/blog.es.js"))),
  "component---src-pages-content-writer-en-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/content-writer.en.js"))),
  "component---src-pages-content-writer-es-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/content-writer.es.js"))),
  "component---src-pages-index-en-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/index.en.js"))),
  "component---src-pages-index-es-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/index.es.js"))),
  "component---src-pages-social-media-en-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/social-media.en.js"))),
  "component---src-pages-social-media-es-js": hot(preferDefault(require("/Users/rafaelesaa/workspaces/site/src/pages/social-media.es.js")))
}

