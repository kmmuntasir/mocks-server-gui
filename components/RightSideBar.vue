<template>
  <b-card
    border-variant="success"
    header="Server Info"
    header-bg-variant="success"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Current Mock
        <b-badge variant="dark" pill>
          {{ serverSettings.mock }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        API Delay
        <b-badge variant="dark" pill>
          {{ serverSettings.delay }} ms
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Host
        <b-badge variant="dark" pill>
          {{ serverSettings.host }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Port
        <b-badge variant="dark" pill>
          {{ serverSettings.port }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Log Mode
        <b-badge variant="dark" pill>
          {{ serverSettings.log }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CORS Policy
        <b-badge variant="dark" pill>
          {{ serverSettings.cors }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CORS Pre-Flight
        <b-badge variant="dark" pill>
          {{ serverSettings.corsPreFlight }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Mock Path
        <b-badge variant="dark" pill>
          {{ serverSettings.path }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Settings API Path
        <b-badge variant="dark" pill>
          {{ serverSettings.adminApiPath }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CLI Enabled
        <b-badge variant="dark" pill>
          {{ serverSettings.cli }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  name: 'RightSideBar',
  data () {
    return {
      serverSettings: {
        mock: 'default',
        delay: 0,
        host: '0.0.0.0',
        port: 3100,
        log: 'silent',
        cors: true,
        corsPreFlight: true,
        behavior: null,
        pathLegacy: null,
        watchLegacy: true,
        path: 'mocks',
        watch: true,
        adminApiPath: '/admin',
        cli: true
      }
    }
  }
}
</script>

<style scoped>
  div.card {
    min-height: calc(100vh - 86px);
  }

  div.card-body {
    padding: 5px;
  }
</style>
