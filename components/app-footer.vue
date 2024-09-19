<template>
  <div class="footer">
    <div
      v-if="
        currCatVehic === 'gaz' ||
        (currCatVehic === 'elec' &&
          current_territoire &&
          current_type_territoire &&
          current_type_territoire.id === 'regions')
      "
      class="card"
    >
      <div
        v-if="!$store.state.versionEnedis"
        class="box-switch-type"
      >
        <div class="ico box-padding">
          <vehiculesSVG v-if="currCatVehic === 'gaz'" />
          <vehiculesGazSVG v-else />
        </div>
        <div class="title box-padding">
          <span v-if="currCatVehic === 'gaz'"
            >Découvrez les données pour les véhicules électriques et hybrides
            rechargeables</span
          >
          <span v-else
            >Découvrez les données pour les véhicules au gaz naturel</span
          >
        </div>
        <div class="switch-territory" @click="switchCat">
          Voir les données pour ce territoire
          <span
            class="anchor-right"
            v-html="require(`~/assets/_svg/anchor-right.svg?raw`)"
          />
        </div>
      </div>
    </div>
    <div class="logos">
      <div class="logos-left">
        <div class="logo-ore">
          <a href="http://www.agenceore.fr/" target="_blank">
            <span v-html="require(`~/assets/_svg/logo_White.svg?raw`)" />
          </a>
        </div>
        <div class="logo-enedis">
          <a href="https://www.enedis.fr/" target="_blank">
            <span v-html="require(`~/assets/_svg/logo-enedis.svg?raw`)" />
          </a>
        </div>
      </div>
      <div class="logos-right no-mobile">
        <div class="logo-wdd">
          <a href="https://wedodata.fr/" target="_blank">
            <span v-html="require(`~/assets/_svg/logo-wedodata.svg?raw`)" />
          </a>
        </div>
      </div>
    </div>
    <div class="logos-right mobile-only">
      <div class="logo-wdd">
        <a href="https://wedodata.fr/" target="_blank">
          <span v-html="require(`~/assets/_svg/logo-wedodata.svg?raw`)" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as _ from 'lodash'
import vehiculesSVG from '~/assets/_svg/vehicules.svg?inline'
import vehiculesGazSVG from '~/assets/_svg/vehicules-gaz.svg?inline'
export default {
  components: { vehiculesSVG, vehiculesGazSVG },
  computed: {
    ...mapGetters({
      current_type_territoire: 'get_current_type_territoire',
      regions: 'get_regions',
    }),
    currCatVehic() {
      // console.log('this.$route.name', this.$route.name)
      if (!this.$route.name) return 'elec'
      return this.$route.name.indexOf('gaz') === 0 ? 'gaz' : 'elec'
    },
    current_territoire() {
      const _self = this
      if (!_self.$route.params.locationSlug) return null
      return _.find(this[this.current_type_territoire.id], function (fEntry) {
        return _self.slugify(fEntry.label) === _self.$route.params.locationSlug
      })
    },
  },
  methods: {
    switchCat() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      if (this.currCatVehic === 'elec') {
        this.$store.commit('set_current_type_vehicule', {
          id: 'total_ve_vhr',
          idAutre: 'total_autre',
          label: 'Tous types',
          labelPlaceholder: 'Véhicules<br>(tous types)',
          slug: 'tous-type',
        })
      }
      

      const _self = this
      const pathName =
        this.currCatVehic === 'gaz'
          ? 'index-vehicules-electriques-et-hybrides-rechargeables-territoireType-locationSlug'
          : 'gaz-territoireType-locationSlug'
      this.$router.push({
        name: pathName,
        params: _self.$route.params,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/_variables.scss';


.footer {
  position: relative;
  min-height: 156px;
  background: $header-gradient;
  display: flex;
  flex-direction: column;
  padding: 44px 60px 30px 60px;
  justify-content: flex-end;

  --primary-100: #ec81a6;
  --header-gradient: linear-gradient(180deg, #ec81a6, #141446);
  --mobility-100: #ec81a6;
  --secondary-F-25: #fabbae;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-switch-type {
  padding: 40px;
  gap: 24px;

  display: flex;
  max-width: 480px;
  flex-direction: column;
  align-items: center;
  /* white */

  background: #ffffff;
  border-radius: 40px;
  .ico {
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .title {
    font-weight: 800;
    font-size: 22px;
    line-height: 140%;
    /* or 31px */

    display: flex;
    align-items: center;
    text-align: center;

    color: $primary-B-100;
  }
}
.logos {
  display: flex;
  margin-top: 20px;
  .logos-left {
    display: flex;
    .logo-enedis {
      margin-left: 38px;
    }
  }
  .logos-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.switch-territory {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 16px;

  width: 400px;
  height: 40px;

  background: linear-gradient(180deg, #fcfbf8 70%, #eeecdc 100%);
  /* primary-B-100

  141446
  */
  border: 1px solid #141446;
  border-radius: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
.anchor-right {
  position: absolute;
  right: 20px;
  top: 10px;
}
@media screen and (max-width: 639px) {
  .footer {
    flex-direction: column;
    padding: 40px 28px 40px 28px;
  }
  .logos {
    justify-content: center;
    margin-top: 40px;
  }
  .logos-right {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
  }
  .box-switch-type {
    max-width: 100%;

    svg {
      width: 167px;
    }
    .title {
      font-size: 22px;
      line-height: 140%;
    }
    .switch-territory {
      max-width: 100%;
      line-height: 14px;
      padding-right: 45px;
    }
  }
  .logo-ore {
    width: 98px;
  }
}
</style>
