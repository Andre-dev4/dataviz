<template>
  <div class="selector" data-type="select" :class="{ opened: panelOpen, withsearch: searchEnabled }">
    <div class="placeholder" @click="openPanel">
      <span v-if="useAnchorDown" class="ico anchor-down" v-html="require(`~/assets/_svg/anchor-down.svg?raw`)" />
      <span v-else class="ico anchor-right" v-html="require(`~/assets/_svg/anchor-right.svg?raw`)" />
      <span v-if="internalTerritoire" class="label">
        {{ internalTerritoire.label }}
      </span>
      <span v-else class="label">
        Sélectionner {{ territoireTypeString }}
      </span>
    </div>
    <div class="selector-list-panel">
      <div class="selector-label box-padding">
        Choisissez {{ territoireTypeString }}
      </div>
      <div class="selector-close" @click="closePanel">
        <panelClose />
      </div>
      <div v-if="searchEnabled" class="selector-searchbox" :class="{ searchOn: searchOn }">
        <div class="search-label" @click="openSearch">
          Rechercher {{ territoireTypeString }}
        </div>
        <span class="search" v-html="require(`~/assets/_svg/ico-search.svg?raw`)" />
        <span class="close" @click="closeSearch" v-html="require(`~/assets/_svg/ico-close.svg?raw`)" />
        <input ref="searchInput" v-model="searchString" type="text" />
      </div>
      <div v-if="vBarEnabled" v-bar="{ preventParentScroll: true }" class="select-list-wrapper vb">
        <div class="select-list">
          <div v-if="(item.label !== '0')" v-for="(item, itemIndex) in filteredItems" :key="'item-' + itemIndex" class="select-item" :class="{
            current:
              (internalTerritoire &&
                internalTerritoire.code &&
                internalTerritoire.code === item.code) ||
              (internalTerritoire &&
                internalTerritoire.id &&
                internalTerritoire.id === item.id),
          }" @click="selectItem(item)">
            <div class="label">
              <span class="no-mobile">{{ item.label }}<span
                  v-if="((item.label === 'CC des Deux Vallées') || (item.label === 'CC des Quatre Rivières'))">{{ labelReg(item.code_reg) }}</span></span>
              <span class="mobile-only">{{ item.short || item.label }}<span
                  v-if="((item.label === 'CC des Deux Vallées') || (item.label === 'CC des Quatre Rivières'))">{{ labelReg(item.code_reg) }}</span></span>
            </div>
            <div class="ico">
              <arrowList />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="select-list-wrapper">
        <div class="select-list">
          <div v-for="(item, itemIndex) in filteredItems" :key="'item-' + itemIndex" class="select-item" :class="{
            current:
              (internalTerritoire &&
                internalTerritoire.code &&
                internalTerritoire.code === item.code) ||
              (internalTerritoire &&
                internalTerritoire.id &&
                internalTerritoire.id === item.id),
          }" @click="selectItem(item)">
            <div class="label">
              <span class="no-mobile">{{ item.label }}<span v-if="((item.label === 'CC des Deux Vallées') || (item.label === 'CC des Quatre Rivières'))">{{ labelReg(item.code_reg) }}</span></span>
              <span class="mobile-only">{{ item.short || item.label }}<span v-if="((item.label === 'CC des Deux Vallées') || (item.label === 'CC des Quatre Rivières'))">{{ labelReg(item.code_reg) }}</span></span>
            </div>
            <div class="ico">
              <arrowList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash'
import Vue from 'vue'
import Vuebar from 'vuebar'

