<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col class="col-4">
        <RouteList />
      </b-col>
      <b-col class="col-4">
        <MockList />
      </b-col>
      <b-col class="col-4">
        <CustomVariantList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import MockList from '../../components/dashboard/MockList'
import RouteList from '../../components/dashboard/RouteList'
import CustomVariantList from '../../components/dashboard/CustomVariantList'
import SettingsMiddleware from '../../middleware/SettingsMiddleware'

export default {
  name: 'DashboardPage',
  components: {
    RouteList,
    MockList,
    CustomVariantList
  },
  middleware: [SettingsMiddleware]
}
</script>

<style scoped>

</style>
