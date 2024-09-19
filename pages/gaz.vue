<!--<script>
import elecView from '~/views/elecTemplate.vue'
export default elecView
</script>-->

<!---
<script>
import elecView from '~/views/elecTemplate.vue'
export default elecView
console.log("TOTO")
</script>-->

<template>
    <div>
        <AppHeader />
        <elec-view />
        <AppFooter />
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
    
  
  
