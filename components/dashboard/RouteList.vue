<template>
  <b-card
    border-variant="dark"
    header="Available Routes"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <SidebarSingleRoute v-for="route in routes" :key="route" />
  </b-card>
</template>

<script>
import SidebarSingleRoute from './SidebarSingleRoute'

export default {
  name: 'RouteList',
  components: {
    SidebarSingleRoute
  },
  data () {
    return {
      routes: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>

</style>
