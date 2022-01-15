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
          title="Custom Mocks"
          :search="true"
          @search="searchMocks"
        />
      </template>
      <SingleCustomMockCard
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
import routesVariants from '../../helpers/routesVariants'
import RootEvent from '../../constants/RootEvent'
import search from '../../helpers/search'
import customMock from '../../helpers/customMock'
import CustomCardHeader from '../common/CustomCardHeader'
import SingleCustomMockCard from './SingleCustomMockCard'

export default {
  name: 'CustomMockList',
  components: {
    SingleCustomMockCard,
    CustomCardHeader
  },
  data () {
    return {
      mocks: [],
      currentMock: customMock.getActiveId(),
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
    fetchMocks () {
      this.loading = true
      this.mocks = customMock.getAll()
      this.loading = false
    },
    storeMockAppliedRoutes (mock) {
      if (mock.id === this.currentMock) {
        routesVariants.applyMultipleVariants(mock.appliedRoutesVariants)
        this.$root.$emit(RootEvent.APPLY_VARIANT)
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
  height: calc((100vh / 3 * 1) - 68px) !important;
  overflow-y: scroll;
}

</style>
