<template>
  <b-card
    border-variant="dark"
    header-tag="header"
    header-bg-variant="dark"
    header-text-variant="white"
  >
    <template #header>
      <CustomCardHeader
        title="Available Routes"
        :search="true"
        @search="searchRoutes"
      />
    </template>
    <RouteListSingleRoute
      v-for="route in routes"
      :key="route.id"
      :route="route"
    />
  </b-card>
</template>

<script>
import routesApi from '../../network/apis/routesApi'
import CustomCardHeader from '../common/CustomCardHeader'
import RouteListSingleRoute from './RouteListSingleRoute'

export default {
  name: 'RouteList',
  components: {
    CustomCardHeader,
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
    },
    searchRoutes (searchText) {
      /// ToDo: Implement search
    }
  }
}
</script>

<style scoped>

div.card-body {
  padding: 5px;
  height: calc(100vh - 140px) !important;
  overflow-y: scroll;
}

</style>
