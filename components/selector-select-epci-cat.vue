<template>
  <div
    class="selector"
    data-type="select"
    :class="{ opened: panelOpen, withsearch: searchEnabled }"
  >
    <div class="placeholder" @click="openPanel">
      <span
        v-if="useAnchorDown"
        class="anchor-down"
        v-html="require(`~/assets/_svg/anchor-down.svg?raw`)"
      />
      <span
        v-else
        class="anchor-right"
        v-html="require(`~/assets/_svg/anchor-right.svg?raw`)"
      />
      <span v-if="internaTerritoire">
        {{ internaTerritoire.label }}
      </span>
      <span v-else> Sélectionner {{ territoireTypeString }} </span>
    </div>
    <div class="selector-list-panel">
      <div class="selector-label box-padding">
        Choisissez {{ territoireTypeString }}
      </div>
      <div class="selector-close" @click="closePanel">
        <panelClose />
      </div>
      <div
        v-if="searchEnabled"
        class="selector-searchbox"
        :class="{ searchOn: searchOn }"
      >
        <div class="search-label" @click="openSearch">
          Rechercher {{ territoireTypeString }}
        </div>
        <span
          class="search"
          v-html="require(`~/assets/_svg/ico-search.svg?raw`)"
        />
        <span
          class="close"
          @click="closeSearch"
          v-html="require(`~/assets/_svg/ico-close.svg?raw`)"
        />
        <input ref="searchInput" v-model="searchString" type="text" />
      </div>
      <div
        v-if="vBarEnabled"
        v-bar="{ preventParentScroll: true }"
        class="select-list-wrapper vb"
      >
        <div class="select-list">
          <div
            v-for="(item, itemIndex) in filteredItems"
            :key="'item-' + itemIndex"
            class="select-item"
            :class="{
              current:
                (internaTerritoire &&
                  internaTerritoire.code &&
                  internaTerritoire.code === item.code) ||
                (internaTerritoire &&
                  internaTerritoire.id &&
                  internaTerritoire.id === item.id),
            }"
            @click="selectItem(item)"
          >
            <div class="label">{{ item.label }}</div>
            <div class="ico">
              <arrowList />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="select-list-wrapper">
        <div class="select-list">
          <div
            v-for="(item, itemIndex) in filteredItems"
            :key="'item-' + itemIndex"
            class="select-item"
            :class="{
              current:
                (internaTerritoire &&
                  internaTerritoire.code &&
                  internaTerritoire.code === item.code) ||
                (internaTerritoire &&
                  internaTerritoire.id &&
                  internaTerritoire.id === item.id),
            }"
            @click="selectItem(item)"
          >
            <div class="label">{{ item.label }}</div>
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
    internaTerritoire() {
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
      console.log('selectItem', fItem)
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
.box-padding {
  padding: 0px 40px;
}
.selector {
  padding: 10px 20px;
  background: linear-gradient(180deg, #fcfbf8 70%, #eeecdc 100%);
  border: 1px solid $primary-B-100;
  border-radius: 20px;
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
      height: calc(100% - 62px - 10px - 36px);
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
    height: calc(100% - 62px - 10px);
    //overflow: hidden;
    padding-left: 40px;
    padding-right: 12px;
    // border-radius: 7px;
    .select-list {
      .select-item {
        &:last-child {
          margin-bottom: 30px;
        }
        &.current {
          color: $mobility-75;
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
