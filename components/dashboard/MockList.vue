<template>
  <b-card
    border-variant="dark"
    header-tag="header"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <template #header>
      <div class="float-left">
        <h4 class="mb-0 text-left">
          Available Mocks
        </h4>
      </div>
      <div class="float-right">
        <b-form-input size="sm" type="text" placeholder="Type to Search..." />
      </div>
    </template>
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
