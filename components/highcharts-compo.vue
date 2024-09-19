<template>
  <div class="wrapper">
    <client-only>
      <highcharts
        :id="graphRef"
        :ref="graphRef"
        :class="graphRef"
        class="commonGraph"
        :options="options"
        :highcharts="highcharts"
        :style="{ width: '100%', height: chartHeight + 'px' }"
      ></highcharts>
    </client-only>
    <img
      v-if="bgImage"
      class="gradient-mediane"
      src="~assets/img/gradient-green.png"
      :style="{
        width: 'calc(' + (100 - medianeXPerc) + '% + -20px',
        height: 'calc(' + (100 - medianeYPerc) + '% + 0px',
      }"
    />
    <img
      v-if="bgImage"
      class="gradient-bg"
      src="~assets/img/gradient-mapping.png"
    />
  </div>
</template>
<script>
import Highcharts from 'highcharts'
const borderRadius = require('highcharts-border-radius')

if (process.browser) {
  Highcharts.setOptions({
    lang: {
      resetZoom: 'Annuler le zoom',
    },
  })
  borderRadius(Highcharts)
}

export default {
  props: {
    id: {
      type: String,
      default: function () {
        return 'undefined'
      },
    },
    graphRef: {
      type: String,
      default: function () {
        return 'undefined'
      },
    },
    options: {
      type: Object,
      default: function () {
        return {}
      },
    },
    chartHeight: {
      type: String,
      default: function () {
        return '440px'
      },
    },
    bgImage: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    medianeXPerc: {
      type: Number,
      default: function () {
        return 0
      },
    },
    medianeYPerc: {
      type: Number,
      default: function () {
        return 0
      },
    },
  },
  data: function () {
    return {
      highcharts: process.browser ? Highcharts : null,
    }
  },
  watch: {
    'options.series': function () {
      window.dispatchEvent(new Event('resize'))
    },
  },
}
</script>
<style lang="scss" scoped>
.commonGraph,
.wrapper {
  position: relative;
  display: block;
  overflow: hidden;
}
</style>
