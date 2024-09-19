<template>
  <div>
    <div class="howtoread-sticky" :class="{on: legendSticky}">
      <img src="~/assets/img/howtoread-sticky.png"/>
    </div>
    <div class="info-boxes">
      <div v-if="graphDatas" class="info-box current tooltip">
        <div v-if="graphDatas && overItem" class="info-box-content">
          <div class="name">{{ overItem.nameText }}</div>
          <div class="desc">
            <div class="result nopad res1">{{ overItem.x }} %</div>
            <div>
              de <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
              ><span v-else
                >véhicules électriques et hybrides rechargeables</span
              >
              par rapport au total de véhicules immatriculés
            </div>
            <div class="result nopad res2">
               <span v-if="currCatVehic === 'gaz'"> {{ overItem.y }}</span>
               <span v-else>{{ Math.round(overItem.y) }}</span>
              <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
              ><span v-else>véhicules électriques et hybrides rechargeables</span>
            </div>
            <div>
              par
              <span v-if="currCatVehic === 'gaz'">station GNV</span
              ><span v-else
                >point de charge publique</span
              >
            </div>
          </div>
        </div>
        <div v-else-if="graphDatas" class="info-box-content">
          <div class="name">{{ graphDatas.CurrNameText }}</div>
          <div class="desc">
            <div class="result nopad res1">{{ graphDatas.CurrValueX }} %</div>
            <div>
              de <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
              ><span v-else
                >véhicules électriques et hybrides rechargeables</span
              >
              par rapport au total de véhicules immatriculés
            </div>
            <div class="result nopad res2">
              <span v-if="currCatVehic === 'gaz'"> {{ graphDatas.CurrValueY }}</span>
              <span v-else>{{ Math.round(graphDatas.CurrValueY) }}</span>
              <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
              ><span v-else>véhicules électriques et hybrides rechargeables</span>
            </div>
            <div>
              par
              <span v-if="currCatVehic === 'gaz'">station GNV</span
              ><span v-else
                >point de charge publique</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="info-box legend">
        <div v-observe-visibility="legendVisibilityChanged" class="info-box-detector"></div>
        <div class="info-box-content">
          <img v-if="currCatVehic === 'gaz'" class="legend-desktop" src="~/assets/img/gaz/legend-howtoread-desktop@2x.png" />
          <img
            v-if="currCatVehic === 'gaz'" 
            class="legend-small"
            src="~/assets/img/gaz/legend-howtoread-mobile@2x.png"
          />
          <img 
            v-if="currCatVehic !== 'gaz'" 
            class="legend-desktop" src="~/assets/img/electricite/legend-howtoread-desktop@2x.png" />
          <img
            v-if="currCatVehic !== 'gaz'" 
            class="legend-small"
            src="~/assets/img/electricite/legend-howtoread-mobile@2x.png"
          />
        </div>
      </div>
    </div>
    <div class="graph-txt-desc">
      Survolez les points du graphique pour afficher les données des autres
      territoires
    </div>

    <div v-observe-visibility="graphVisibilityChanged" class="graph twoaxis" :data-cat="cat">

      <div class="info-zoom" :class="{ on: infoZoomOn }">
        <div class="info-txt">
          Cliquer, maintenir pressé<br />
          et dessiner une zone pour<br />zoomer dans le graphique
        </div>
        <div class="info-close-bt" @click="closeInfoZoom">
          <div class="bt-txt">J'ai compris</div>
          <div class="bt-ico">
            <img src="~assets/_svg/ico-close.svg" />
          </div>
        </div>
      </div>
      <highcharts-compo
        :ref="'graphContainer'"
        :graph-ref="'graphHighcharts'"
        class="graph-container square"
        :options="graphOptions"
        :chart-height="chartHeight"
        :bg-image="true"
        :mediane-x-perc="graphDatas ? graphDatas.medianeXPerc : null"
        :mediane-y-perc="graphDatas ? graphDatas.medianeYPerc : null"
      ></highcharts-compo>
      <div class="graph-background" :data-cat="cat">
        <img
          v-if="cat === 'vehic'"
          src="~assets/_svg/chart-background-vehicules.svg"
        />
        <img
          v-else-if="cat === 'pdc'"
          src="~assets/_svg/chart-background-pdc.svg"
        />
        
      </div>
      <div class="source">source : {{currCatVehic === 'elec' ? 'AAAdata et GIREVE' : 'AFGNV'}}</div>
    </div>
    <div class="section-legend">
      <div class="legend yaxis">
        <div class="legend-img">
          <img src="~assets/_svg/legend-yaxis-scatter-reverse.svg" />
        </div>
        <div class="legend-text">
          Nombre de <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
          ><span v-else>véhicules électriques et hybrides rechargeables</span> par 
          <span v-if="currCatVehic === 'gaz'">station GNV</span
          ><span v-else>point de charge publique</span>
        </div>
      </div>
      <div class="wrapper-bt">
        <span class="bt-download" @click="callExport">
          Télécharger le graphique
          <div
            v-if="!downloadindGraphMapping"
            class="ico"
            v-html="require(`~/assets/_svg/bt-arrow-down.svg?raw`)"
          />
          <div v-else class="ico">
            <span
              class="rotating"
              v-html="require(`~/assets/_svg/icon-ui-spinner.svg?raw`)"
            ></span>
          </div>
        </span>
      </div>
      <div class="legend xaxis">
        <div class="legend-img">
          <img src="~assets/_svg/legend-xaxis-scatter.svg" />
        </div>
        <div class="legend-text">
          Pourcentage de
          <span v-if="currCatVehic === 'gaz'">véhicules au gaz</span
          ><span v-else>véhicules électriques et hybrides rechargeables</span>
          par rapport au total de véhicules immatriculés
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
  props: {
    downloadindGraphMapping: {
      type: Boolean,
      default: function () {
        return false
      },
    },
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
      legendVisibility: false,
      graphVisibility: false,
      infoZoomOn: true,
      overItem: null,
      currPoint: null,
      options: {
        chart: {
          type: 'scatter',
          title: '',
          backgroundColor: 'transparent',
          zoomType: 'xy',
          marginTop: 37,
          marginLeft: 60,
          marginRight: 1,
          marginBottom: 24,
          resetZoomButton: {
            theme: {
              fill: '#141446',
              stroke: null,
              r: 0,
              style: {
                color: '#FFF',
              },
              zIndex: 50,
              states: {
                hover: {
                  fill: '#436EB1',
                  stroke: null,
                  r: 0,
                  style: {
                    color: '#FFF',
                  },
                },
              },
            },
          },
          events: {
            render: function () {
              _self.currPoint = _.find(
                this.series[0].points,
                function (fPoint) {
                  return fPoint.code === _self.currentTerritoire.code
                }
              )
              // if (_self.currPoint) _self.currPoint.setState('hover')
            },
            redraw: function () {
              // point.setState('hover')
            },
          },
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
            // borderRadius: 5,
            // maxPointWidth: 32
            // findNearestPointBy: 'xy',
            stickyTracking: false,
            point: {
              events: {
                mouseOver: _self.overPoint,
                mouseOut: _self.outPoint,
              },
            },
          },
          scatter: {
            marker: {
              states: {
                hover: {
                  fillColor: '#141446',
                  lineWidth: 2,
                  lineColor: 'rgba(255,255,255,1)',
                  radius: 8,
                },
                selected: {
                  fillColor: '#141446',
                  lineWidth: 2,
                  lineColor: 'rgba(255,255,255,1)',
                  radius: 8,
                },
              },
              normal: {
                fillColor: 'rgba(67, 110, 177, 0.9)',
                lineWidth: 2,
                lineColor: 'rgba(255,255,255,1)',
              },
            },
            states: {
              hover: {
                radius: 18,
                marker: {
                  fillColor: 'FFFF00',
                },
                halo: {
                  attributes: {
                    fill: 'rgba(255,255,255,0)',
                    'stroke-width': 2,
                    stroke: '#141446',
                    'stroke-opacity': 1,
                    'stroke-dasharray': 5,
                  },
                  opacity: 1,
                  size: 12,
                },
              },
            },
          },
        },
        xAxis: {
          // lineWidth: 4,
          // lineColor: '#141446',
          minPadding: 0.04,
          maxPadding: 0.03,
          // maxPadding: 0,
          // tickAmount: 0,
          // left: '22.2%',
          gridLineWidth: 1,
          gridLineDashStyle: 'ShortDot',
          gridLineColor: '#BFBB96',
          // tickInterval: 0.2,
          endOnTick: true,
          min: 0,
          zIndex: 5,
          labels: {
            enabled: true,
          },
          opposite:true
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          minPadding: 0.04,
          maxPadding: 0.03,
          title: '',
          labels: {
            formatter: function () {
              if (_self.cat === 'vehic') return this.value + '%'
              return this.value + ' '
            },
            useHTML: true,
            // x: 0,
            // align: 'left',
          },
          // overflow: 'allow',
          gridLineDashStyle: 'ShortDot',
          gridLineColor: '#BFBB96',
          showFirstLabel: false,
          // tickInterval: 1,
          min: 0,
          reversed: true
        },
        tooltip: {
          backgroundColor: 'rgba(20, 20, 70, 0.8)',
          borderRadius: 8,
          borderWidth: 0,
          color: 'white',
          style: {
            color: 'rgba(255,255,255,0.9)',
          },
          shadow: false,
          distance: 20,
          // enabled: false,

          formatter: function () {
            const pdcTxt =
              _self.currCatVehic === 'gaz'
                ? 'station GNV'
                : 'point de charge publique'
            const txtTypeVehic =
              _self.currCatVehic === 'gaz'
                ? 'véhicules au gaz'
                : 'véhicules électriques et hybrides rechargeables'
            return (
              '<div class="ore-tooltip">' +
              '<div class="title">' +
              this.point.label +
              '</div>' +
              '<div class="data x">' +
              txtTypeVehic +
              ' : ' +
              this.point.x +
              '%</div>' +
              '<div class="data y">' +
              this.point.y + ' ' + txtTypeVehic +
              ' par ' +
              pdcTxt +
              ' </div>' +
              '</div>'
            )
          },
          useHTML: true,
          outside: true,
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
    }),
    legendSticky() {
      return this.graphVisibility && ! this.legendVisibility
    },
    currCatVehic() {
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
    graphDatas() {
      const _self = this
      if (!this.locationDatas) return null
      let processedDatas = this.locationDatas
      // console.log('this.locationDatas', this.locationDatas)
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
      // console.log('processedDatas', processedDatas, _self.currentTerritoire)
      const resultsCount = processedDatas.length
      let graphDatas = _.map(processedDatas, function (fEntry, fEntryIndex) {
        // let y
        const returnedObj = {}
        if (_self.currCatVehic === 'gaz') {
          const pdc = fEntry.stations_gnv_reg ? parseFloat(
            ((fEntry.c_total_gnv) / fEntry.stations_gnv_reg).toFixed(2)
          ) : 0
          const perc = fEntry.c_total_autre ? parseFloat(
            ((fEntry.c_total_gnv / fEntry.c_total_autre) * 100).toFixed(2)
          ) : 0

          returnedObj.xA = fEntry.c_total_gnv
          returnedObj.xB = fEntry.stations_gnv_reg

          returnedObj.yA = fEntry.c_total_gnv
          returnedObj.yB = fEntry.c_total_autre

          returnedObj.x = perc
          returnedObj.y = pdc
        } else {
          const pdc = fEntry.sum_pdc ? parseFloat(
            (
              (fEntry['c_' + _self.current_type_vehicule.id]) /
              fEntry.sum_pdc
            ).toFixed(1)
          ) : 0
          const perc = parseFloat(
            (
              (fEntry['c_' + _self.current_type_vehicule.id] /
                fEntry['c_' + _self.current_type_vehicule.idAutre]) *
              100
            ).toFixed(2)
          )
          
          returnedObj.xA = fEntry['c_' + _self.current_type_vehicule.id]
          returnedObj.xB = fEntry.sum_pdc

          returnedObj.yA = fEntry['c_' + _self.current_type_vehicule.id]
          returnedObj.yB = fEntry['c_' + _self.current_type_vehicule.idAutre]


          returnedObj.x = perc
          returnedObj.y = pdc
        }

        return {
          ...returnedObj,
          code: fEntry.code,
          label: fEntry.label,
        }
      })
      const sumX = _.sumBy(graphDatas, 'x')
      const sumY = _.sumBy(graphDatas, 'y')

      const maxX = _.max(_.map(graphDatas, 'x'))
      const maxY = _.max(_.map(graphDatas, 'y'))

      const medianeX = sumX / graphDatas.length
      const medianeY = sumY / graphDatas.length

      const medianeXPerc = (medianeX * 100) / maxX
      const medianeYPerc = (medianeY * 100) / maxY

      let current = _.find(graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code
      })
      if (!current) return null
      graphDatas = _.sortBy(graphDatas, function (fEntry) {
        return -fEntry.y
      })
      graphDatas = _.map(graphDatas, function (fEntry, fEntryIndex) {
        const calcPos = Math.ceil(fEntryIndex / (resultsCount / 5)) - 1
        const quintileIndex = calcPos >= 0 ? calcPos : 0
        return {
          ...fEntry,
          color: 'rgba(67, 110, 177, 0.9)',
          borderColor: current.code === fEntry.code ? '#141446' : undefined,
          borderWidth: current.code === fEntry.code ? 3 : 0,
          ranking: fEntryIndex + 1,
          quintile: quintileIndex + 1,

          marker:
            current.code === fEntry.code
              ? {
                  fillColor: '#141446',
                  lineWidth: 2,
                  lineColor: 'rgba(255,255,255,1)',
                  radius: 8,
                }
              : undefined,
          // , selected: (current.code === fEntry.code) && !_self.overItem
        }
      })
      current = _.find(graphDatas, function (fEntry) {
        return fEntry.code === _self.currentTerritoire.code
      })

      let txtType =
        _self.currentTerritoire.type === 'region' ? ' régions' : ' départements'
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
      

      const seriesDatas = graphDatas

      const sumxA = _.sumBy(seriesDatas, 'xA')
      const sumxB = _.sumBy(seriesDatas, 'xB')
      const sumyA = _.sumBy(seriesDatas, 'yA')
      const sumyB = _.sumBy(seriesDatas, 'yB')

      const pdc = parseFloat(
        ((sumxA) / sumxB).toFixed(2)
      )
      const perc = parseFloat(
        ((sumyA / sumyB) * 100).toFixed(2)
      )

      const unknownKey = _.findIndex(seriesDatas, function (fItem) {
        return fItem.code === current.code
      });
      // Make sure the key exists.
      if (unknownKey !== -1) {
        // Clone the value to the bottom of the array.
        seriesDatas.push(seriesDatas[unknownKey]);
        // Remove the original key.
        seriesDatas.splice(unknownKey, 1);
      }
      
      seriesDatas.push({
        
        code: 999,
        
        borderColor: 'rgba(0,255,255,1)',
        borderWidth: 3,
        color: "rgba(0, 110, 177, 0.9)",
        
        label: "France",
        
        // quintile: 1
        // ranking: 1
        x: perc,
        y: pdc,
        marker: {
          
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: 'rgba(67, 110, 177, 0.90)',
          radius: 8,
          
          symbol: 'diamond'
        }
      })

      return {
        series: seriesDatas,
        CurrRankingText:
          current.ranking + ' sur ' + graphDatas.length + txtType,
        CurrValueX: current.x,
        CurrValueY: current.y,
        CurrNameText: current.label,
        CurrQuintile: current.quintile,
        medianeXPerc,
        medianeYPerc,
        medianeX,
        medianeY,
      }
    },
    graphOptions() {
      const _self = this
      const graphOptions = _.cloneDeep(this.options)

      if (this.graphDatas) {
        graphOptions.series[0].data = _self.graphDatas.series
        graphOptions.xAxis.plotLines = [
          {
            dashStyle: 'ShortDot',
            color: '#141446',
            width: 2,
            value: this.graphDatas.medianeX,
          },
        ]
        graphOptions.yAxis.plotLines = [
          {
            dashStyle: 'ShortDot',
            color: '#141446',
            width: 2,
            value: this.graphDatas.medianeY,
          },
        ]
      }
      return graphOptions
    },
  },
  methods: {
    graphVisibilityChanged(isVisible, entry) {
      this.graphVisibility = isVisible
    },
    legendVisibilityChanged(isVisible, entry) {
      this.legendVisibility = isVisible
    },
    callExport() {
      this.$emit('callExport', 'quintile-graph-mapping')
    },
    closeInfoZoom() {
      this.infoZoomOn = false
    },
    overPoint(fEv) {
      const _self = this
      // if (_self.currPoint) _self.currPoint.setState("hover", false)
      const target = _.find(this.graphDatas.series, function (fEntry) {
        return fEntry.code === fEv.target.code
      })
      this.overItem = {
        ...target,
        rankingText:
          target.ranking +
          ' sur ' +
          _self.graphDatas.series.length +
          ' régions',
        valueText: target.y + '%',
        nameText: target.label,
        quintile: target.quintile,
      }
    },
    outPoint(fEv) {
      // const _self = this
      this.overItem = null

      setTimeout(function () {
        // if (_self.currPoint) _self.currPoint.setState('hover', true)
      }, 1000)
    },
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
@import '~assets/scss/_info-boxes.scss';
.info-box-detector {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 60px;
  // background-color: red;
  z-index: 99;
}
.howtoread-sticky {
  position: fixed;
  top: -60px;
  left: 0;
  right: 0;
  height: 60px;
  background-color: $grey-25;
  display: flex;
  padding: 14px 352px 14px 349px;
  justify-content: center;
  align-items: center;
  z-index: 98;
  @include transition((top), 0.3s, ease-out);
  &.on {
    top: 0;
  }
  img {
    width: 579px;
  }
}
.legend-desktop {

}
.legend-small {
  display: none;
}
.graph-txt-desc {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.1em;
  color: $primary-B-50;
  // backdrop-filter: blur(5px);
  margin-top: 60px;
  margin-bottom: -10px;
}
.info-zoom {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.1em;
  color: $primary-B-50;
  padding: 8px 10px 40px 10px;
  border: 2px dashed $primary-B-50;
  border-radius: 3px;
  width: 207px;
  position: absolute;
  right: 13px;
  bottom: -5px;
  z-index: 99;
  background-color: rgba(255,255,255,1);
  // z-index: -1;
  @include transition((opacity), 0.3s, ease-out);
  pointer-events: none;
  &.on {
    pointer-events: initial;
    opacity: 1;
  }
  opacity: 0;
}
.info-close-bt {
  position: absolute;
  background: #141446;
  border-radius: 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  left: 50%;
  margin-left: -70px;
  bottom: 10px;
  /* white */
  cursor: pointer;
  color: $white;
  // z-index: 10;
  display: flex;
  padding: 2px 10px 2px 10px;
  z-index: 100;
  .bt-txt {
    margin-right: 30px;
  }
  .bt-ico {
    padding-top: 1px;
  }
}
.info-boxes {
  align-items: stretch;
}
.info-box {
  flex: 1;
  border-radius: 20px;
  &.legend {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $grey-25;
  }
  &.current {
    &.tooltip {
      background-color: transparent !important;
      border: 2px dashed $primary-B-100;
      .result {
        font-weight: 800;
        font-size: 20px;
        line-height: 15px;
        margin: 2px 0px 8px 0px;
        &.nopad {
          padding-left: 0px;
        }
        &.res1 {
          margin-top: 0px;
        }
        &.res2 {
          margin-top: 8px;
          line-height: 22px;
        }
      }
    }
  }
}
.graph {
  position: relative;
  ::v-deep(.highcharts-axis-labels.highcharts-yaxis-labels span) {
    background-color: $white;
    padding-right: 6px;
  }
  ::v-deep(.highcharts-halo) {
    stroke-dasharray: 4 2;
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
  ::v-deep {
    .highcharts-grid {
      path {
        // stroke: #98B5E1;
        stroke: #436eb1;
        stroke-opacity: 0.5;
      }
    }
    .highcharts-tick {
      // mix-blend-mode: multiply;
      // stroke: #98B5E1;
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
      z-index: 10;
      // mix-blend-mode: multiply;
      &.wrapper {
        ::v-deep img {
          position: absolute;
          top: 24px;
          &.gradient-bg {
            width: calc(100% - 61px);
            height: calc(100% - 61px);
            left: 60px;
            top: 37px;
          }
          &.gradient-mediane {
            right: 1px;
            top: 37px;
            width: calc(50% - 10px);
            height: calc(50% - 10px);
          }
          z-index: -1;
        }
      }
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
      // mix-blend-mode: multiply;
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

.section-legend {
  display: flex;
  margin-top: 14px;
  .wrapper-bt {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    .bt-download {
      display: inline-flex;
    }
  }
  .legend {
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    width: 340px;
    text-align: center;
    flex-basis: 340px;
    &.yaxis {
      margin-left: 35px;
    }
    .legend-text {
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      color: $primary-B-100;
    }
  }
}
@media screen and (max-width: 960px) {
  .legend-desktop {
    display: none;
  }
  .legend-small {
    display: initial;
  }
}
</style>
