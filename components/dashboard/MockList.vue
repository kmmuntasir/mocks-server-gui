<template>
  <b-card
    border-variant="dark"
    header-tag="header"
    header-bg-variant="dark"
    header-text-variant="white"
  >
    <template #header>
      <CustomCardHeader title="Available Mocks" />
    </template>
    <SingleMockCard
      v-for="mock in mocks"
      :key="mock.id"
      :mock="storeMockAppliedRoutes(mock)"
      :active="mock.id === currentMock"
      @changeMock="changeMock"
    />
  </b-card>
</template>

<script>
import mocksApi from '../../network/apis/mocksApi'
import settings from '../../helpers/settings'
import routesVariants from '../../helpers/routesVariants'
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
      currentMock: settings.getCurrentMock()
    }
  },
  created () {
    this.fetchMocks()
  },
  methods: {
    async fetchMocks () {
      const response = await mocksApi.fetchMocksList()
      if (response.success) {
        this.mocks = response.data
      }
    },
    changeMock (mock) {
      this.currentMock = mock.id
      this.$root.$emit('updateMock', mock)
    },
    storeMockAppliedRoutes (mock) {
      if (mock.id === this.currentMock) {
        routesVariants.setActiveVariants(mock.appliedRoutesVariants)
      }
      return mock
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
