<template>
  <b-card
    border-variant="dark"
    header="Available Routes"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <RouteListSingleRoute v-for="route in routes" :key="route" :route="route" />
  </b-card>
</template>

<script>
import routesApi from '../../network/apis/routesApi'
import Locale from '../../constants/Locale'
import RouteListSingleRoute from './RouteListSingleRoute'

export default {
  name: 'RouteList',
  components: {
    RouteListSingleRoute
  },
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.fetchRoutes()
  },
  methods: {
    async fetchRoutes () {
      await this.$store.commit('loader/show')
      const response = await routesApi.fetchRoutesList()
      if (response.success) {
        this.routes = response.data
      } else {
        await this.$store.commit('toast/show', {
          text: Locale.AN_ERROR_OCCURRED,
          variant: 'danger'
        })
      }
      await this.$store.commit('loader/hide')
    }
  }
}
</script>

<style scoped>

</style>
