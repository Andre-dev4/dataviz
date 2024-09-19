export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as AppFooter } from '../../components/app-footer.vue'
export { default as AppHeader } from '../../components/app-header.vue'
export { default as BoxSelectPageHead } from '../../components/box-select-page-head.vue'
export { default as HighchartsCompo } from '../../components/highcharts-compo.vue'
export { default as MobileClassementReverse } from '../../components/mobile-classement-reverse.vue'
export { default as MobileClassement } from '../../components/mobile-classement.vue'
export { default as ModulePdcCount } from '../../components/module-pdc-count.vue'
export { default as ModuleVehiculeCount } from '../../components/module-vehicule-count.vue'
export { default as QuintilesGraph2axisReverse } from '../../components/quintiles-graph-2axis-reverse.vue'
export { default as QuintilesGraph2axis } from '../../components/quintiles-graph-2axis.vue'
export { default as QuintilesGraphReversepdc } from '../../components/quintiles-graph-reversepdc.vue'
export { default as QuintilesGraph } from '../../components/quintiles-graph.vue'
export { default as SelectorRadio } from '../../components/selector-radio.vue'
export { default as SelectorSelectEpciCat } from '../../components/selector-select-epci-cat.vue'
export { default as SelectorSelectLocation } from '../../components/selector-select-location.vue'

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
