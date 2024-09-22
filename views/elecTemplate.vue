<template>
  <div class="page">
    <div class="statut-sticky" :class="{ isOn: stickyStatut }">
      <div class="statut-title">
        <span class="title-label"> statut des territoires </span>
      </div>
      <div class="statut-legend">
        <div v-for="(quintile, quintileIndex) in quintiles" :key="'Quintile-' + quintileIndex" class="statut-legend-item"
          :class="quintile.id">
          {{ quintile.label }}
        </div>
      </div>
      <div v-if="current_type_territoire.id === 'epci' && current_territoire" class="epci-compare-switch">
        <div class="switch-label">
          <span class="no-mobile-head">Comparer aux autres…</span>
          <span class="mobile-head-only">Comparer aux même…</span>
        </div>
        <div class="switch-wrapper">
          <selector-select-location class="selector list no-mobile-head" :items="epci_categories_mobile"
            :panel-open="panelOpenEpciMobile" :current="current_epci_category_mobile" :use-internal-territoire="false"
            :use-anchor-down="true" :v-bar-enabled="false" @openPanel="panelOpenEpciMobile = true"
            @closePanel="panelOpenEpciMobile = false" @selectItem="selectClass"></selector-select-location>

          <div v-for="(item, itemIndex) in epci_categories" :key="'item-' + itemIndex"
            class="header-epci-switcher-item mobile-head-only" :class="{ current: current_epci_category.id === item.id }"
            @click="selectClass(item)">
            {{ item.label }}
          </div>
        </div>
      </div>
      <!--
      <div
        v-if="current_type_territoire.id === 'epci' && current_territoire"
        class="epci-compare-switch mobile-only"
      >
        <div class="switch-label">Comparer aux autres…</div>
        <div class="switch-wrapper">
          <selector-select-location
            class="selector list"
            :items="epci_categories_mobile"
            :panel-open="panelOpenEpciMobile"
            :current="current_epci_category_mobile"
            :use-internal-territoire="false"
            :use-anchor-down="true"
            :v-bar-enabled="false"
            @openPanel="panelOpenEpciMobile = true"
            @closePanel="panelOpenEpciMobile = false"
            @selectItem="selectClass"
          ></selector-select-location>
        </div>
      </div>
      -->
    </div>
    <div class="page-header">
      <div class="page-header-wrapper">
        <div class="page-header-subtitle">
          <span v-if="$route.name === 'index'">datavisualisation</span>
          <nuxt-link v-else to="/">datavisualisation — mobilités propres</nuxt-link>
        </div>
        <div class="page-header-title">
          <span v-if="$route.name === 'index'">mobilités propres</span>
          <span v-else-if="currCatVehic === 'gaz'">Véhicules particuliers au gaz naturel</span>
          <span v-else>Véhicules électriques et hybrides rechargeables</span>
        </div>
        <div v-if="current_territoire" class="page-header-territoire-title mobile-only">
          {{ current_territoire.label }}
        </div>
        <div class="page-header-selectors" :class="{ 'no-mobile': $route.name === 'index' }">
          <div class="location-selector-box">
            <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'" :cat-vehic="'elec'"></box-select-page-head>
          </div>

          <div v-if="($route.name === 'index') && !$store.state.versionEnedis" key="1" class="location-selector-box">
            <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'" :cat-vehic="'gaz'"></box-select-page-head>
          </div>
          <div v-else-if="$route.name !== 'index' && current_territoire" key="2" class="elec-data-box">
            <module-vehicule-count :count-datas="vehiculeCountDatas" :location-field="locationField"
              :location-code="current_territoire.code"></module-vehicule-count>
            <module-pdc-count :count-datas="pdcCountDatas"></module-pdc-count>
          </div>
        </div>
        <div v-if="$route.name === 'index'" class="page-header-selectors mobile-only"
          :data-carrousel-index="carrouselIndex">
          <div class="selector-mobile-wrapper" v-touch:start="startHandler" v-touch:end="endHandler"
            v-touch:swipe.left="swipeHandlerLeft" v-touch:swipe.right="swipeHandlerRight">
            <div class="location-selector-box">
              <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'" :cat-vehic="'elec'"></box-select-page-head>
            </div>

            <div v-if="($route.name === 'index') && !$store.state.versionEnedis" key="1" class="location-selector-box">
              <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'" :cat-vehic="'gaz'"></box-select-page-head>
            </div>
            <div v-else-if="$route.name !== 'index' && current_territoire" key="2" class="elec-data-box">
              <module-vehicule-count :count-datas="vehiculeCountDatas" :location-field="locationField"
                :location-code="current_territoire.code"></module-vehicule-count>
              <module-pdc-count :count-datas="pdcCountDatas"></module-pdc-count>
            </div>
          </div>
        </div>
        <div v-if="($route.name === 'index') && !$store.state.versionEnedis" class="carrousel-controls mobile-only flex">
          <div class="carrousel-controls-item" :class="{ current: carrouselIndex === 0 }" @click="carrouselIndex = 0">
          </div>
          <div class="carrousel-controls-item" :class="{ current: carrouselIndex === 1 }" @click="carrouselIndex = 1">
          </div>
        </div>
      </div>
    </div>
    <div class="page-content" :data-loading-state="loadingState">
      <div v-if="current_type_territoire.id === 'epci' && current_territoire" class="header-epci"
        :data-cat="current_epci_category.id">
        <div class="header-epci-switch-wrapper">
          <div class="header-epci-text">
            Vous pouvez comparer cet EPCI aux autres EPCI de même…
          </div>
          <div class="header-epci-switcher">
            <div v-for="(item, itemIndex) in epci_categories" :key="'item-' + itemIndex" class="header-epci-switcher-item"
              :class="{ current: current_epci_category.id === item.id }" @click="selectClass(item)">
              {{ item.label }}
            </div>
          </div>
        </div>
        <div v-if="current_territoire && current_epci_category.id === 'classe'" class="header-epci-infos">
          <div class="header-epci-infos-head">
            <div class="header-epci-infos-head-box">
              <div class="epci-info-title">
                {{ current_territoire.label }}
              </div>
              <div class="epci-info-desc">
                est un EPCI* de
                {{ current_territoire.classe.replace('CLASSE', 'classe') }}
              </div>
              <div class="epci-info-legend">
                *Établissement public de coopération intercommunale
              </div>
            </div>
            <div class="header-epci-infos-head-box no-mobile">
              <div class="epci-info-more">
                En savoir plus sur les classes d’EPCI
              </div>
              <div class="epci-info-bt-wrapper">
                <a class="epci-info-bt" href="/fs-2021-dt-02-colard-accessibilite-zones-peripheriques-avril.pdf" download>
                  <div>Télécharger le pdf (1.2mo)</div>
                  <div class="ico" v-html="require(`~/assets/_svg/bt-arrow-down.svg?raw`)" />
                </a>
              </div>
            </div>
          </div>
          <div v-if="current_epci_category.id === 'classe'" class="header-epci-infos-content">
            <span class="classe-label">{{
              current_territoire.classe.replace('CLASSE', 'classe')
            }}
              :</span>
            {{ txtEPCI[current_territoire.classe.replace('CLASSE ', '')] }}
          </div>
          <div class="header-epci-infos-content-box mobile-only">
            <div class="epci-info-more">
              En savoir plus sur les classes d’EPCI
            </div>
            <div class="epci-info-bt-wrapper">
              <a class="epci-info-bt" href="/fs-2021-dt-02-colard-accessibilite-zones-peripheriques-avril.pdf" download>
                <div>Télécharger le pdf (1.2mo)</div>
                <div class="ico" v-html="require(`~/assets/_svg/bt-arrow-down.svg?raw`)" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div v-if="current_territoire && loadingState === 'loaded'">
          <div class="section-title">
            <span class="title-label"> statut des territoires </span>
          </div>
          <div class="section-legend">
            <div v-for="(quintile, quintileIndex) in quintiles" :key="'Quintile-' + quintileIndex"
              class="section-legend-item" :class="quintile.id">
              {{ quintile.label }}
            </div>
          </div>
        </div>
        <div v-if="current_territoire" id="quintile-graph-vehic" class="section-graph">
          <div class="graph-title">
            Pourcentage de
            <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span><span v-else>véhicules électriques et hybrides
              rechargeables</span>
            par rapport au total de véhicules immatriculés
          </div>
          <quintiles-graph :cat="'vehic'" :quintiles="quintiles" :location-datas="locationDatas"
            :current-territoire="current_territoire" :epci-cat="current_epci_category" />
        </div>
        <div v-if="current_territoire" class="section-bt no-mobile">
          <span class="bt-download" :data-exporting="downloadindGraphVehic" @click="callExport('quintile-graph-vehic')">
            Télécharger le graphique
            <div v-if="!downloadindGraphVehic" class="ico" v-html="require(`~/assets/_svg/bt-arrow-down.svg?raw`)" />
            <div v-else class="ico">
              <span class="rotating" v-html="require(`~/assets/_svg/icon-ui-spinner.svg?raw`)"></span>
            </div>
          </span>
        </div>
        <div v-if="current_territoire" id="quintile-graph-pdc" class="section-graph" :class="{ limited: limmitedGraph }">
          <!--
          <div class="graph-title">
            Nombre de <span v-if="currCatVehic === 'gaz'">stations GNV</span
            ><span v-else>points de charge publiques</span> pour 1 000
            <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
            ><span v-else>véhicules électriques et hybrides rechargeables</span>
          </div>
          -->
          <div class="graph-title">
            Nombre de <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span><span v-else>véhicules électriques et
              hybrides rechargeables</span> par
            <span v-if="currCatVehic === 'gaz'">station GNV</span><span v-else>point de charge publique</span>
          </div>
          <quintiles-graph-reversepdc :cat="'pdc'" :pdc-count="pdcCountDatas" :quintiles="quintiles"
            :location-datas="locationDatas" :current-territoire="current_territoire" :epci-cat="current_epci_category" />
        </div>
        <div v-if="current_territoire" class="section-bt no-mobile">
          <span class="bt-download" :data-exporting="downloadindGraphPdc" @click="callExport('quintile-graph-pdc')">
            Télécharger le graphique
            <div v-if="!downloadindGraphPdc" class="ico" v-html="require(`~/assets/_svg/bt-arrow-down.svg?raw`)" />
            <div v-else class="ico">
              <span class="rotating" v-html="require(`~/assets/_svg/icon-ui-spinner.svg?raw`)"></span>
            </div>
          </span>
        </div>
        <div v-if="current_territoire" id="quintile-graph-mapping" class="section-graph no-mobile"
          :class="{ limited: limmitedGraph }">
          <div class="graph-title center">
            <div class="smaller uppercase">Mapping</div>
            <div class="bigger">
              <span v-if="current_type_territoire.id === 'regions'">des régions</span>
              <span v-else-if="current_type_territoire.id === 'departements'">des départements</span>
              <span v-else-if="current_type_territoire.id === 'epci'">
                des EPCI<span v-if="current_epci_category.id === 'classe'">
                  de classe {{ current_territoire.classe }}</span><span v-else> en {{ current_reg.label }}</span>
              </span>
            </div>
          </div>
          <quintiles-graph-2axis-reverse :downloadindGraphMapping="downloadindGraphMapping" :cat="'mapping'"
            :pdc-count="pdcCountDatas" :quintiles="quintiles" :location-datas="locationDatas"
            :current-territoire="current_territoire" :epci-cat="current_epci_category" :chart-height="'100%'"
            @callExport="callExport" />
        </div>
        <div v-if="current_territoire" class="section-bt">
          <span class="bt-ore" @click="scrollChooseTerritory">
            <span class="label">Visualiser un autre territoire</span>
            <div class="ico" v-html="require(`~/assets/_svg/bt-arrow-up.svg?raw`)" />
          </span>
        </div>
      </div>
      <nuxt-child />
    </div>
    <div v-if="$route.name !== 'index'" class="select-location-mobile mobile-only"
      :class="{ expanded: mobileLocationSelectExpanded }">
      <div v-if="$route.name ===
        'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug'
        " class="location-selector-box">
        <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'"
          :cat-vehic="'elec'"></box-select-page-head>
      </div>

      <div v-else class="location-selector-box">
        <box-select-page-head class="selector-electric" :reduced="$route.name !== 'index'"
          :cat-vehic="'gaz'"></box-select-page-head>
      </div>
    </div>
    <div v-if="$route.name !== 'index'" class="select-location-toggle mobile-only"
      :class="{ expanded: mobileLocationSelectExpanded }" @click="mobileLocationSelectExpandToggle">
      <div>Changer de territoire</div>
      <span v-if="!mobileLocationSelectExpanded" v-html="require(`~/assets/_svg/arrow-list.svg?raw`)" />
      <span v-else v-html="require(`~/assets/_svg/bt-arrow-up.svg?raw`)" />
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash'
import axios from 'axios'
import { scrollTo } from 'vue-scrollto'
import { mapGetters } from 'vuex'
import * as UTILS from '~/commons/utils/index.js'
import { getODSRequest } from '~/api/config'
let html2canvas
if (process.browser) {
  html2canvas = require('html2canvas')
}

