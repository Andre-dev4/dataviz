const ODS_ORE_SETTINGS = {
  datasetv0:
    'jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes',
  apiurl: 'https://opendata.agenceore.fr/',
  entrypoint: 'api/records/1.0/search',
  apiKey: '87683e64cdf02de7458bb5c1c5ab23259ca25affd3f95b9ca47f7e19',
  dataset : 'jdd-prive-vehicules-et-stations-electricite-et-gaz-par-territoires-classes-copie'
}

const getODSRequest = function (fReq, fApiType = 'search') {
  const entrypoint = 'api/records/1.0/' + fApiType
  const uriConstruct =
    ODS_ORE_SETTINGS.apiurl +
    entrypoint +
    '/?dataset=' +
    ODS_ORE_SETTINGS.dataset +
    fReq +
    '&apikey=' +
    ODS_ORE_SETTINGS.apiKey
  return encodeURI(uriConstruct)
}

const getODSRequestV2 = function (fReq) {
  const entrypoint = 'api/v2/catalog'
  const uriConstruct =
    ODS_ORE_SETTINGS.apiurl +
    entrypoint +
    '/datasets/' +
    ODS_ORE_SETTINGS.dataset +
    '/' +
    fReq +
    '&apikey=' +
    ODS_ORE_SETTINGS.apiKey
  return encodeURI(uriConstruct)
}

const getODSRequestV2Export = function (fReq) {
  const entrypoint = 'api/explore/v2.1/catalog'
  const uriConstruct =
    ODS_ORE_SETTINGS.apiurl +
    entrypoint +
    '/datasets/' +
    ODS_ORE_SETTINGS.dataset +
    '/' +
    fReq +
    '&apikey=' +
    ODS_ORE_SETTINGS.apiKey
  return encodeURI(uriConstruct)
}

export { getODSRequest, getODSRequestV2, getODSRequestV2Export }

/*
/api/records/1.0/search/?dataset=jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes&q=&facet=libelle_reg

https://opendata.agenceore.fr/api/records/1.0/search/?dataset=jdd-prive-vehicules-stations-electricite-gaz-par-territoires-classes&q=&rows=4&facet=libelle_reg
*/
