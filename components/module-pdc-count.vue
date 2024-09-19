<template>
  <div class="card">
    <div class="ico">
      <div v-if="currCatVehic === 'gaz'" v-html="require(`~/assets/_svg/_icos/icon-pdc-gaz.svg?raw`)" />
      <div v-else v-html="require(`~/assets/_svg/_icos/vehicule-count.svg?raw`)" />
    </div>
    <div class="count">{{ numberWithSpaces(countDatas) || '&nbsp;' }}</div>
    <div v-if="currCatVehic === 'gaz'" class="type" v-html="'stations GNV<br>publiques au total'"></div>
    <div v-else class="type" v-html="'points de charge<br>publiques au total'"></div>
    <div class="date">{{infos['pdc' + currCatVehic]}}</div>
    <div class="source">source : {{currCatVehic === 'elec' ? 'GIREVE' : 'AFGNV'}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    // vehiculeTypeSVG
  },
  props: {
    locationField: {
      type: String,
      default: function () {
        return null
      },
    },
    locationCode: {
      type: Number,
      default: function () {
        return null
      },
    },
    countDatas: {
      type: Number,
      default: function () {
        return null
      },
    },
  },
  computed: {
    ...mapGetters({
      infos: 'get_INFOS_v2'
    }),
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    }
  },
  data: () => ({
    panelOpen: false,
  })
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_headerWhiteBox.scss';
.source {
  padding: 23px 0px 8px 0px
}
</style>