export default {
  middleware: ['fetchRegions'],
  data: function () {

    return {
      txtEPCI: {
        M: 'Les 22 métropoles administratives (22 EPCI, 19,1 millions d’habitants)',
        A: 'La proche banlieue parisienne : une attraction de Paris de plus en plus forte (12 EPCI, 2,9 millions d’habitants)',
        B: 'Périurbain de la région parisienne et de certaines grandes métropoles ou zones transfrontalières (79 EPCI, 3,9 millions d’habitants)',
        C: 'Périurbain élargi et campagne autour des métropoles ou de villes moyennes : une population qui augmente et utilise de plus en plus la voiture (376 EPCI, 12,4 millions d’habitants)',
        D: 'EPCI des villes moyennes (114 EPCI, 11,6 millions d’habitants)',
        E: 'EPCI de villes moyennes ou petites, du rural - EPCI XXL (Cherbourg, Pays basque)(286 EPCI, 9,5 millions d’habitants)',
        F: 'EPCI ruraux et périurbain de villes moyennes : un rapport déséquilibré emplois/actifs occupés pour des territoires de plus en plus périurbains (201 EPCI, 3 millions d’habitants)',
        G: 'EPCI ruraux : territoires vieillissant avec une faible densité (146 EPCI, 1,7 million d’habitants)',
      },
      touching: false,
      downloadindGraphVehic: false,
      downloadindGraphPdc: false,
      downloadindGraphMapping: false,
      mobileLocationSelectExpanded: false,
      carrouselIndex: 0,
      prevOffset: 0,
      panelOpenEpciMobile: false,
      loadingState: 'loading',
      lastRequest: '',
      inLocationDatas: null,
      locationDatas: null,
      current_epci_category: {
        id: 'classe',
        label: 'Classe',
      },
      epci_categories: [
        {
          id: 'classe',
          label: 'Classe',
        },
        {
          id: 'territoire',
          label: 'Région',
        },
      ],
      current_epci_category_mobile: {
        id: 'classe',
        label: 'EPCI de même classe',
        short: 'Classes',
      },
      epci_categories_mobile: [
        {
          id: 'classe',
          label: 'EPCI de même classe',
          short: 'Classes',
        },
        {
          id: 'territoire',
          label: 'EPCI de la même région',
          short: 'Régions',
        },
      ],
      quintiles: [
        {
          id: 'leaders',
          label: 'Leaders',
          color: '#436eb1',
        },
        {
          id: 'bons',
          label: 'Bons',
          color: '#00b4a0',
        },
        {
          id: 'danslamoyenne',
          label: 'Dans la moyenne',
          color: '#8ad279',
        },
        {
          id: 'moinsbons',
          label: 'Moins bons',
          color: '#f09429',
        },
        {
          id: 'enretard',
          label: 'En retard',
          color: '#eb674c',
        },
      ],
    }
  },
  async fetch() {
    console.log('async fetch --> ANDRE')
    await this.updateDatas()
    if (this.$route.name !== 'index') this.loadingState = 'loaded'
  },
  mounted: function () {
    if (window) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy: function () {
    if (window) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  computed: {
    ...mapGetters({
      communes: 'get_communes',
      departements: 'get_departements',
      regions: 'get_regions',
      epci: 'get_EPCI',
      current_type_territoire: 'get_current_type_territoire',
      current_type_vehicule: 'get_current_type_vehicule',
      type_vehicules: 'get_type_vehicules',
      windowWidth: 'get_windowWidth',
    }),
    limmitedGraph() {
      return ((this.current_type_vehicule.slug !== 'tous-type') && (this.current_type_vehicule.slug !== 'particuliers'))
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
    current_territoire() {
      const _self = this
      if (!_self.$route.params.locationSlug) return null
      return _.find(this[this.current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug
      })
    },
    current_reg() {
      const _self = this
      if (!_self.$route.params.locationSlug) return null
      const territoire = _.find(
        this[this.current_type_territoire.id],
        function (fEntry) {
          return (
            _self.slugify(fEntry.label) === _self.$route.params.locationSlug
          )
        }
      )
      const region = _.find(this.regions, function (fRegion) {
        return fRegion.code === territoire.code_reg
      })
      return region
    },

    locationField() {
      switch (this.current_type_territoire.id) {
        case 'departements':
          return 'code_dpt' // 'code_dpt' // Fix bug to retrieve code_dpt
        case 'regions':
          return 'code_reg'
        case 'epci':
          return 'code_epci'
        default:
          return null
      }
    },
    locationSlug() {
      return this.$route.params.locationSlug
    },
    vehiculeCountDatas() {
      const _self = this
      if (!this.locationDatas) return
      const dataEntry = _.find(this.locationDatas, function (fEntry) {
        return fEntry.code === _self.current_territoire.code
      })
      if (!dataEntry) return null
      if (this.currCatVehic === 'gaz') return dataEntry.c_total_gnv
      return dataEntry['c_' + _self.current_type_vehicule.id]
    },
    pdcCountDatasV0() {
      const _self = this
      if ((_self.currCatVehic === 'gaz') && _self.current_territoire) {
        return _self.current_territoire.stations_gnv_reg
      }
      console.log('ANDRE-->_self.inLocationDatas22', JSON.stringify(_self.inLocationDatas));
      const sumPDC = _.sum(
        _.map(_.groupBy(_self.inLocationDatas, 'code_epci'), function (fEntry) {
          return _self.current_type_territoire.id === 'regions' ? fEntry[0].pdc_reg : (_self.current_type_territoire.id === 'departements' ? fEntry[0].pdc_dep : fEntry[0].pdc_epci)
        })
      )
      return sumPDC
    },
    pdcCountDatas() {
      const _self = this
      if ((_self.currCatVehic === 'gaz') && _self.current_territoire) {
        return _self.current_territoire.stations_gnv_reg
      }

      console.log('ANDRE-->_self.inLocationDatas', JSON.stringify(_self.inLocationDatas));

      const checkDataUnicityReg = _self.inLocationDatas ?  _self.inLocationDatas.every((val) => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;
      const checkDataUnicityDep = _self.inLocationDatas ?  _self.inLocationDatas.every((val) => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;
      const checkDataUnicityEpci = _self.inLocationDatas ?  _self.inLocationDatas.every((val) => val.pdc_reg === _self.inLocationDatas[0].pdc_reg) : false;

      if(!checkDataUnicityReg || !checkDataUnicityDep || !checkDataUnicityEpci) {

        console.error('Error: Les données de PDC ne sont pas uniques pour le territoire courant');
      }

      console.log('ANDRE-->checkDataUnicityReg', checkDataUnicityReg);
      console.log('ANDRE-->checkDataUnicityDep', checkDataUnicityDep);
      console.log('ANDRE-->checkDataUnicityEpci', checkDataUnicityEpci);

      console.log('ANDRE-->_self.current_type_territoire.id', _self.current_type_territoire.id);

      return _self.current_type_territoire.id === 'regions' && _self.inLocationDatas ? _self.inLocationDatas[0].pdc_reg : (_self.current_type_territoire.id === 'departements' && _self.inLocationDatas ? _self.inLocationDatas[0].pdc_dep : (_self.current_type_territoire.id === 'epci' && _self.inLocationDatas ? _self.inLocationDatas[0].pdc_epci : 0))
    },
    percVehic() {
      // const _self = this
      return null
    },
    stickyStatut: function () {
      // current_type_territoire.id
      // current_epci_category.id
      if (this.windowWidth < 640) {
        if (this.current_type_territoire.id === 'epci')
          return this.prevOffset > 900 && this.prevOffset < 2500
        return this.prevOffset > 780 && this.prevOffset < 2000
      }

      if (this.current_type_territoire.id === 'epci')
        return this.prevOffset > 880 && this.prevOffset < 2000
      return this.prevOffset > 560 && this.prevOffset < 2000
    },
  },
  watch: {
    'current_territoire.code': async function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      this.loadingState = 'loading'
      this.mobileLocationSelectExpanded = false
      await this.updateDatas()
      this.loadingState = 'loaded'
    },
    'current_epci_category.id': async function () {
      this.loadingState = 'loading'
      await this.updateDatas()
      this.loadingState = 'loaded'
    },
  },
  methods: {
    startHandler() {
      if (this.$store.state.versionEnedis) return
      this.touching = true
    },
    endHandler() {
      if (this.$store.state.versionEnedis) return
      // console.log('endHandler')
      this.touching = false
    } /*
    ,
    movingHandler(fEv) {
      if (this.touching) {
        console.log('moving', fEv)
      }
      
    }
    */,
    swipeHandlerLeft() {
      if (this.$store.state.versionEnedis) return
      // console.log('swipe L')
      this.touching = false
      //this.carrouselIndex = 1
      this.setCarrouselIndex(this.carrouselIndex === 0 ? 1 : 0);
    },
    swipeHandlerRight() {
      if (this.$store.state.versionEnedis) return
      // console.log('swipe R')
      this.touching = false
      //this.carrouselIndex = 0
      this.setCarrouselIndex(this.carrouselIndex === 1 ? 0 : 1);
    },
    setCarrouselIndex(index) {
      this.carrouselIndex = index;
    },
    async updateDatas() {
      if (!this.current_territoire) return
      console.log('this.locationField', this.locationField, 'this.current_territoire.code', this.current_territoire.code)
      const _self = this
      const req =
        '&q=' +
        this.locationField +
        '=' +
        this.current_territoire.code +
        '&rows=-1'
      console.log('inLocationDatas', getODSRequest(req))
      const inLocationDatas = await axios
        .get(getODSRequest(req))
        .then((response) => {
          return _.map(response.data.records, 'fields')
        })
      console.log('req', req)
      this.inLocationDatas = inLocationDatas

      let reqGraph = '&x=' + this.locationField.replace('code_', 'libelle_')
      _.each(this.type_vehicules, function (fType) {
        reqGraph +=
          '&y.c_' + fType.id + '.func=SUM&y.c_' + fType.id + '.expr=' + fType.id
        reqGraph +=
          '&y.c_' +
          fType.idAutre +
          '.func=SUM&y.c_' +
          fType.idAutre +
          '.expr=' +
          fType.idAutre
      })

      if (_self.current_type_territoire.id === 'epci') {
        reqGraph += '&q='
        if (_self.current_epci_category.id === 'classe') {
          reqGraph += 'classe_epci=' + _self.current_territoire.classe
        } else if (_self.current_epci_category.id === 'territoire') {
          // reqGraph += _self.locationField + '=' + _self.current_territoire.code
          // reqGraph += '(code_reg' + '=' + _self.current_territoire.code_reg + ')or(code_epci=' + _self.current_territoire.code + ')'
        }
      }
      if (this.currCatVehic === 'gaz') {
        reqGraph += '&y.c_total_gnv.func=SUM&y.c_total_gnv.expr=total_gnv'
      }
      console.log('ANDRE-->reqGraph', reqGraph);
      // console.log('reqGraph', reqGraph)
      const graphDatas = await axios
        .get(getODSRequest(reqGraph, 'analyze'))
        .then((response) => {
          // if(process.browser) console.log('response.data', response.data)
          console.log('ANDRE-->response', JSON.stringify(response));
          
          return _.map(response.data, function (fEntry) {
            console.log('ANDRE-->fEntry', JSON.stringify(fEntry));
            console.log('ANDRE-->_self[_self.current_type_territoire.id]', JSON.stringify(_self[_self.current_type_territoire.id]));
            const territoireObject = _.find(
              _self[_self.current_type_territoire.id],
              function (fTerritory) {
                return fTerritory.label === fEntry.x
              }
            )
            if (!territoireObject)
              console.log('territoireObject', territoireObject, fEntry.x)
            let processedEPCI
            if (territoireObject.type === 'epci') {
              processedEPCI = _.filter(_self.epci, function (fEpci) {
                if (territoireObject.type === 'reg') {
                  return fEpci.code_reg === territoireObject.code
                } else if (territoireObject.type === 'dpt') {
                  return fEpci.code_dpt === territoireObject.code
                } else {
                  return fEpci.code === territoireObject.code
                }
              })
            } else {
              processedEPCI = _.filter(_self.communes, function (fCommune) {
                if (territoireObject.type === 'reg') {
                  return fCommune.code_reg === territoireObject.code
                } else if (territoireObject.type === 'dpt') {
                  return fCommune.code_dpt === territoireObject.code
                } else {
                  return fCommune.code_epci === territoireObject.code
                }
              })
            }

            // let processedEPCI = filteredEpciByComm
            if (
              territoireObject.type === 'epci' &&
              _self.current_epci_category.id === 'classe'
            ) {
              processedEPCI = _.uniqBy(processedEPCI, 'code_epci')
            }
            // console.log('processedEPCI', processedEPCI)


            console.log('processedEPCI', territoireObject.label, territoireObject.code, processedEPCI, '>>sum_pdc>>', _.sumBy(_.uniqBy(processedEPCI, 'code_epci'), function (fEpci) {
              return fEpci.pdc_epci
            }))

            /*
            console.log('filteredEpci', territoireObject.label, processedEPCI, territoireObject.label, _.sumBy(processedEPCI, function (fEpci) {
                return fEpci.pdc_epci
              }), _.map(processedEPCI, 'code_epci'))
              */

            return {
              ...fEntry,
              ...territoireObject,
              sum_pdc: _.sumBy(_.uniqBy(processedEPCI, 'code_epci'), function (fEpci) {
                return fEpci.pdc_epci
              }),
            }
          })
        })

      this.locationDatas = graphDatas
    },
    mobileLocationSelectExpandToggle() {
      this.mobileLocationSelectExpanded = !this.mobileLocationSelectExpanded
    },
    selectClass(fItem) {
      const _self = this
      const newClass = _.find(_self.epci_categories, function (fEntry) {
        return fEntry.id === fItem.id
      })
      const newClassMobile = _.find(
        _self.epci_categories_mobile,
        function (fEntry) {
          return fEntry.id === fItem.id
        }
      )
      this.current_epci_category = newClass
      this.current_epci_category_mobile = newClassMobile
      this.panelOpenEpciMobile = false
    },
    scrollChooseTerritory() {
      scrollTo('#choose-territory', 500, { easing: 'ease-in-out', offset: -50 })
    },
    handleScroll: function (e) {
      this.panelOpenEpciMobile = false
      this.prevOffset = window.pageYOffset
    },
    callExport(fID) {
      const _self = this
      this.exporting = true
      if (fID === 'quintile-graph-vehic') this.downloadindGraphVehic = true
      else if (fID === 'quintile-graph-pdc') this.downloadindGraphPdc = true
      else if (fID === 'quintile-graph-mapping')
        this.downloadindGraphMapping = true

      // this.watermarkOn = true

      setTimeout(function () {
        const element = document.querySelector('#' + fID)
        // console.log('element', element.getBoundingClientRect())
        const elSize = element.getBoundingClientRect()
        const margin = 20
        html2canvas(element, {
          allowTaint: true,
          x: -margin,
          y: -margin,
          width: elSize.width + margin * 2,
          height: elSize.height + margin * 2,
          /* x: -55,
          y: 0,
          scrollX: 0,
          scrollY: 0, */
          // width: 1075,
          // height: 760,
          // removeContainer: false,
          // windowWidth: 1300,
          // windowHeight: 760,
          onclone: function (document) {
            const el = document.querySelectorAll('.section-graph')
            const elBT = document.querySelectorAll('.bt-download')
            const elSticky = document.querySelectorAll('.howtoread-sticky')
            elSticky.forEach(function (fEl) {
              fEl.classList.add('hideExport')
            })
            elBT.forEach(function (fEl) {
              fEl.classList.add('hideExport')
            })
            el.forEach(function (fEl) {
              fEl.classList.add('watermarkOn')
            })

            // _self.watermarkOn = false
          },
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png', 1.0)
          const img = new Image()
          img.crossOrigin = 'Anonymous'
          img.id = 'getshot'
          img.src = imgData
          document.body.appendChild(img)

          const a = document.createElement('a')
          a.href = img.src
          a.download = _self.$store.state.appSlugID + '.png'
          a.click()
          document.body.removeChild(img)
          _self.isExporting = false
          if (fID === 'quintile-graph-vehic')
            _self.downloadindGraphVehic = false
          else if (fID === 'quintile-graph-pdc')
            _self.downloadindGraphPdc = false
          else if (fID === 'quintile-graph-mapping')
            _self.downloadindGraphMapping = false
          // _self.$store.commit('set_exportingcountry_state', false)
        })

        // _self.exportAsPDF(fID)
      }, 10)
    },
    async exportAsPDF(fID) {
      const _self = this
      // return
      await UTILS.exportGTAB(fID, {
        title: '',
        exportTitle: _self.$store.state.appSlugID + '.pdf',
        filters: [],
      })

      this.isDownloading = false
      this.exporting = false
    },
  },
}
</script>
<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';

.location-selector-box {
  display: flex;
  flex-basis: 480px;
}

.page-header-wrapper {
  position: relative;
  z-index: 2;
}

.page-header {
  position: relative;
  background-color: $primary-100;
  padding-top: 55px;
  color: $white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 20px rgb(144 149 162 / 30%);

  .page-header-wrapper {
    justify-content: flex-end;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: $header-gradient;
    z-index: 1;
  }

  .page-header-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    a {
      color: $white;
    }
  }

  .page-header-title {
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.02em;
  }

  .page-header-territoire-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */
    margin-top: 8px;
    text-align: center;
    text-transform: uppercase;
  }

  .page-header-selectors {
    @include transition((opacity), 0.3s, ease-out);
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    align-items: flex-end;
    padding: 0px;
    gap: 20px;
    position: relative;
  }

  .elec-data-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
  }
}

.page-content {
  margin-top: 40px;
  color: $primary-B-100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  .section {
    max-width: 1068px;
    overflow: hidden;
  }

  opacity: 0;
  @include transition((opacity), 0.3s, ease-out);

  &[data-loading-state='loading'] {
    .header-epci {
      display: none;
    }
  }

  &[data-loading-state='loaded'] {
    opacity: 1;
  }
}

.section-title {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    top: 50%;
    margin-top: -1px;
    background-color: $primary-B-100;
  }

  .title-label {
    position: relative;
    z-index: 1;
    background-color: $white;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    padding: 0px 8px;
  }
}

