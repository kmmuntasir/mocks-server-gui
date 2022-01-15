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
          title="Available Mocks"
          :search="true"
          @search="searchMocks"
        />
      </template>
      <SingleMockCard
        v-for="mock in visibleMocks"
        :key="mock.id"
        :mock="storeMockAppliedRoutes(mock)"
        :active="mock.id === currentMock"
        @loading="handleLoader"
      />
    </b-card>
  </b-overlay>
</template>

<script>
import mocksApi from '../../network/apis/mocksApi'
import settings from '../../helpers/settings'
import routesVariants from '../../helpers/routesVariants'
import RootEvent from '../../constants/RootEvent'
import search from '../../helpers/search'
import CustomCardHeader from '../common/CustomCardHeader'
import SingleMockCard from './SingleMockCard'

export default {
  name: 'MockList',
  components: {
    SingleMockCard,
    CustomCardHeader
  },
  data () {
    return {
      mocks: [],
      currentMock: settings.getCurrentMock(),
      loading: true
    }
  },
  computed: {
    visibleMocks () {
      return search.getFilteredList(this.mocks)
    }
  },
  created () {
    this.fetchMocks()
  },
  mounted () {
    this.$root.$on(RootEvent.UPDATE_MOCK, (mock) => {
      this.currentMock = mock.id
    })
  },
  methods: {
    async fetchMocks () {
      this.loading = true
      const response = await mocksApi.fetchMocksList()
      if (response.success) {
        this.mocks = search.makeFilterable(response.data)
      }
      this.loading = false
    },
    storeMockAppliedRoutes (mock) {
      if (mock.id === this.currentMock) {
        routesVariants.setActiveVariants(mock.appliedRoutesVariants)
      }
      return mock
    },
    searchMocks (searchText) {
      this.loading = true
      if (searchText === '') {
        this.mocks.forEach((mock) => {
          mock.show = true
        })
      } else {
        this.mocks.forEach((mock) => {
          mock.show = mock.data.id.includes(searchText)
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
  height: calc(100vh - 140px) !important;
  overflow-y: scroll;
}

</style>
