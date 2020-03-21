import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'// eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _22da5c5e = () => interopDefault(import('../node_modules/@nuxt/vue-app/template/pages/index.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [{
    path: "",
    component: _22da5c5e
  }],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
