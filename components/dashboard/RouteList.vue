<template>
  <b-overlay :show="loading" class="mb-3">
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
        v-for="route in visibleRoutes"
        :key="route.id"
        :route="route"
        @loading="handleLoader"
      />
    </b-card>
  </b-overlay>
</template>

<script>
import routesApi from '../../network/apis/routesApi'
import search from '../../helpers/search'
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
  computed: {
    visibleRoutes () {
      return search.getFilteredList(this.routes)
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
        this.routes = search.makeFilterable(response.data)
      }
      this.loading = false
    },
    searchRoutes (searchText) {
      this.loading = true
      if (searchText === '') {
        this.routes.forEach((route) => {
          route.show = true
        })
      } else {
        this.routes.forEach((route) => {
          route.show = route.data.id.includes(searchText)
        })
      }
      this.loading = false
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
  height: calc((100vh / 3 * 2) - 140px) !important;
  overflow-y: scroll;
}

</style>
