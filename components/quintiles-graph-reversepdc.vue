<template>
  <div>
    <div v-if="windowWidth >= 640" class="graphs">
      <div class="graph" :data-cat="cat">
        <div class="source">source : {{currCatVehic === 'elec' ? 'AAAdata et GIREVE' : 'AFGNV'}}</div>
        <highcharts-compo
          class="graph-container"
          :class="{ square: cat === 'mapping' }"
          :options="graphOptions"
          :chart-height="chartHeight"
          :bg-image="cat === 'mapping'"
        ></highcharts-compo>
        <div class="graph-background" :data-cat="cat">
          <img
            v-if="(currCatVehic !== 'gaz') && (cat === 'vehic')"
            src="~assets/_svg/chart-background-vehicules.svg"
          />
          <img
            v-else-if="(currCatVehic !== 'gaz') &&(cat === 'pdc')"
            src="~assets/_svg/chart-background-pdc.svg"
          />
          <img
            v-else-if="(currCatVehic === 'gaz') && (cat === 'vehic')"
            src="~assets/_svg/chart-background-vehicules-gaz.svg"
          />
          <img
            v-else-if="(currCatVehic === 'gaz') &&(cat === 'pdc')"
            src="~assets/_svg/chart-background-pdc-gaz.svg"
          />
        </div>
      </div>
      <div class="ranking-type">
        <span v-if="currentTerritoire.type === 'reg'"
                >RÉGIONS</span
              >
              <span v-else-if="currentTerritoire.type === 'dpt'"
                >DÉPARTEMENTS</span
              >
              <span v-else-if="currentTerritoire.type === 'epci'"
                >
                des EPCI<span v-if="epciCat.id === 'classe'"> de même classe ({{currentTerritoire.classe.replace('CLASSE ','')}})</span><span v-else> de la même région ({{current_reg.label}})</span>
                </span
              >
      </div>
      <div class="info-boxes">
        <div
          v-if="graphDatas"
          class="info-box current"
          :data-quintile="graphDatas.CurrQuintile"
        >
          <div class="info-box-content">
            <div class="ranking" v-html="graphDatas.CurrRankingText"></div>
            <div class="name">{{ graphDatas.CurrNameText }}</div>
            <!--
            <div class="desc">
              <span v-if="cat === 'vehic'">
                <span class="result">{{ graphDatas.CurrValueText }} %</span> de
                <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >voitures électriques et hybrides rechargeables</span
                >
                par rapport au total de véhicules immatriculés
                <span class="volume-data">soit {{graphDatas.currValueVol}} véhicule(s) <span v-if="currCatVehic === 'gaz'"> au gaz</span><span v-else
                  >électriques et hybrides rechargeables</span></span>
              </span>
              <span v-else>
                <span class="result"
                  >{{ graphDatas.CurrValueText }} <span v-if="currCatVehic === 'gaz'">stations GNV</span
                ><span v-else
                  >points de charge</span></span
                >
                pour 1000 <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >voitures électriques et hybrides rechargeables</span
                ><span class="volume-data">soit {{graphDatas.currValueVol}} <span v-if="currCatVehic === 'gaz'">stations GNV</span
                ><span v-else
                  >points de charge</span></span>
              </span>
            </div>
            -->
            <div class="desc">
              <span v-if="cat === 'vehic'">
                <span class="result">{{ graphDatas.CurrValueText }} %</span> de
                <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >voitures électriques et hybrides rechargeables</span
                >
                par rapport au total de véhicules immatriculés
                <span class="volume-data">soit {{graphDatas.currValueVol}} véhicule(s) <span v-if="currCatVehic === 'gaz'"> au gaz</span><span v-else
                  >électriques et hybrides rechargeables</span></span>
              </span>
              <span v-else>
                <span class="result"
                  >{{ graphDatas.CurrValueText }} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span
                >
                par <span v-if="currCatVehic === 'gaz'">station GNV</span
                ><span v-else
                  >point de charge</span
                ><span class="volume-data">soit {{graphDatas.currValueVol}}<span v-if="currCatVehic === 'gaz'">stations GNV</span
                ><span v-else
                  >points de charge</span> pour {{graphDatas.currValueNb}} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span>
              </span>
            </div>
          </div>
        </div>

        <div
          v-if="graphDatas"
          class="info-box"
          :class="{ over: graphDatas && overItem, first: !overItem }"
          :data-quintile="
            overItem ? overItem.quintile : graphDatas.FirstQuintile
          "
        >
          <div v-if="graphDatas && overItem" class="info-box-content">
            <div class="ranking" v-html="overItem.rankingText"></div>
            <div class="name">{{ overItem.nameText }}</div>
            <div class="desc">
              <span v-if="cat === 'vehic'">
                <span class="result">{{ overItem.valueText }}</span> de
                <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >voitures électriques et hybrides rechargeables</span
                >
                par rapport au total de véhicules immatriculés
                <span class="volume-data">soit {{overItem.vol}} véhicule(s) <span v-if="currCatVehic === 'gaz'"> au gaz</span><span v-else
                  >électriques et hybrides rechargeables</span></span>
              </span>
              <span v-else>
                <span class="result"
                  >{{ overItem.valueText }} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span
                >
                par <span v-if="currCatVehic === 'gaz'">station GNV</span
                ><span v-else
                  >point de charge</span
                ><span class="volume-data">soit {{overItem.vol}} <span v-if="currCatVehic === 'gaz'">stations GNV</span
                ><span v-else
                  >points de charge</span> pour {{overItem.nb}} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span>
              </span>
            </div>
          </div>
          <div v-else-if="graphDatas" class="info-box-content">
            <div class="ranking" v-html="graphDatas.FirstRankingText"></div>
            <div class="name">{{ graphDatas.FirstNameText }}</div>
            <div class="desc">
              <span v-if="cat === 'vehic'">
                <span class="result">{{ graphDatas.FirstValueText }} %</span> de
                <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span><span v-else>voitures électriques et hybrides rechargeables</span>
                par rapport au total de véhicules immatriculés
                <span class="volume-data">soit {{graphDatas.FirstValueVol}} véhicule(s) <span v-if="currCatVehic === 'gaz'"> au gaz</span><span v-else
                  >électriques et hybrides rechargeables</span></span>
              </span>
              <span v-else>
                <span class="result"
                  >{{ graphDatas.FirstValueText }} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span
                >
                par <span v-if="currCatVehic === 'gaz'">station GNV</span
                ><span v-else
                  >point de charge</span
                ><span class="volume-data">soit {{graphDatas.FirstValueVol}} <span v-if="currCatVehic === 'gaz'">stations GNV</span
                ><span v-else
                  >points de charge</span> pour {{graphDatas.FirstValueNb}} <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
                ><span v-else
                  >véhicules électriques et hybrides rechargeables</span></span>

                


                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mobile-classement-reverse
      v-else-if="graphDatas"
      :graph-datas="graphDatas"
      :epci-cat="epciCat"
      :regions="regions"
      :current-territoire="currentTerritoire"
      :classementType="'nbPDC'"
    ></mobile-classement-reverse>
  </div>
