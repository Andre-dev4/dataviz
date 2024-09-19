<template>
  <div v-in-viewport class="mobile-classement">
    <div
      class="gradient-top"
      :class="{ enabled: !isExpanded && currentIndex > 2 }"
    >
      <span v-html="require(`~/assets/_svg/gradient-top.svg?raw`)" />
    </div>
    <div
      v-for="(item, itemIndex) in displayedDatas"
      :key="'item-' + itemIndex"
      class="classement-item"
      :class="{ current: currentTerritoire.label === item.label }"
      :data-quintile="item.quintile"
    >
      <div class="item-head">
        <div class="item-rank" v-html="rankTxt(item.ranking)"></div>
        <div class="item-label">{{ item.label }}</div>
        <div class="item-value" v-html="valueTxt(item.y) === Infinity ? '-' : valueTxt(item.y)"></div>
      </div>
      <div class="item-content">
        <div class="item-content-head">
          <div
            class="item-rank"
            v-html="
              rankTxt(item.ranking) +
              ' sur ' +
              graphDatas.series.length +
              ' ' +
              typeTxt()
            "
          ></div>
          <div class="item-label">{{ item.label }}</div>
          <div class="item-txt">
            <span class="value" v-html="valueTxt(item.y)"></span> de <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span><span v-else>véhicules immatriculés et hybrides rechargeables</span> par rapport au total de véhicules immatriculés
            
            <span class="volume-data">soit {{item.vol}} véhicule(s) <span v-if="currCatVehic === 'gaz'"> au gaz</span><span v-else
                  >électriques et hybrides rechargeables</span><br>pour {{item.nb}} véhicules immatriculés</span>
              
          </div>
        </div>
      </div>
    </div>
    <div v-if="classementType === 'nbVehic'" class="source">source : {{currCatVehic === 'elec' ? 'AAAdata' : 'AFGNV'}}</div>
    <div v-else class="source">source : {{currCatVehic === 'elec' ? 'GIREVE' : 'AFGNV'}}</div>
    <div v-if="!isExpanded" class="bt-wrapper">
      <span class="bt-download" @click="toggleExpand">
        Afficher tout le classement
        <div class="ico" v-html="require(`~/assets/_svg/ico-plus.svg?raw`)" />
      </span>
    </div>
    <div
      class="close-expand"
      :class="{ enabled: isExpanded }"
      @click="toggleExpand"
      v-html="require(`~/assets/_svg/ico-minus.svg?raw`)"
    />
    <div
      class="gradient-bottom"
      :class="{
        enabled: !isExpanded && currentIndex < graphDatas.series.length - 3,
      }"
    >
      <span v-html="require(`~/assets/_svg/gradient-bottom.svg?raw`)" />
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash'
import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)
export default {
  props: {
    graphDatas: {
      type: Object,
      default: function () {
        return {}
      },
    },
    currentTerritoire: {
      type: Object,
      default: function () {
        return null
      },
    },
    epciCat: {
      type: Object,
      default: function () {
        return null
      },
    },
    regions: {
      type: Array,
      default: function () {
        return null
      },
    },
    classementType: {
      type: String,
      default: function () {
        return null
      },
    }
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
    current_reg() {
      const _self = this
      if (!_self.$route.params.locationSlug) return null

      const region = _.find(this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg
      })
      return region
    },
    currentIndex() {
      const _self = this
      return _.findIndex(
        this.graphDatas.series,
        function (fSerie, fSerieIndex) {
          return fSerie.label === _self.currentTerritoire.label
        }
      )
    },
    displayedDatas() {
      // console.log('isExpanded', this.isExpanded)
      if (this.isExpanded) return this.graphDatas.series
      const maxAvailableIndex = this.graphDatas.series.length - 1
      let minIndex = this.currentIndex - 3
      let maxIndex = this.currentIndex + 3
      if (minIndex < 0) {
        const diff = -minIndex
        minIndex = 0
        maxIndex += diff
      }
      if (maxIndex > maxAvailableIndex) {
        const diff = maxIndex - maxAvailableIndex
        maxIndex = maxAvailableIndex
        minIndex = minIndex - diff
      }
      return _.filter(this.graphDatas.series, function (fSerie, fSerieIndex) {
        return fSerieIndex >= minIndex && fSerieIndex <= maxIndex
      })
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
    rankTxt(fRank) {
      return fRank === 1 ? fRank + '<sup>er</sup>' : fRank + '<sup>e</sup>'
    },
    typeTxt() {
      if (this.currentTerritoire.type === 'dpt') {
        return 'départements'
      } else if (this.currentTerritoire.type === 'reg') {
        return 'régions'
      } else if (this.currentTerritoire.type === 'epci') {
        if (this.epciCat.id === 'classe') {
          return (
            'EPCI de même classe (' +
            this.currentTerritoire.classe.replace('CLASSE ', '') +
            ')'
          )
        } else {
          return 'EPCI de la même région (' + this.current_reg.label + ')'
        }
      }
    },
    valueTxt(fValue) {
      return fValue + '%'
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';

.volume-data {
    margin-top: 8px;
    display: block;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    line-height: 120%;
  }
.bt-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  z-index: 2;
}
.close-expand {
  position: fixed;
  top: 80px;
  right: 0px;
  width: 36px;
  height: 40px;
  background: $primary-B-100;
  /* ds-0 */
  margin-right: -50px;
  box-shadow: 0px 0px 20px rgba(20, 20, 70, 0.5);
  border-radius: 20px 0px 0px 20px;
  flex-direction: row;
  align-items: center;
  display: flex;
  padding: 0px 8px 0px 8px;
  // gap: 8px;
  z-index: 11;
  ::v-deep svg {
    width: 20px;
  }
}
.mobile-classement {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 24px;
  border-bottom: 2px solid $primary-B-100;

  &.in-viewport {
    .close-expand {
      &.enabled {
        margin-right: 0;
      }
    }
  }

  .gradient-top {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    opacity: 0;
    &.enabled {
      opacity: 1;
    }
    ::v-deep svg {
      width: 100%;
    }
  }
  .gradient-bottom {
    z-index: 1;
    position: absolute;
    bottom: 90px;
    left: 0px;
    width: 100%;
    opacity: 0;
    &.enabled {
      opacity: 1;
    }
    ::v-deep svg {
      width: 100%;
    }
  }
  .classement-item {
    display: flex;
    padding: 4px 8px;
    background: #436eb1;
    border-radius: 8px;
    flex-direction: column;
    &.current {
      .item-head {
        display: none;
      }
      .item-content {
        display: flex;
      }
    }
    &[data-quintile='1'] {
      color: $white;
      background-color: $primary-B-50;
      .item-content-head {
        .item-rank {
          color: $primary-B-100;
        }
      }
      .item-txt {
        .value {
          color: $primary-B-100;
        }
      }
    }
    &[data-quintile='2'] {
      color: $white;
      background-color: $primary-A-100;
      .item-content-head {
        .item-rank {
          color: $primary-B-100;
        }
      }
      .item-txt {
        .value {
          color: $primary-B-100;
        }
      }
    }
    &[data-quintile='3'] {
      background-color: $tertiary-B-100;
    }
    &[data-quintile='4'] {
      background-color: $tertiary-E-100;
    }
    &[data-quintile='5'] {
      background-color: $secondary-F-100;
    }
  }
  .item-head {
    display: flex;
    // gap: 8px;
    .item-rank {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      flex-basis: 28px;
    }
    .item-label {
      font-weight: 800;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      flex-grow: 1;
    }
    .item-value {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: right;
      flex-basis: 27px;
    }
  }
  .item-content {
    display: none;
    padding: 16px 20px;
  }
  .item-content-head {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    .item-rank {
      display: inline-block;
      background-color: $white;
      padding: 0px 8px;
      gap: 8px;
      border-radius: 11px;
    }
    .item-label {
      font-weight: 800;
      font-size: 16px;
      line-height: 22px;

      margin-top: 4px;
      color: $white;
    }
  }
  .item-txt {
    margin-top: 4px;
    font-size: 16px;
    line-height: 120%;
    .value {
      font-weight: 800;
      background-color: $white;
      border-radius: 4px;
      padding: 0 4px;
    }
  }
}
</style>
