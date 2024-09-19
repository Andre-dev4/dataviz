<!---
<script>
import elecView from '~/views/elecTemplate.vue'
export default elecView
console.log("TOTO")
</script>-->

<!--<template>
    <div>
      <elec-view />
      <AppFooter />
    </div>
</template>
  
<script>
    import elecView from '~/views/elecTemplate.vue'
    import AppFooter from '~/components/app-footer.vue'

    export default {

    components: {elecView, AppFooter},
    }
</script>-->

<template>
  <div class="page">
      <!---<AppHeader />-->
      <elec-view />
      <!--<AppFooter />-->
  </div>
</template>
  
<script>
  import elecView from '~/views/elecTemplate.vue'
  import AppFooter from '~/components/app-footer.vue'
  import AppHeader from '~/components/app-header.vue'

  export default {
      components: {
          elecView,
          AppFooter,
          AppHeader
      }
  }
</script>

<style lang="scss">
@import '~assets/scss/_variables.scss';
@import '~assets/scss/_browsers.scss';
.page {

--primary-100: #ec81a6;
--header-gradient: linear-gradient(180deg, #ec81a6, #141446);
--mobility-100: #ec81a6;
--secondary-F-25: #fabbae;

}
</style>