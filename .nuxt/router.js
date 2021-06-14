import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d27366c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _20bc44da = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _a24674f0 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _317a4124 = () => interopDefault(import('..\\pages\\career-details.vue' /* webpackChunkName: "pages/career-details" */))
const _c2a0dc58 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _5a9fc082 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _cf89bb90 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _6c0d952d = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _5d4f6fd4 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _678ef26e = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _c641dd9e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7d27366c,
    name: "about"
  }, {
    path: "/blog",
    component: _20bc44da,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _a24674f0,
    name: "blog-details"
  }, {
    path: "/career-details",
    component: _317a4124,
    name: "career-details"
  }, {
    path: "/careers",
    component: _c2a0dc58,
    name: "careers"
  }, {
    path: "/contact",
    component: _5a9fc082,
    name: "contact"
  }, {
    path: "/project",
    component: _cf89bb90,
    name: "project"
  }, {
    path: "/project-details",
    component: _6c0d952d,
    name: "project-details"
  }, {
    path: "/service",
    component: _5d4f6fd4,
    name: "service"
  }, {
    path: "/service-details",
    component: _678ef26e,
    name: "service-details"
  }, {
    path: "/",
    component: _c641dd9e,
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
