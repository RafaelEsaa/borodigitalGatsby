// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/rafaelesaa/workspaces/site/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/rafaelesaa/workspaces/site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-en-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/blog.en.js" /* webpackChunkName: "component---src-pages-blog-en-js" */),
  "component---src-pages-blog-es-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/blog.es.js" /* webpackChunkName: "component---src-pages-blog-es-js" */),
  "component---src-pages-content-writer-en-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/content-writer.en.js" /* webpackChunkName: "component---src-pages-content-writer-en-js" */),
  "component---src-pages-content-writer-es-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/content-writer.es.js" /* webpackChunkName: "component---src-pages-content-writer-es-js" */),
  "component---src-pages-index-en-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/index.en.js" /* webpackChunkName: "component---src-pages-index-en-js" */),
  "component---src-pages-index-es-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/index.es.js" /* webpackChunkName: "component---src-pages-index-es-js" */),
  "component---src-pages-social-media-en-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/social-media.en.js" /* webpackChunkName: "component---src-pages-social-media-en-js" */),
  "component---src-pages-social-media-es-js": () => import("/Users/rafaelesaa/workspaces/site/src/pages/social-media.es.js" /* webpackChunkName: "component---src-pages-social-media-es-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rafaelesaa/workspaces/site/.cache/data.json")

