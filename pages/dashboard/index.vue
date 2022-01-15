<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col class="col-4">
        <RouteList />
        <CustomMockList />
      </b-col>
      <b-col class="col-4">
        <MockList />
      </b-col>
      <b-col class="col-4">
        <CustomVariantList />
        <ActiveVariantList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import MockList from '../../components/dashboard/MockList'
import RouteList from '../../components/dashboard/RouteList'
import CustomVariantList from '../../components/dashboard/CustomVariantList'
import ActiveVariantList from '../../components/dashboard/ActiveVariantList'
import SettingsMiddleware from '../../middleware/SettingsMiddleware'
import CustomMockList from '../../components/dashboard/CustomMockList'

export default {
  name: 'DashboardPage',
  components: {
    RouteList,
    CustomMockList,
    MockList,
    CustomVariantList,
    ActiveVariantList
  },
  middleware: [SettingsMiddleware]
}
</script>

<style scoped>

</style>
