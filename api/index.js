import * as _ from 'lodash'
import axios from 'axios'
import { getODSRequestV2, getODSRequestV2Export } from '~/api/config'
const slugify = require('underscore.string/slugify')
const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
});
/// DISABLE AS FACET REQUEST LIMITED TO 5
/*
function getLocationsElec (store) {
  console.log(getODSRequest('&facet=libelle_reg&facet=code_reg'))
  const facets = ['libelle_reg','code_reg']
  let facetsRequest = ''
  for (facet in facets) {
    facetsRequest += '&facet=' + face
  }
  return axios.get(getODSRequest(facetsRequest))
    .then(response => {
       // DEPARTEMENTS
       const groupDpt = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_dpt'})
       const groupDptCodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_dpt'})
       // console.log('groupDptCodes', groupDptCodes)
       const departements = _.map(groupDpt.facets, function (fDpt, fDptIndex) { 
        return {
          label: fDpt.name,
          code: parseInt(groupDptCodes.facets[fDptIndex].name)
        }
      })

      // REGIONS
       const groupRegions = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_reg'})
       const groupRegionsCodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_reg'})
       console.log('groupRegions', groupRegions)
       const regions = _.map(groupRegions.facets, function (fRegion, fRegionsIndex) { 
        return {
          label: fRegion.name,
          code: parseInt(groupRegionsCodes.facets[fRegionsIndex].name)
        }
      })

      // EPCI
       console.log('response.data.facet_groups', response.data.facet_groups)
       const groupEPCI = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'libelle_epci'})
       const groupEPCICodes = _.find(response.data.facet_groups, function (fGroup) { return fGroup.name === 'code_epci'})
       console.log('groupEPCICodes', groupEPCICodes)
       const EPCI = _.map(groupEPCI.facets, function (fEPCI, fEPCIIndex) { 
        return {
          label: fEPCI.name,
          code: parseInt(groupEPCICodes.facets[fEPCIIndex].name)
        }
      })

      store.commit('set_departements', departements)
      store.commit('set_regions', regions)
      store.commit('set_EPCI', EPCI)

      return {
        departements,
        regions,
        EPCI
      }
    })
}
*/




function getCommunes(store) {
  // console.log('getCommunes')
  const type = 'commune'
  let facetsRequest = 'exports/json?group_by='
  facetsRequest +=
    'code_' +
    type +
    '_5' +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, code_reg as code_reg, pdc_epci'

  // console.log("getCommunes getODSRequestV2Export(facetsRequest)", getODSRequestV2Export(facetsRequest))
  return axios.get(getODSRequestV2Export(facetsRequest)).then((response) => {
    // COMMUNES
    // console.log('getCommunes response.data', response.data)
    const items = _.map(response.data, function (fEntry) {
      return {
        ...fEntry,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}
function getCommunesStatic(store) {
  // console.log('getCommunesStatic', process.env.API_URL + '/datas/communes.json')
  const type = 'commune'
  const API_URL = store.getters.get_full_host
  return axios.get(API_URL + '/datas/communes.json').then((response) => {
    // COMMUNES
    // console.log('getCommunes response.data', response.data)
    const items = _.map(response.data, function (fEntry) {
      return {
        ...fEntry,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

/*
function getCommunesOld(store) {
  const type = 'commune'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    '_5' +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, code_reg as code_reg, pdc_epci'
  console.log("getCommunes getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // COMMUNES
    // console.log('response.data.records', response.data.records)
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}
*/
/*function getDepartements(store) {
  // console.log('getDepartements')
  const type = 'dpt'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, code_reg as code_reg'
    // console.log("getDepartements getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'dpt',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/


function getDepartements(store) {
  // console.log('getDepartements')
  const type = 'dpt'
  let facetsRequest = 'records?group_by='
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, code_epci as code_epci, code_reg as code_reg'
    // console.log("getDepartements getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axiosInstance.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'dpt',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

function getDepartementsStatic(store) {
  // console.log('getDepartementsStatic')
  const type = 'dpt'
  
  const API_URL = store.getters.get_full_host
  return axios.get(API_URL + '/datas/departements.json').then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

/*function getRegions(store) {
  // console.log('getRegions')
  const type = 'reg'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, code_epci as code_epci, stations_gnv_reg'
  // console.log("getRegions getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'reg',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/

function getRegions(store) {
  const type = 'reg';
  let facetsRequest = 'records?group_by=';
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, code_epci as code_epci, stations_gnv_reg';
  
  return axiosInstance.get(getODSRequestV2(facetsRequest)).then((response) => {
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'reg',
      };
    });
    
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code;
      }),
      function (fEntry2) {
        return slugify(fEntry2.label);
      }
    );
  });
}


function getRegionsStatic(store) {
  // console.log('getRegions')
  const type = 'reg'
  const API_URL = store.getters.get_full_host
  return axios.get(API_URL + '/datas/regions.json').then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

/*function getEPCI(store) {
  // console.log('getEPCI')
  const type = 'epci'
  let facetsRequest = 'records?group_by='
  facetsRequest +=
    'code_' +
    type +
    ' as code,libelle_' +
    type +
    ' as label, classe_epci as classe, code_reg as code_reg, code_dpt as code_dpt, pdc_epci'
    // console.log("getEPCI getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axios.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'epci',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}*/


function getEPCI(store) {
  // console.log('getEPCI')
  const type = 'epci'
  let facetsRequest = 'records?group_by='
  facetsRequest += 'code_' + type + ' as code,libelle_' + type + ' as label, classe_epci as classe, code_reg as code_reg, code_dpt as code_dpt, pdc_epci'
    // console.log("getEPCI getODSRequestV2(facetsRequest)", getODSRequestV2(facetsRequest))
  return axiosInstance.get(getODSRequestV2(facetsRequest)).then((response) => {
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type: 'epci',
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

function getEPCIStatic(store) {
  // console.log('getEPCIStatic', process.env.API_URL + '/datas/EPCI.json')
  const type = 'epci'
  const API_URL = store.getters.get_full_host
  return axios.get(API_URL + '/datas/EPCI.json').then((response) => {
    // console.log('response.data.records', response.data.records)
    // DEPARTEMENTS
    const items = _.map(response.data.records, function (fEntry) {
      return {
        ...fEntry.record.fields,
        type,
      }
    })
    return _.sortBy(
      _.uniqBy(items, function (fEntry) {
        return fEntry.code
      }),
      function (fEntry2) {
        return slugify(fEntry2.label)
      }
    )
  })
}

function getINFOSStatic(store) {
  // console.log('getINFOSStatic', process.env.API_URL + '/datas/infos.json')
  // const type = 'infos'
  const API_URL = store.getters.get_full_host
  return axios.get(API_URL + '/datas/infos.json').then((response) => {
    // DEPARTEMENTS
    return response.data
  })
}
export { getCommunes, getCommunesStatic, getDepartements, getDepartementsStatic, getRegions, getRegionsStatic, getEPCI, getEPCIStatic, getINFOSStatic }
