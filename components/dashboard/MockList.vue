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
    <SingleMockCard v-for="mock in mocks" :key="mock.id" :mock="mock" />
  </b-card>
</template>

<script>
import mocksApi from '../../network/apis/mocksApi'
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
      mocks: []
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
