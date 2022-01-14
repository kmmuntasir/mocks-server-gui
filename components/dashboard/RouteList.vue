<template>
  <b-overlay :show="loading">
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
        @loading="handleLoader"
      />
    </b-card>
  </b-overlay>
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
      routes: [],
      loading: true
    }
  },
  created () {
    this.fetchRoutes()
  },
  methods: {
    async fetchRoutes () {
      this.loading = true
      const response = await routesApi.fetchRoutesList()
      if (response.success) {
        this.routes = response.data
      }
      this.loading = false
    },
    searchRoutes (searchText) {
      /// ToDo: Implement search
    },
    handleLoader (loading) {
      this.loading = loading
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
