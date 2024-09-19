import * as _ from 'lodash'
// import axios from 'axios'
import { getCommunesStatic, getDepartementsStatic, getRegionsStatic, getEPCIStatic, getINFOSStatic } from '~/api'

const slugify = require('underscore.string/slugify')

// const fsp = require('fs').promises
/* const getCSV = async (path) => {
  const config = {
    crossdomain: true,
    debug: true
  }
  // console.log('LOAD XLSX ', path)
  await axios.get(path, config)
    .then(response => {
      
      return response.data
      
    })
    .catch(function (error) {
      console.log('error', error)
      if (error.response) {
      
      } else if (error.request) {
      
      } else {
      
      }
      // console.log(error.config)
    })
} */
export default async function ({ store, route, $config }) {
  /* console.log('start getCSV')
  const allCSV = await getCSV('https://opendata.agenceore.fr/api/explore/v2.1/catalog/datasets/jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes/exports/json?group_by=code_commune_5%20as%20code,libelle_commune%20as%20label,%20code_epci%20as%20code_epci,%20code_reg%20as%20code_reg,%20pdc_epci&apikey=c435a9e0645bf232bfc747da6fca78edd3a3b805d95ddd09d6f515f4')
  console.log('allCSV', allCSV)
  console.log('end getCSV') */
  
  if (route.params.territoireType) {
    const targetTerritoireType = _.find(
      store.getters.get_type_territoires,
      function (fEntry) {
        return slugify(fEntry.label) === route.params.territoireType
      }
    )
    store.commit('set_current_type_territoire', targetTerritoireType)
  }

  const storeINFOS = store.getters.get_INFOS_v2
  const INFOS = storeINFOS.length > 0 ? storeINFOS : await getINFOSStatic(store)

  const storeEPCI = store.getters.get_EPCI
  const EPCI = storeEPCI.length > 0 ? storeEPCI : await getEPCIStatic(store)

  if (route.path !== "/") {
    const storeCommunes = store.getters.get_communes
    const communes = storeCommunes.length > 0 ? storeCommunes : await getCommunesStatic(store)
    store.commit('set_communes', communes)
  }
  const communes = store.getters.get_communes

  const storeDepartements = store.getters.get_departements
  const departements =
    storeDepartements.length > 0
      ? storeDepartements
      : await getDepartementsStatic(store)
  store.commit('set_departements', departements)

  const storeRegions = store.getters.get_regions
  let regions = storeRegions.length > 0 ? storeRegions : await getRegionsStatic(store)

  regions = _.map(regions, function (fRegion) {
    const regUniqEPCI = _.uniq(
      _.map(
        _.filter(communes, function (fDepartement) {
          return fDepartement.code_reg === fRegion.code
        }),
        'code_epci'
      )
    )
    // console.log('regUniqEPCI', regUniqEPCI)
    return {
      ...fRegion,
      sum_pdc: _.sumBy(
        _.map(regUniqEPCI, function (fEPCICode) {
          return _.find(EPCI, function (fEPCI) {
            return fEPCICode === fEPCI.code
          })
        }),
        'pdc_epci'
      ),
    }
  })
  // console.log('regions', regions)
  store.commit('set_regions', regions)

  store.commit('set_EPCI', EPCI)
  store.commit('set_INFOS', INFOS)
  return {
    communes,
    departements,
    regions,
    EPCI,
  }
}
