<template>
  <div class="selector-box selector-location-electric" :class="{ reduced }">
    <div v-if="!reduced" class="ico box-padding">
      <vehiculesGazSVG v-if="catVehic === 'gaz'" />
      <vehiculesSVG v-else />
    </div>
    <div v-if="!reduced" class="title box-padding">
      <span v-if="catVehic === 'gaz'"
        >Véhicules particuliers<br />au gaz naturel</span
      >
      <span v-else>Véhicules électriques<br />et hybrides rechargeables</span>
    </div>
    <div v-if="!reduced" class="description box-padding" :class="catVehic">
      <!--Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo
      quoque accedente quod et nomenclatores adsueti haec.-->
    </div>
    <div id="choose-territory" class="select-label box-padding">
      <span v-if="catVehic === 'gaz' || currCatVehic === 'gaz'"
        >Choisissez une région*</span
      >
      <span v-else>Choisissez un type de territoire</span>
    </div>
    <selector-radio
      v-if="catVehic === 'elec' && currCatVehic !== 'gaz'"
      class="selector territoire box-padding"
      :class="catVehic"
      :items="$store.getters.get_type_territoires"
      :current="computed_current_type_territoire"
      :internal-type-territoire="internalTypeTerritoire"
      @selectRadio="setTypeTerritoire"
    ></selector-radio>
    <selector-select-location
      class="selector list"
      :class="catVehic"
      :items="location_items"
      :panel-open="panelOpen"
      :current="current_territoire"
      :internal-type-territoire="internalTypeTerritoire"
      :search-enabled="internalTypeTerritoire.id !== 'regions'"
      @openPanel="panelOpen = true"
      @closePanel="panelOpen = false"
      @selectItem="selectItem"
    ></selector-select-location>
    <div class="selector-legend">
      <span v-if="catVehic === 'elec' && currCatVehic !== 'gaz'"
        >*Établissement public de coopération intercommunale</span
      >
      <span v-else>*Données disponibles uniquement au niveau régional</span>
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash'
import { mapGetters } from 'vuex'
import vehiculesSVG from '~/assets/_svg/vehicules.svg?inline'
import vehiculesGazSVG from '~/assets/_svg/vehicules-gaz.svg?inline'
export default {
  components: { vehiculesSVG, vehiculesGazSVG },
  props: {
    reduced: {
      type: Boolean,
      default: function () {
        return false
      },
    },
    catVehic: {
      type: String,
      default: function () {
        return 'elec'
      },
    },
  },
  data() {
    return {
      internalTerritoire: 'regions',
      internalTypeTerritoire: null,
      panelOpen: false,
    }
  },
  computed: {
    ...mapGetters({
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      types_territoires: 'get_type_territoires',
      current_type_territoire: 'get_current_type_territoire',
    }),
    computed_current_type_territoire() {
      return this.currCatVehic === 'gaz' || this.catVehic === 'gaz' ? _.find(this.types_territoires, function (fEntry) {
            return fEntry.id === 'regions'
          })
        : this.current_type_territoire
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
    current_territoire() {
      const _self = this

      if (!_self.$route.params.locationSlug) return null

      return _.find(
        this[this.computed_current_type_territoire.id],
        function (fEntry) {
          return (
            _self.slugify(fEntry.label) === _self.$route.params.locationSlug
          )
        }
      )
    },
    location_items() {
      const _self = this
      return _self[_self.internalTypeTerritoire.id]
    },
  },
  watch: {
    '$route.params.locationSlug': function () {
      this.internalTypeTerritoire = this.computed_current_type_territoire
    },
    '$route.params.territoireType': function () {
      this.internalTypeTerritoire = this.computed_current_type_territoire
    },
  },
  created() {
    this.internalTypeTerritoire = this.computed_current_type_territoire
  },
  methods: {
    setTypeTerritoire(fTerritoireType) {
      const _self = this
      this.internalTypeTerritoire = fTerritoireType      
      this.$store.commit('set_current_type_territoire', fTerritoireType)
      this.$router.push({
        name: 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug',
        params: {
          territoireType: _self.slugify(_self.current_type_territoire.label),
        },
      })
      
    },
    selectItem(fItem) {
      const _self = this
      this.panelOpen = false
      const pathByType = this.currCatVehic === 'gaz' || this.catVehic === 'gaz' ? 'gaz-territoireType-locationSlug' : 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug'
      this.$router.push({ name: pathByType, params: { territoireType: _self.slugify(_self.internalTypeTerritoire.label), locationSlug: _self.slugify(fItem.label), },})
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
.box-padding {
  padding: 0px 40px;
  &.selector {
    padding: 0px 40px;
  }
}

.page-header .page-header-selectors{
  
    width: calc(200vw + 10px);
}

.selector-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 40px 0px;
  color: $primary-B-100;

  /* white */

  background: #ffffff;
  border-radius: 40px 40px 40px 40px;
  overflow: hidden;
  flex-basis: 480px;
  max-width: 480px;
  min-height: 489px;
  &.reduced {
    min-height: 256px;
    background-color: $mobility-100;
    .selector-legend {
      color: $primary-B-100;
    }
  }
  .title {
    font-weight: 800;
    font-size: 22px;
    line-height: 140%;
    /* or 31px */

    display: flex;
    align-items: center;
    text-align: center;

    /* primary-B-100 */

    color: $primary-B-100;
    margin-top: 19px;
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */
    max-width: 403px;
    text-align: center;
    // min-height: 59px;
    /* primary-B-75 */

    color: $primary-B-75;

    margin-top: 16px;
    &.gaz {
      margin-bottom: 46px;
    }
  }
  .select-label {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    /* primary-B-100 */

    color: $primary-B-100;

    margin-top: 23px;
    margin-bottom: 14px;
  }

  .selector {
    &.territoire {
      ::v-deep .select-item {
        min-width: 130px;
      }
    }
    &.list {
      @include transition((background), 0.3s, ease-out);
      margin-top: 16px;
      min-width: 400px;
      &.gaz {
        margin-top: 0px;
      }
      ::v-deep(.selector-list-panel) {
        // padding: 0px 20px !important;
      }
      &:hover {
        ::v-deep .placeholder {
          color: $white;
        }
        ::v-deep .ico {
          svg {
            path {
              fill: $white;
            }
          }
        }
        background: $primary-B-100;
      }
    }
  }

  .selector-legend {
    margin-top: 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: $primary-B-50;
  }
}
@media screen and (max-width: 1279px) {
  .selector-box {
    .selector {
      &.list {
        min-width: 280px;
      }
      &.territoire {
        ::v-deep .select-item {
          min-width: 90px;
        }
      }
    }
    .selector-legend {
      font-size: 10px;
      line-height: 14px;
    }
    .title {
      font-size: 18px;
      line-height: 140%;
    }
    .description {
      font-size: 14px;
      line-height: 140%;
    }
    .select-label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
@media screen and (max-width: 639px) {
  .selector-box {
    .selector {
      &.list {
        width: calc(100% - 20px);
        min-width: initial;
      }
    }
  }
  .box-padding {
    padding: 0 20px;
  }
}
</style>
