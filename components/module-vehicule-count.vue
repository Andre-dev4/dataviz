<template>
  <div class="card">
    <div class="ico">
      <div
        v-html="
          require(`~/assets/_svg/_icos/types-vehicules/${current_type_vehicule.slug}.svg?raw`)
        "
      />
    </div>
    <div class="count">{{ numberWithSpaces(countDatas) || '&nbsp;' }}</div>
    <div
      v-if="currCatVehic !== 'gaz'"
      class="type"
      v-html="
        current_type_vehicule.labelPlaceholder || current_type_vehicule.label
      "
    ></div>
    <div v-else class="type">Nombre de véhicules au gaz</div>
    <div class="date">{{infos['nb' + currCatVehic]}}</div>
    <selector-select-location
      v-if="currCatVehic !== 'gaz'"
      class="selector list"
      :items="type_vehicules"
      :panel-open="panelOpen"
      :current="current_type_vehicule"
      :use-internal-territoire="false"
      :use-anchor-down="true"
      @openPanel="panelOpen = true"
      @closePanel="panelOpen = false"
      @selectItem="selectItem"
    ></selector-select-location>
    <div class="source">source : {{currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV'}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    countDatas: {
      type: Number,
      default: function () {
        return null
      },
    },
  },
  data: () => ({
    panelOpen: false,
  }),
  computed: {
    ...mapGetters({
      type_vehicules: 'get_type_vehicules',
      current_type_vehicule: 'get_current_type_vehicule',
      infos: 'get_INFOS_v2'
    }),
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
  },
  methods: {
    selectItem(fItem) {
      this.panelOpen = false
      this.$store.commit('set_current_type_vehicule', fItem)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_headerWhiteBox.scss';
@import '~assets/scss/_browsers.scss';
.selector.list {
  padding: 7px 16px;
  margin-top: 8px;
  background: $primary-B-100;
  min-width: 198px;
  ::v-deep .placeholder {
    color: $white;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
  @include transition((background), 0.3s, ease-out);
  &:hover {
    background: $primary-B-50;
  }
}
</style>