.section-graph {
  position: relative;

  &.limited {
    &+.section-bt .bt-download {
      opacity: 0;
      pointer-events: none;
    }

    ::v-deep .graph-txt-desc {
      opacity: 0;
      pointer-events: none;
    }

    ::v-deep .section-legend {
      opacity: 0;
      pointer-events: none;
    }

    ::v-deep .info-zoom {
      opacity: 0;
      pointer-events: none;
    }

    ::v-deep .ranking-type {
      opacity: 0;
      pointer-events: none;
    }

    ::v-deep .mobile-classement {
      border-bottom: 0;
    }

    ::v-deep .mobile-classement,
    ::v-deep .graph {

      .gradient-top,
      .gradient-bottom,
      .classement-item,
      .bt-wrapper {
        opacity: 0;
      }

      .graph-container {
        opacity: 0;
        pointer-events: none;
      }

      &:before {
        content: "";
        position: absolute;
        width: 32px;
        height: 32px;
        background-image: url('/indication-icon.svg');
        z-index: 1;
        top: 50%;
        left: 50%;
        margin-top: -46px;
        margin-left: -16px;
      }

      &:after {
        position: absolute;
        white-space: pre;
        /* or pre-wrap */
        content: "Indicateurs non représentatifs pour cette sélection. \A Le graphique est non disponible.";
        padding-top: 50px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $grey-25;
        border-radius: 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        /* or 22px */

        text-align: center;
        letter-spacing: 0.1em;

        /* primary-B-100 */

        color: $primary-B-100;
      }
    }

    ::v-deep .info-box {
      position: relative;
      background-color: transparent !important;
      border-color: transparent !important;

      &:not(.first) {
        &[data-quintile='1'] {
          background-color: transparent !important;
          border-color: transparent !important;
        }

        &[data-quintile='2'] {
          background-color: transparent !important;
          border-color: transparent !important;
        }

        &[data-quintile='3'] {
          background-color: transparent !important;
          border-color: transparent !important;
        }

        &[data-quintile='4'] {
          background-color: transparent !important;
          border-color: transparent !important;
        }

        &[data-quintile='5'] {
          background-color: transparent !important;
          border-color: transparent !important;
        }
      }

      &:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $grey-25;
        border-radius: 20px;
      }
    }
  }
}

