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

import MockList from '../components/MockList'
import RouteList from '../components/RouteList'

export default {
  name: 'IndexPage',
  components: {
    RouteList,
    MockList
  }
}
</script>