import { mapGetters } from 'vuex'
import panelClose from '~/assets/_svg/close-panel.svg?inline'
import arrowList from '~/assets/_svg/arrow-list.svg?inline'
Vue.use(Vuebar)
export default {
  components: { panelClose, arrowList },
  props: {
    vBarEnabled: {
      type: Boolean,
      default: function () {
        return true
      },
    },
    useAnchorDown: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    searchEnabled: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    internalTypeTerritoire: {
      type: Object,
      default: function () {
        return null
      },
    },
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    current: {
      type: Object,
      default: function () {
        return null
      },
    },
    panelOpen: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    useInternalTerritoire: {
      type: Boolean,
      default: function () {
        return true
      },
    },
  },
  data() {
    return {
      searchOn: false,
      searchString: '',
    }
  },
  computed: {
    ...mapGetters({
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      current_type_territoire: 'get_current_type_territoire',
    }),
    filteredItems() {
      const _self = this
      if (!this.searchOn || this.searchString.length < 3) return this.items
      return _.filter(this.items, function (fItem) {
        return _self
          .slugify(fItem.label.toLowerCase())
          .includes(_self.slugify(_self.searchString.toLowerCase()))
      })
    },
    territoireTypeString() {
      if (!this.internalTypeTerritoire) return null
      if (this.internalTypeTerritoire.id === 'regions') return 'une région'
      else if (this.internalTypeTerritoire.id === 'departements')
        return 'un département'
      else if (this.internalTypeTerritoire.id === 'epci') return 'une epci'

      return null
    },
    internalTerritoire() {
      const _self = this
      if (this.useInternalTerritoire) {
        if (!_self.$route.params.locationSlug || !this.internalTypeTerritoire) {
          return null
        }
        return _.find(this[this.internalTypeTerritoire.id], function (fEntry) {
          return (
            _self.slugify(fEntry.label) === _self.$route.params.locationSlug
          )
        })
      } else {
        return this.current
      }
    },
  },
  methods: {
    labelReg(fCode) {
      const reg = _.find(this.$store.state.regions, function (fRegion) {
        return fRegion.code === fCode
      })
      return reg ? ' (' + reg.label + ')' : ''
    },
    openSearch() {
      this.searchOn = true
      this.$refs.searchInput.focus()
    },
    closeSearch() {
      this.searchString = ''
      this.searchOn = false
    },
    openPanel() {
      this.$emit('openPanel', true)
    },
    closePanel() {
      this.searchOn = false
      this.$emit('closePanel', false)
    },
    selectItem(fItem) {
      this.searchOn = false
      this.searchString = ''
      this.$emit('selectItem', fItem)
    },
  } /*
  ,
  watch: {
    '$route.params.territoireType': function () {

    }
  }
  */,
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';

.box-padding {
  padding: 0px 40px;
}

.selector {
  padding: 10px 20px;
  background: linear-gradient(180deg, #fcfbf8 70%, #eeecdc 100%);
  border: 1px solid $primary-B-100;
  border-radius: 20px;

  &:after {
    @include transition((opacity), 0.3s, ease-out);
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, $grey-25 70%, $grey-75 100%);
    opacity: 0;
  }

  .placeholder {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    color: $primary-B-100;

    .anchor-right {
      position: absolute;
      right: 0px;
      top: 1px;
    }

    .anchor-down {
      position: absolute;
      right: 0px;
      top: 0px;
    }
  }

  &.opened {
    .selector-list-panel {
      display: block;
    }
  }

  &.withsearch {
    .select-list-wrapper {
      height: calc(100% - 62px - 35px - 36px);

      .select-list {
        .select-item {
          &:first-child {
            border-top-color: transparent;
          }
        }
      }
    }
  }
}

.selector-close {
  position: absolute;
  top: 24px;
  right: 33px;
  cursor: pointer;
  @include transition((opacity), 0.3s, ease-out);

  &:hover {
    opacity: 0.7;
  }
}

.select-list {
  box-sizing: border-box !important;
  padding-right: 7px !important;
}

.selector-searchbox {
  margin-top: 18px;
  position: relative;
  background-color: $primary-B-75;
  margin-bottom: 10px;
  cursor: pointer;

  .search-label {
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    color: #ffffff;
    padding-top: 9px;
    padding-bottom: 8px;
    padding-left: 40px;
    padding-right: 68px;
    width: 100%;
  }

  .search {
    position: absolute;
    right: 27px;
  }

  .close {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 30px;
    top: 9px;

    ::v-deep svg {
      width: 13px;
      height: 20px;
    }

    @include transition((opacity), 0.3s, ease-out);
  }

  input {
    opacity: 0;
    pointer-events: none;
    width: 100%;
    border: 0px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    padding-top: 9px;
    padding-bottom: 8px;
    padding-left: 40px;
    padding-right: 68px;
    @include transition((opacity), 0.3s, ease-out);
  }

  &.searchOn {
    .search-label {
      display: none;
    }

    .search {
      display: none;
    }

    input {
      opacity: 1;
      pointer-events: initial;
    }

    .close {
      opacity: 1;
      pointer-events: initial;
    }
  }
}

.selector-list-panel {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;

  height: 100%;
  background-color: $primary-B-100;
  color: $white;
  display: none;

  // padding: 0px 40px;
  .select-list-wrapper {
    position: relative;
    height: calc(100% - 62px - 25px);
    //overflow: hidden;
    padding-left: 40px;
    padding-right: 12px;

    // border-radius: 7px;
    .select-list {
      .select-item {
        .ico {
          svg {
            ::v-deep path {
              @include transition((fill), 0.3s, ease-out);
            }
          }
        }

        &:last-child {
          margin-bottom: 30px;
        }

        &.current {
          color: $primary-B-25;

          .ico {
            svg {
              ::v-deep path {
                fill: $primary-B-25;
              }
            }
          }
        }

        @include transition((color), 0.3s, ease-out);

        &:hover {
          color: $mobility-75;

          .ico {
            svg {
              ::v-deep path {
                fill: $mobility-75;
              }
            }
          }
        }
      }
    }
  }

  .selector-label {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    margin: 18px 0px;
  }

  .select-item {
    position: relative;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    padding: 11px 0px 10px 0px;
    box-sizing: border-box;
    border-top: 1px solid $primary-B-75;
    cursor: pointer;

    .label {
      padding-right: 18px;
    }

    /*
    &:not(:first-child) {
      border-top: 1px solid $primary-B-75;
    }
    */
    .ico {
      position: absolute;
      right: 0px;
      top: 50%;
      margin-top: -8px;
    }
  }
}
</style>