.section-legend {
  margin-top: 13px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  .section-legend-item {
    min-width: 140px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 5px;
    border-radius: 20px;

    &.leaders {
      background-color: $primary-B-50;
    }

    &.bons {
      background-color: $primary-A-100;
    }

    &.danslamoyenne {
      background-color: $tertiary-B-100;
    }

    &.moinsbons {
      background-color: $tertiary-E-100;
    }

    &.enretard {
      background-color: $secondary-F-100;
    }
  }
}

.statut-title {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: $white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 8px;
}

.statut-legend {
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  .statut-legend-item {
    min-width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 10px 2px 10px;
    gap: 5px;
    border-radius: 20px;

    &.leaders {
      background-color: $primary-B-50;
    }

    &.bons {
      background-color: $primary-A-100;
    }

    &.danslamoyenne {
      background-color: $tertiary-B-100;
    }

    &.moinsbons {
      background-color: $tertiary-E-100;
    }

    &.enretard {
      background-color: $secondary-F-100;
    }
  }
}

.graph-title {
  margin-top: 45px;
  font-weight: 800;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 10px;

  &:not(.center) {
    max-width: 684px;
  }

  &.center {
    text-align: center;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .bigger {
    font-weight: 800;
    font-size: 40px;
    line-height: 120%;
  }

  .smaller {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
  }
}

.header-epci {
  margin-top: -40px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 980px;

  .header-epci-switch-wrapper {
    background-color: $primary-B-100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
    gap: 126px;

    .header-epci-text {
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;
      color: $white;
      max-width: 390px;
    }

    .header-epci-switcher {
      display: flex;
    }

    .header-epci-switcher-item {
      border-style: solid;
      background-color: $primary-B-75;
      color: $primary-B-25;
      border-radius: 20px 0px 0px 20px;
      border-width: 6px 0px 6px 6px;
      border-color: $primary-B-100;
      padding: 10px 20px;
      cursor: pointer;

      &:last-child {
        border-radius: 0px 20px 20px 0px;
        border-width: 6px 6px 6px 0px;
        // border-color: $white;
      }

      &.current {
        background-color: $white;
        color: $primary-B-100;
        border-width: 6px 0px 6px 6px;
        border-color: $white;
      }

      &:not(.current) {
        &:hover {
          background-color: $primary-B-50;
          color: $white;
        }
      }

      @include transition((background-color, color), 0.3s, ease-out);
    }
  }

  &[data-cat='territoire'] {
    .header-epci-switch-wrapper {
      border-radius: 0px 0px 40px 40px;
    }
  }

  .header-epci-infos {
    background: $secondary-F-25;
    border-radius: 0px 0px 40px 40px;
    padding: 30px 60px;

    .header-epci-infos-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0px;

      .header-epci-infos-head-box {}

      .epci-info-title {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.2em;
      }

      .epci-info-desc {
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        letter-spacing: -0.02em;
      }

      .epci-info-legend {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
      }

      .header-epci-infos-head-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px;

        &:last-child {
          align-items: center;
          gap: 8px;
        }
      }
    }

    .epci-info-more {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }

    .epci-info-bt-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .epci-info-bt {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-content: center;
      padding: 0px;
      background: $primary-B-100;
      border-radius: 20px;
      color: $white;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      padding: 6px 16px;
      display: flex;
      flex-direction: row;
      gap: 8px;
      cursor: pointer;
      @include transition((background-color, color), 0.3s, ease-out);

      &:hover {
        background-color: $white;
        color: $primary-B-100;

        .ico {
          ::v-deep svg {
            path {
              fill: $primary-B-100 !important;
            }
          }
        }
      }

      .ico {
        display: flex;
        width: 20px;
        align-items: center;
        justify-content: center;

        ::v-deep svg {
          path {
            @include transition((fill), 0.3s, ease-out);
          }
        }
      }
    }

    .header-epci-infos-content {
      margin-top: 10px;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      .classe-label {
        font-weight: 700;
      }
    }
  }
}

