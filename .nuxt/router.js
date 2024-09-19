import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8521df64 = () => interopDefault(import('../pages/gaz.vue' /* webpackChunkName: "pages/gaz" */))
const _da5766be = () => interopDefault(import('../pages/gaz/_territoireType.vue' /* webpackChunkName: "pages/gaz/_territoireType" */))
const _f6c0ea1e = () => interopDefault(import('../pages/gaz/_territoireType/_locationSlug.vue' /* webpackChunkName: "pages/gaz/_territoireType/_locationSlug" */))
const _4dda58b4 = () => interopDefault(import('../pages/gaz/_territoireType/_locationSlug/index.vue' /* webpackChunkName: "pages/gaz/_territoireType/_locationSlug/index" */))
const _0c7245a2 = () => interopDefault(import('../pages/index123.vue' /* webpackChunkName: "pages/index123" */))
const _0242fa14 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _382feab7 = () => interopDefault(import('../pages/updater.vue' /* webpackChunkName: "pages/updater" */))
const _5ef203c0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0f56b1c7 = () => interopDefault(import('../pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType.vue' /* webpackChunkName: "pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType" */))
const _45c214d2 = () => interopDefault(import('../pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug.vue' /* webpackChunkName: "pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug" */))
const _a626a24c = () => interopDefault(import('../pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug/index.vue' /* webpackChunkName: "pages/index/vehicules-electriques-et-hybrides-rechargeables/_territoireType/_locationSlug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gaz",
    component: _8521df64,
    name: "gaz",
    children: [{
      path: ":territoireType?",
      component: _da5766be,
      name: "gaz-territoireType",
      children: [{
        path: ":locationSlug?",
        component: _f6c0ea1e,
        children: [{
          path: "",
          component: _4dda58b4,
          name: "gaz-territoireType-locationSlug"
        }]
      }]
    }]
  }, {
    path: "/index123",
    component: _0c7245a2,
    name: "index123"
  }, {
    path: "/test",
    component: _0242fa14,
    name: "test"
  }, {
    path: "/updater",
    component: _382feab7,
    name: "updater"
  }, {
    path: "/",
    component: _5ef203c0,
    name: "index",
    children: [{
      path: "vehicules-electriques-et-hybrides-rechargeables/:territoireType?",
      component: _0f56b1c7,
      name: "index-vehicules-electriques-et-hybrides-rechargeables-territoireType",
      children: [{
        path: ":locationSlug?",
        component: _45c214d2,
        children: [{
          path: "",
          component: _a626a24c,
          name: "index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug"
        }]
      }]
    }]
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
