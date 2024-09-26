export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const AppFooter = () => import('../../components/app-footer.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const AppHeader = () => import('../../components/app-header.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
export const BoxSelectPageHead = () => import('../../components/box-select-page-head.vue' /* webpackChunkName: "components/box-select-page-head" */).then(c => wrapFunctional(c.default || c))
export const HighchartsCompo = () => import('../../components/highcharts-compo.vue' /* webpackChunkName: "components/highcharts-compo" */).then(c => wrapFunctional(c.default || c))
export const MobileClassementReverse = () => import('../../components/mobile-classement-reverse.vue' /* webpackChunkName: "components/mobile-classement-reverse" */).then(c => wrapFunctional(c.default || c))
export const MobileClassement = () => import('../../components/mobile-classement.vue' /* webpackChunkName: "components/mobile-classement" */).then(c => wrapFunctional(c.default || c))
export const ModulePdcCount = () => import('../../components/module-pdc-count.vue' /* webpackChunkName: "components/module-pdc-count" */).then(c => wrapFunctional(c.default || c))
export const ModuleVehiculeCount = () => import('../../components/module-vehicule-count.vue' /* webpackChunkName: "components/module-vehicule-count" */).then(c => wrapFunctional(c.default || c))
export const QuintilesGraph2axisReverse = () => import('../../components/quintiles-graph-2axis-reverse.vue' /* webpackChunkName: "components/quintiles-graph2axis-reverse" */).then(c => wrapFunctional(c.default || c))
export const QuintilesGraph2axis = () => import('../../components/quintiles-graph-2axis.vue' /* webpackChunkName: "components/quintiles-graph2axis" */).then(c => wrapFunctional(c.default || c))
export const QuintilesGraphReversepdc = () => import('../../components/quintiles-graph-reversepdc.vue' /* webpackChunkName: "components/quintiles-graph-reversepdc" */).then(c => wrapFunctional(c.default || c))
export const QuintilesGraph = () => import('../../components/quintiles-graph.vue' /* webpackChunkName: "components/quintiles-graph" */).then(c => wrapFunctional(c.default || c))
export const SelectorRadio = () => import('../../components/selector-radio.vue' /* webpackChunkName: "components/selector-radio" */).then(c => wrapFunctional(c.default || c))
export const SelectorSelectEpciCat = () => import('../../components/selector-select-epci-cat.vue' /* webpackChunkName: "components/selector-select-epci-cat" */).then(c => wrapFunctional(c.default || c))
export const SelectorSelectLocation = () => import('../../components/selector-select-location.vue' /* webpackChunkName: "components/selector-select-location" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
