// import * as _ from 'lodash'
import { getRegions, getEPCI, getDepartements } from '~/api/index.js';
export const actions = {
  nuxtServerInit(store, context) {
    store.commit('set_host_state', context.req.headers.host)
  },
  async fetchRegions({ commit }) {
    try {
      const regions = await getRegions();
      commit('set_regions', regions);
      return regions;  // Retournez les régions récupérées
    } catch (error) {
      console.error('Failed to fetch regions:', error);
      throw error;  // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async fetchEPCI({ commit }) {
    try {
      const epci = await getEPCI();
      commit('set_EPCI', epci);
      return epci;  // Retournez les epci récupérées
    } catch (error) {
      console.error('Failed to fetch epci:', error);
      throw error;  // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async fetchDepartements({ commit }) {
    try {
      const departements = await getDepartements();
      commit('set_departements', departements);
      return departements;  // Retournez les departements récupérées
    } catch (error) {
      console.error('Failed to fetch departements:', error);
      throw error;  // Rejeter l'erreur pour pouvoir la traiter dans nuxtServerInit
    }
  },
  async nuxtServerInit({ commit, dispatch }) {
    try {
      const regions = await dispatch('fetchRegions');  // Charger les régions lors de l'initialisation du serveur
      const departements = await dispatch('fetchDepartements');  // Charger les fetchDepartements lors de l'initialisation du serveur
      const epci = await dispatch('fetchEPCI');  // Charger les EPCI lors de l'initialisation du serveur
      console.log('Régions récupérées:', regions);
      console.log('Départements récupérées:', departements);
      console.log('EPCI récupérées:', epci);
    } catch (error) {
      console.error('Failed to initialize regions:', error);
    }
  },
}

export const state = () => ({
  windowWidth: 1024,
  versionEnedis: false,
  appSlugID: 'ore-vehicules-propres',
  host: '',
  communes: [],
  departements: [],
  regions: [],
  epci: [],
  infos: null,
  type_territoires: [
    {
      id: 'regions',
      label: 'Régions',
      short: 'Régions',
    },
    {
      id: 'departements',
      label: 'Départements',
      short: 'Départ.',
    },
    {
      id: 'epci',
      label: 'EPCI*',
      short: 'EPCI*',
    },
  ],
  current_type_territoire: {
    id: 'regions',
    label: 'Régions',
  },
  type_vehicules: [
    {
      id: 'total_ve_vhr',
      idAutre: 'total_autre',
      label: 'Tous types',
      labelPlaceholder: 'Véhicules<br>(tous types)',
      slug: 'tous-type',
    },
    {
      id: 'bus_ve_vhr',
      idAutre: 'bus_autre',
      label: 'Bus',
      slug: 'autobus',
    },
    {
      id: 'pl_ve_vhr',
      idAutre: 'pl_autre',
      label: 'Poids lourds',
      slug: 'poids-lourds',
    },
    {
      id: 'vul_ve_vhr',
      idAutre: 'vul_autre',
      label: 'Véhicules utilitaires',
      slug: 'utilitaires',
    },
    {
      id: 'vp_ve_vhr',
      idAutre: 'vp_autre',
      label: 'Véhicules particuliers',
      slug: 'particuliers',
    },
  ],
  current_type_vehicule: {
    id: 'total_ve_vhr',
    idAutre: 'total_autre',
    label: 'Tous types',
    labelPlaceholder: 'Véhicules<br>(tous types)',
    slug: 'tous-type',
  },
})

export const mutations = {
  set_host_state(state, host) {
    if (host.includes('enedis')) state.versionEnedis = true
    state.host = host
  },
  set_communes(state, fCommunes) {
    // console.log('set_communes', fCommunes)
    state.communes = fCommunes
  },
  set_departements(state, fDepartements) {
    state.departements = fDepartements
  },
  set_regions(state, fRegions) {
    state.regions = fRegions
  },
  set_EPCI(state, fEPCI) {
    state.epci = fEPCI
  },
  set_INFOS(state, fINFOS) {
    state.infos = fINFOS
  },
  set_current_type_territoire(state, fCurrentTypeTerritoire) {
    state.current_type_territoire = fCurrentTypeTerritoire
  },
  set_current_type_vehicule(state, fCurrentTypeVehicule) {
    state.current_type_vehicule = fCurrentTypeVehicule
  },
  set_windowWidth(state, width) {
    state.windowWidth = width
  },
}
function toEnDate(fDateStr) {
  const splitDate = fDateStr.split('/')
  return splitDate[1] + '/' + splitDate[0] + '/' + splitDate[2]
}
export const getters = {
  get_windowWidth(state) {
    return state.windowWidth
  },
  get_host(state) {
    return state.host
  },
  get_full_host(state) {
    return state.host.includes('localhost') ? 'http://' + state.host : 'https://' + state.host
  },
  get_communes(state) {
    return state.communes
  },
  get_departements(state) {
    return state.departements
  },
  get_regions(state) {
    return state.regions
  },
  get_EPCI(state) {
    return state.epci
  },
  get_INFOS(state) {
    if (!state.infos) return ''
    const infosDates = new Date(state.infos)
    return 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', { month: 'long' }) + ' ' + infosDates.getFullYear()
  },
  get_INFOS_v2(state) {
    if (!state.infos) return {}
    const returnedObj = {}
    const objEntries = ['pdcelec', 'nbelec', 'pdcgaz', 'nbgaz']
    objEntries.forEach(function (fEntry) {
      if (state.infos[fEntry]) {
        const infosDates = new Date(toEnDate(state.infos[fEntry]))
        returnedObj[fEntry] = 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', { month: 'long' }) + ' ' + infosDates.getFullYear()
      } else {
        console.log('missing', state.infos, fEntry)
        returnedObj[fEntry] = '-'
      }
      
    })
    
    return returnedObj// 'au ' + (infosDates.getDate() === 1 ? '1er' : infosDates.getDate()) + ' ' + infosDates.toLocaleString('default', { month: 'long' }) + ' ' + infosDates.getFullYear()
  },
  get_current_type_territoire(state) {
    return state.current_type_territoire
  },
  get_type_territoires(state) {
    return state.type_territoires
  },
  get_current_type_vehicule(state) {
    return state.current_type_vehicule
  },
  get_type_vehicules(state) {
    return state.type_vehicules
  },
}
