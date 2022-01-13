<template>
  <b-card
    border-variant="dark"
    header="Server Info"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4 text-center"
  >
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Server Version
        <b-badge variant="dark" pill>
          {{ server.version }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Current Mock
        <b-badge variant="dark" pill>
          {{ server.settings.mock }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        API Delay
        <b-badge variant="dark" pill>
          {{ server.settings.delay }} ms
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Host
        <b-badge variant="dark" pill>
          {{ server.settings.host }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Port
        <b-badge variant="dark" pill>
          {{ server.settings.port }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Log Mode
        <b-badge variant="dark" pill>
          {{ server.settings.log }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CORS Policy
        <b-badge variant="dark" pill>
          {{ server.settings.cors }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CORS Pre-Flight
        <b-badge variant="dark" pill>
          {{ server.settings.corsPreFlight }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Mock Path
        <b-badge variant="dark" pill>
          {{ server.settings.path }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Settings API Path
        <b-badge variant="dark" pill>
          {{ server.settings.adminApiPath }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        CLI Enabled
        <b-badge variant="dark" pill>
          {{ server.settings.cli }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import serverSettingsApi from '../../network/apis/serverSettingsApi'

export default {
  name: 'RightSideBar',
  data () {
    return {
      server: {
        version: '',
        settings: {}
      }
    }
  },
  created () {
    this.fetchServerVersion()
    this.fetchServerSettings()
  },
  methods: {
    async fetchServerSettings () {
      const response = await serverSettingsApi.fetchSettings()
      if (response.success) {
        this.server.settings = response.data
      }
    },
    async fetchServerVersion () {
      const response = await serverSettingsApi.fetchServerVersion()
      if (response.success) {
        this.server.version = response.data.version
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
