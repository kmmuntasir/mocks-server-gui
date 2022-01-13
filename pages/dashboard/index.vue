<template>
  <b-container fluid>
    <b-row>
      <b-col class="col-3">
        <RouteList />
      </b-col>
      <b-col class="col-9">
        <MockList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import MockList from '../../components/dashboard/MockList'
import RouteList from '../../components/dashboard/RouteList'

export default {
  name: 'DashboardPage',
  components: {
    RouteList,
    MockList
  }
}
</script>