</template>
<script>
import * as _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
  props: {
    currentTerritoire: {
      type: Object,
      default: function () {
        return null
      },
    },
    locationDatas: {
      type: Array,
      default: function () {
        return null
      },
    },
    quintiles: {
      type: Array,
      default: function () {
        return null
      },
    },
    cat: {
      type: String,
      default: function () {
        return 'vehic'
      },
    },
    epciCat: {
      type: Object,
      default: function () {
        return null
      },
    },
    pdcCount: {
      type: Number,
      default: function () {
        return null
      },
    },
    chartHeight: {
      type: String,
      default: function () {
        return '440px'
      },
    },
  },
  data() {
    const _self = this
    return {
      overItem: null,
      options: {
        chart: {
          type: 'column',
          title: '',
          backgroundColor: 'transparent',
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        plotOptions: {
          series: {
            turboThreshold: 3000,
            // pointPadding: 0,
            // groupPadding: 0.1,
            // pointWidth: 2,
            // borderRadius: 5,
            // maxPointWidth: 32
            point: {
              events: {
                mouseOver: _self.overPoint,
                mouseOut: _self.outPoint,
              },
            },
          },
          column: {
            stacking: 'normal',
            borderRadiusTopLeft: 16,
            borderRadiusTopRight: 16,
            // maxPointWidth: 10
          },
        },
        xAxis: {
          // width: '70%',
          // left: '15%',
          lineWidth: 4,
          lineColor: '#141446',
          minPadding: 0.04,
          maxPadding: 0.005,
          // categories: ['cat'],
          // maxPadding: 0,
          // tickAmount: 0,
          // left: '22.2%',
          zIndex: 5,
          labels: {
            enabled: false,
          },
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          title: '',
          labels: {
            formatter: function () {
              if (_self.cat === 'vehic') return this.value + '%'
              return this.value + ' '
            },
            useHTML: true,
            x: 0,
            align: 'left',
          },
          // overflow: 'allow',
          gridLineDashStyle: 'ShortDot',
          gridLineColor: '#BFBB96',
          showFirstLabel: false,
        },
        tooltip: {
          enabled: false,
          /*
          formatter: function () {
            return this.point.label + ' : ' + this.point.y
          },
          outside: true,
          */
        },
        series: [
          {
            data: [],
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      current_type_vehicule: 'get_current_type_vehicule',
      regions: 'get_regions',
      windowWidth: 'get_windowWidth',
    }),
    current_reg() {
      const _self = this
      if (!_self.$route.params.locationSlug) return null
      
      const region = _.find(this.regions, function (fRegion) {
        return fRegion.code === _self.currentTerritoire.code_reg
      })
      return region
    },
    graphDatas(){
      const _self = this
      if (!this.locationDatas) return null
      let processedDatas = this.locationDatas

      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          processedDatas = _.filter(processedDatas, function (fEntry) {
            return fEntry.classe === _self.currentTerritoire.classe
          })
        } else {
          processedDatas = _.filter(processedDatas, function (fEntry) {
            return fEntry.code_reg === _self.currentTerritoire.code_reg
          })
        }
      }

      // console.log('processedDatas', processedDatas)
      const resultsCount = processedDatas.length
      let graphDatas = _.map(processedDatas, function (fEntry, fEntryIndex) {
        // let y
        // console.log('>>>fEntry', fEntry)
        const returnedObj = {}
        if (_self.cat === 'pdc') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = fEntry.stations_gnv_reg ? parseFloat(
              ((fEntry.c_total_gnv) / fEntry.stations_gnv_reg).toFixed(2)
              /*
              ((fEntry.stations_gnv_reg * 1000) / fEntry.c_total_gnv).toFixed(2)
              */
            ) : 0
            returnedObj.nb = fEntry.c_total_gnv
            returnedObj.vol = fEntry.stations_gnv_reg
          } else {
            returnedObj.y = fEntry.sum_pdc ? parseFloat(
              (
                
                (fEntry['c_' + _self.current_type_vehicule.id]) /
                fEntry.sum_pdc
                /*
                (fEntry.sum_pdc * 1000) /
                fEntry['c_' + _self.current_type_vehicule.id]
                */
              ).toFixed(1)
            ) : 0
            returnedObj.nb = fEntry['c_' + _self.current_type_vehicule.id]
            returnedObj.vol = fEntry.sum_pdc
          }
          // console.log(fEntry.label, fEntry.sum_pdc, fEntry['c_' + _self.current_type_vehicule.id], y)
        } else if (_self.cat === 'mapping') {
          if (_self.currCatVehic === 'gaz') {
            const pdc = fEntry.c_total_gnv ? parseFloat(
              ((fEntry.stations_gnv_reg) / fEntry.c_total_gnv).toFixed(1)
            ) : 0
            const perc = fEntry.c_total_autre ? parseFloat(
              ((fEntry.c_total_gnv / fEntry.c_total_autre) * 100).toFixed(1)
            ) : 0
            returnedObj.x = perc
            returnedObj.y = pdc
          } else {
            const pdc = fEntry['c_' + _self.current_type_vehicule.id] ? parseFloat(
              (
                (fEntry.sum_pdc * 1000) /
                fEntry['c_' + _self.current_type_vehicule.id]
              ).toFixed(1)
            ) : 0
            const perc = fEntry['c_' + _self.current_type_vehicule.idAutre] ? parseFloat(
              (
                (fEntry['c_' + _self.current_type_vehicule.id] /
                  fEntry['c_' + _self.current_type_vehicule.idAutre]) *
                100
              ).toFixed(1)
            ) : 0

            returnedObj.x = perc
            returnedObj.y = pdc
          }
        } else if (_self.cat === 'vehic') {
          if (_self.currCatVehic === 'gaz') {
            returnedObj.y = fEntry.c_total_autre ? parseFloat(
              ((fEntry.c_total_gnv / fEntry.c_total_autre) * 100).toFixed(2)
            ) : 0
            returnedObj.vol = fEntry.c_total_gnv
          } else {
            returnedObj.y = fEntry['c_' + _self.current_type_vehicule.idAutre] ? parseFloat(
              (
                (fEntry['c_' + _self.current_type_vehicule.id] /
                  fEntry['c_' + _self.current_type_vehicule.idAutre]) *
                100
              ).toFixed(2)
            ) : 0

            returnedObj.vol = fEntry['c_' + _self.current_type_vehicule.id]
          }
        }
        return {
          ...returnedObj,
          code: fEntry.code,
          label: fEntry.label,
          sum_pdc: fEntry.sum_pdc,
          indic_val: fEntry['c_' + _self.current_type_vehicule.id],
          indic_autre: fEntry['c_' + _self.current_type_vehicule.idAutre]
        }
      })
      let current = _.find(graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code
      })
      if (!current) return null
      graphDatas = _.sortBy(graphDatas, function (fEntry) {
        // return -fEntry.y
        return fEntry.y
      })
      graphDatas = _.map(graphDatas, function (fEntry, fEntryIndex) {
        const calcPos = Math.ceil(fEntryIndex / (resultsCount / 5)) - 1
        const quintileIndex = calcPos >= 0 ? calcPos : 0
        return {
          ...fEntry,
          color:
            _self.cat === 'mapping'
              ? 'rgba(67, 110, 177, 0.9)'
              : _self.quintiles[quintileIndex].color,
          borderColor:
            current.code === fEntry.code ? '#141446' : 'rgba(255,255,255,0)',
          borderWidth: current.code === fEntry.code ? 3 : 0.1,
          ranking: fEntryIndex + 1,
          quintile: quintileIndex + 1,
          dataLabels: { enabled:(current.code === fEntry.code) }
        }
      })
      current = _.find(graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code
      })

      const first = graphDatas[0]
      
      let txtType =
        _self.currentTerritoire.type === 'reg' ? ' régions' : ' départements'
      const regObject = _.find(this.regions, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code_reg
      })

      if (_self.currentTerritoire.type === 'epci') {
        if (_self.epciCat.id === 'classe') {
          txtType = ' EPCI de ' + _self.currentTerritoire.classe
        } else {
          txtType = ' EPCI en ' + regObject.label
        }
      }

      let CurrValueText = current.y
      const currValueVol = current.vol
      const currValueNb = current.nb
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          CurrValueText = current.y
        } else {
          CurrValueText = current.y
        }
      } else {
        CurrValueText = current.y
      }


      let FirstValueText = first.y
      const FirstValueVol = first.vol
      const FirstValueNb = first.nb
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          FirstValueText = first.y
        } else {
          FirstValueText = first.y
        }
      } else {
        FirstValueText = first.y
      }

      return {
        txtType,
        series: graphDatas,
        CurrRankingText:
          _self.formatRanking(current.ranking) + ' sur ' + graphDatas.length + txtType,
        CurrValueText,
        currValueVol,
        currValueNb,
        CurrNameText: current.label,
        CurrQuintile: current.quintile,
        FirstRankingText: _self.formatRanking(first.ranking) + ' sur ' + graphDatas.length + txtType,
        FirstValueText,
        FirstValueVol,
        FirstValueNb,
        FirstNameText: first.label,
        FirstQuintile: first.quintile,
      }
    },
    graphOptions() {
      const _self = this
      const graphOptions = _.cloneDeep(this.options)
      if (_self.cat === 'mapping') {
        graphOptions.chart.type = 'scatter'
        graphOptions.chart.zoomType = 'xy'
        graphOptions.chart.marginBottom = undefined
        graphOptions.xAxis.min = 0
        graphOptions.xAxis.labels.enabled = true
        graphOptions.xAxis.gridLineWidth = 1
        graphOptions.xAxis.gridLineDashStyle = 'ShortDot'
        graphOptions.xAxis.gridLineColor = '#BFBB96'
        graphOptions.xAxis.tickInterval = 0.2
        graphOptions.yAxis.tickInterval = 10
        graphOptions.yAxis.min = 0
      }
      
      if (_self.graphDatas && _self.graphDatas.series) {
        graphOptions.plotOptions.column.dataLabels = {
          enabled: true,
          useHTML: true,
          crop: false,
          overflow: 'allow',
          formatter: function() {
            return '<div class="col-rd-current"></div>'; 
          },
          verticalAlign: 'top',
          y: -25
          /* y: 25 *//* ,
          verticalAlign: 'bottom' */
        }
        if (_self.graphDatas.series.length > 190) {
          graphOptions.plotOptions.column.borderRadiusTopLeft = undefined
          graphOptions.plotOptions.column.borderRadiusTopRight = undefined
          graphOptions.plotOptions.column.pointPadding = 0
          graphOptions.plotOptions.column.groupPadding = 0
          graphOptions.plotOptions.column.borderWidth = 0
      
        } else {
          graphOptions.plotOptions.column.borderRadiusTopLeft = 16
          graphOptions.plotOptions.column.borderRadiusTopRight = 16
          graphOptions.plotOptions.column.pointPadding = 0.1
          graphOptions.plotOptions.column.groupPadding = 0.2
          graphOptions.plotOptions.column.borderWidth = undefined
        }
      }
      
      if (this.graphDatas) {
        graphOptions.series[0].data = _self.graphDatas.series
      }
      // console.log('graphOptions', graphOptions)
      return graphOptions
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
  },
  methods: {
    formatRanking(fNum) {
      if (fNum === 1) {
        return '1<sup>er</sup>'
      } else {
        return fNum + '<sup>e</sup>'
      }
    },
    overPoint(fEv) {
      const _self = this
      const target = _.find(this.graphDatas.series, function (fEntry) {
        return fEntry.code === fEv.target.code
      })
      let valueText = target.y
      // console.log('target', target)
      if (_self.cat === 'pdc') {
        if (_self.currCatVehic === 'gaz') {
          // valueText = target.y + ' stations GNV'
        } else {
          // valueText = Math.round(target.y) + ' points de charge'
        }
      } else {
        valueText = target.y + '%'
      }
      const txtType =
        _self.currentTerritoire.type === 'reg' ? ' régions' : ' départements'
      this.overItem = {
        ...target,
        rankingText:
          _self.formatRanking(target.ranking) +
          ' sur ' +
          _self.graphDatas.series.length +
          ' ' + txtType,
        valueText,
        nameText: target.label,
        quintile: target.quintile,
      }
    },
    outPoint(fEv) {
      this.overItem = null
    },
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
@import '~assets/scss/_info-boxes.scss';
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.desc {
  .volume-data {
    margin-top: 8px;
    display: block;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    line-height: 120%;
  }
}
.wrapper,
::v-deep(.commonGraph) {
    overflow: initial !important;
  }
.graph {
  position: relative;
  display: block;
  ::v-deep(.highcharts-container) {
    overflow: initial !important;
  }

  ::v-deep(.col-rd-current) {
    position: relative;
    width: 16px;
    height: 0px;
    // background-color: #141446;
    
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 8px 0 8px;
      border-color: #141446 transparent transparent transparent;
      z-index: 999;
    }
  }

  ::v-deep(.highcharts-axis-labels.highcharts-yaxis-labels span) {
    background-color: $white;
    padding-right: 6px;
  }
  .graph-background {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    z-index: -1;
    align-items: center;
    justify-content: center;
    img {
      max-width: 941px;
    }
  }
  &[data-cat='vehic'] {
    ::v-deep(.highcharts-tick) {
      display: none;
    }
  }
  &[data-cat='pdc'] {
    ::v-deep(.highcharts-tick) {
      display: none;
    }
    .graph-background {
      img {
        max-width: 860px;
      }
    }
  }

  &[data-cat='mapping'] {
    .graph-container {
      max-width: 768px;
      position: relative;
      margin: auto;
    }
    .graph-background {
      max-width: 768px;
      position: absolute;
      margin: auto;
      img {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
      }
      left: 50%;
      top: 50%;

      @include transform(translate(-50%, -50%));
    }
    ::v-deep(.commonGraph) {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
    }
  }
  .chart-container {
    position: relative;
  }
}

.ranking-type {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  letter-spacing: 0.1em;
}

@media screen and (max-width: 1040px) {
  .graph {
    .graph-background {
      img {
        max-width: 95%;
      }
    }
  }
}
</style>