.section-bt {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

.location-selector-box {
  // padding: 0px 40px;
}

.statut-sticky {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background-color: $primary-B-100;
  z-index: 99;
  display: flex;
  margin-top: -40px;
  @include transition((margin-top), 0.3s, ease-out);

  &.isOn {
    margin-top: 0px;
  }
}

.epci-compare-switch {
  position: absolute;
  right: 20px;
  height: 100%;
  display: flex;
  align-items: center;

  .switch-wrapper {
    .selector {
      &.opened {
        background: transparent;
        padding-top: 0px;
        padding-bottom: 25px;

        ::v-deep .selector-close {
          display: none;
        }

        ::v-deep .placeholder {
          display: none;
        }

        ::v-deep .selector-list-panel {
          padding-top: 0px;
        }

        ::v-deep .select-list-wrapper {
          padding-left: 12px;
        }
      }
    }
  }
}

.switch-label {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: $white;
  text-transform: uppercase;
}

.switch-wrapper {
  margin-left: 8px;
  position: relative;
  min-width: 220px;

  .selector {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  :v-deep .selector-close {
    display: none;
  }

  ::v-deep .selector-list-panel {
    .select-item {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
  }

  ::v-deep .placeholder {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }

  ::v-deep .anchor-down {
    svg {
      path {
        fill: $primary-B-100;
      }
    }
  }

  ::v-deep .selector-label {
    display: none;
  }

  ::v-deep .selector-close {
    top: 8px;
    right: 14px;

    svg {
      path {
        fill: $primary-B-100;
      }
    }

    // display: none;
  }

  ::v-deep .selector-list-panel {
    height: initial;
  }

  ::v-deep .selector-list-panel {
    margin-top: 0px;
    padding-top: 20px;
    background: linear-gradient(180deg, #fcfbf8 70%, #eeecdc 100%);
    border: 1px solid #141446;
    border-radius: 13px;

    .select-item {
      color: $primary-B-100;

      .ico {
        svg {
          path {
            fill: $primary-B-100;
          }
        }
      }

      &:first-child {
        border-top-color: transparent;
      }

      &:last-child {
        margin-bottom: 0px !important;
      }
    }
  }
}

.header-box-enter-active,
.header-box-leave-active {
  transition: all 0.5s ease;
}

.header-box-enter-from,
.header-box-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1279px) {
  .section-title {
    margin: auto;
    max-width: 560px;
  }

  .section-legend {
    margin: auto;
    max-width: 560px;
    margin-top: 13px;
    flex-wrap: wrap;

    .section-legend-item {}
  }

  .section {
    padding: 0 40px;

    .section-graph {}
  }
}

@media screen and (max-width: 1148px) {
  .page-content {
    .section {
      max-width: 100%;
    }
  }

  .section-graph {
    max-width: 100%;
  }
}

.selector-mobile-wrapper {
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
  // margin-left: calc(-100vw - 10px);
  width: calc(200vw + 10px);
}

.page-header-selectors {
  &.mobile-only {
    display: initial;
    overflow: hidden;

    .location-selector-box {
      width: 100%;
      padding: 0px 28px;
    }
  }
}

.carrousel-controls {
  position: relative;
  grid-gap: 8px;
  justify-content: center;
  z-index: 11;
  margin-top: 20px;

  .carrousel-controls-item {
    background: $mobility-75;
    border: 4px solid $mobility-75;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    @include transition((border), 0.3s, ease-out);

    &.current {
      border: 4px solid $white;
    }
  }
}

@media screen and (max-width: 1190px) {
  .statut-sticky {
    margin-top: -62px;

    .header-epci {
      padding: 21px 28px 0px 28px;

      .header-epci-switch-wrapper {
        flex-direction: column;
        padding: 24px 50px;
        grid-gap: 20px;

        .header-epci-switcher-item {
          // font-size: 16px;
          // line-height: 22px;
        }

        .header-epci-text {
          font-size: 18px;
          line-height: 25px;
          text-align: center;
        }
      }

      .header-epci-infos {
        padding: 20px;

        .header-epci-infos-head {
          flex-direction: column;
        }

        .header-epci-infos-content {
          font-size: 16px;
          line-height: 140%;
        }
      }

      .header-epci-infos-content-box {
        flex-direction: column;
        margin-top: 20px;
      }
    }
  }

  .statut-title {
    display: none;
  }

  .statut-sticky {
    background-color: $white;
    box-shadow: 0px 0px 20px rgba(20, 20, 70, 0.5);
    justify-content: center;
    align-items: center;
    height: 28px;

    .statut-legend {
      gap: initial;
      flex-wrap: initial;
      margin-top: 0px;

      .statut-legend-item {
        position: relative;
        font-size: 10px;
        line-height: 14px;
        background-color: transparent;
        min-width: initial;
        padding: 0 8px 0px 13px;

        &:last-child {
          padding-right: 0px;
        }

        &:before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: red;
          left: 0px;
          top: 2px;
        }

        &.leaders {
          &:before {
            background-color: $primary-B-50;
          }
        }

        &.bons {
          &:before {
            background-color: $primary-A-100;
          }
        }

        &.danslamoyenne {
          &:before {
            background-color: $tertiary-B-100;
          }
        }

        &.moinsbons {
          &:before {
            background-color: $tertiary-E-100;
          }
        }

        &.enretard {
          &:before {
            background-color: $secondary-F-100;
          }
        }
      }
    }
  }

  .epci-compare-switch {
    position: absolute;
    top: 28px;
    height: initial;
    right: initial;
    background-color: $primary-B-100;
    width: 100%;
    padding: 6px 28px;

    .switch-label {
      flex: 1;
    }

    .switch-wrapper {
      background-color: $primary-B-100;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-width: initial;

      // gap: 126px;
      .header-epci-text {
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        color: $white;
        max-width: 390px;
      }

      .header-epci-switcher {
        display: flex;
      }

      .header-epci-switcher-item {
        border-style: solid;
        background-color: $primary-B-75;
        color: $primary-B-25;
        border-radius: 20px 0px 0px 20px;
        padding: 2px 19px;
        cursor: pointer;
        font-size: 12px;
        line-height: 16px;

        &:last-child {
          border-radius: 0px 20px 20px 0px;
        }

        &.current {
          background-color: $white;
          color: $primary-B-100;
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .page-header {
    z-index: 10;

    .page-header-subtitle {
      font-size: 10px;
      line-height: 14px;
    }

    .page-header-title {
      font-size: 24px;
      line-height: 28px;
    }

    .page-header-territoire-title {
      display: block !important;
    }

    .page-title {
      font-size: 32px;
      line-height: 44px;
    }

    .page-header-wrapper {
      justify-content: flex-start;
    }

    .page-header-selectors {
      align-items: flex-start;
      flex: initial;

      ::v-deep .selector-box {
        border-radius: 40px;
      }

      .selector-mobile-wrapper {
        @include transition((all), 0.3s, ease-out);
      }

      &[data-carrousel-index='0'] {
        .selector-mobile-wrapper {
          margin-left: 0;
        }
      }

      &[data-carrousel-index='1'] {
        .selector-mobile-wrapper {
          margin-left: calc(-200vw - 20px);
        }
      }
    }

    .carrousel-mobile {
      .page-header-selectors {
        flex-direction: row;
        grid-gap: 10px;

        .location-selector-box {
          padding: 0 28px;
        }
      }
    }
  }

  .page-content {
    margin-top: 20px;

    .header-epci {
      margin-top: -20px;

      .header-epci-infos-content-box {
        flex-direction: column;
        margin-top: 20px;

        .epci-info-bt {
          margin-top: 8px;
        }
      }

      .header-epci-switch-wrapper {
        flex-direction: column;
        gap: 20px;
        padding: 24px;

        .header-epci-switcher {
          flex-basis: 100%;
          width: 100%;
          max-width: 280px;

          .header-epci-switcher-item {
            flex-basis: 50%;

            &:first-child {
              text-align: right;
            }
          }
        }

        .header-epci-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
        }
      }
    }

    .section {
      padding: 0 22px;
    }

    .graph-title {
      margin-top: 27px;

      .smaller {
        font-size: 18px;
        line-height: 120%;
      }

      .bigger {
        font-size: 32px;
        line-height: 120%;
      }
    }

    .section-graph {
      &.limited {
        ::v-deep .mobile-classement {
          &:before {
            margin-top: -76px;
          }

          &:after {
            content: "Indicateurs non \A représentatifs pour cette \A sélection. \A Le graphique est non \A disponible.";
            // font-size: 12px;
          }
        }
      }
    }

    .section-legend {
      gap: initial;
      flex-wrap: initial;
      margin-top: 10px;

      .section-legend-item {
        position: relative;
        font-size: 10px;
        line-height: 14px;
        background-color: transparent;
        min-width: initial;
        padding: 0 8px 0px 13px;
        white-space: nowrap;

        &:last-child {
          padding-right: 0px;
        }

        &:before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: red;
          left: 0px;
          top: 2px;
        }

        &.leaders {
          &:before {
            background-color: $primary-B-50;
          }
        }

        &.bons {
          &:before {
            background-color: $primary-A-100;
          }
        }

        &.danslamoyenne {
          &:before {
            background-color: $tertiary-B-100;
          }
        }

        &.moinsbons {
          &:before {
            background-color: $tertiary-E-100;
          }
        }

        &.enretard {
          &:before {
            background-color: $secondary-F-100;
          }
        }
      }
    }
  }
}

.select-location-mobile {
  position: fixed;
  bottom: 40px;
  z-index: 100;
  width: 100%;
  margin-bottom: -100%;

  .location-selector-box {
    flex-basis: initial;
    width: 100%;

    .selector-box {
      width: 100%;
      flex-basis: initial;
      max-width: initial;
    }
  }

  &.expanded {
    margin-bottom: 0;
  }
}

.select-location-toggle {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0px;
  z-index: 100;
  width: 100%;
  height: 40px;
  padding: 0px 16px;
  background: $primary-B-75;
  color: $white;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  div {
    flex: 1;
    text-align: left;
  }

  span {
    padding-top: 3px;

    ::v-deep svg {
      path {
        fill: $white;
      }
    }
  }
}


//////////////////////: ANDRE ///////////////////
.page-header-selectors {
  &.mobile-only {
    display: block;
    overflow: hidden;

    .selector-mobile-wrapper {
      display: flex;
      transition: transform 0.3s ease-out;
    }

    .location-selector-box {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }
}

.carrousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .carrousel-controls-item {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    border-radius: 50%;
    background: #c3c3c3;
    &.current {
      background: #000;
    }
  }
}
</style>
