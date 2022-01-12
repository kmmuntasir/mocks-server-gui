<template>
  <b-card
    border-variant="dark"
    header="Available Mocks"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <b-container fluid>
      <b-row>
        <b-col v-for="mock in mocks" :key="mock" class="col-4">
          <SingleMockCard />
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
import SingleMockCard from './SingleMockCard'

export default {
  name: 'MockList',
  components: {
    SingleMockCard
  },
  data () {
    return {
      mocks: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>

</style>
