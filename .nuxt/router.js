import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d68d58f = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _ee2363e0 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _dbb92df6 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _5da5f961 = () => interopDefault(import('..\\pages\\career-details.vue' /* webpackChunkName: "pages/career-details" */))
const _2505f437 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _59068222 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _1e91849b = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _754e36e0 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _38b45b92 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _2583d62c = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _2d20b054 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0d68d58f,
    name: "about"
  }, {
    path: "/blog",
    component: _ee2363e0,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _dbb92df6,
    name: "blog-details"
  }, {
    path: "/career-details",
    component: _5da5f961,
    name: "career-details"
  }, {
    path: "/careers",
    component: _2505f437,
    name: "careers"
  }, {
    path: "/contact",
    component: _59068222,
    name: "contact"
  }, {
    path: "/project",
    component: _1e91849b,
    name: "project"
  }, {
    path: "/project-details",
    component: _754e36e0,
    name: "project-details"
  }, {
    path: "/service",
    component: _38b45b92,
    name: "service"
  }, {
    path: "/service-details",
    component: _2583d62c,
    name: "service-details"
  }, {
    path: "/",
    component: _2d20b054,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
