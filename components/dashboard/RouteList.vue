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
      const response = await routesApi.fetchRoutesList()
      if (response.success) {
        this.routes = response.data
      }
    }
  }
}
</script>

<style scoped>

</style>
