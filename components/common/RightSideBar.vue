<template>
  <b-card
    border-variant="dark"
    header="Server Info"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h5 text-right"
  >
    <b-button class="mb-1 text-left p-0" variant="primary" block>
      <p class="mb-0 p-2 text-center">
        Active Mock
      </p>
      <div class="bg-light rounded text-dark text-center p-2">
        {{ server.settings.mock }}
      </div>
    </b-button>
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Server Version</small>
        <b-badge variant="secondary" pill>
          {{ server.version }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>API Delay</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.delay }} ms
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Host</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.host }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Port</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.port }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Log Mode</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.log }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>CORS Policy</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.cors }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>CORS Pre-Flight</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.corsPreFlight }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Mock Path</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.path }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>Admin API Path</small>
        <b-badge variant="secondary" pill>
          {{ server.settings.adminApiPath }}
        </b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <small>CLI Enabled</small>
        <b-badge variant="secondary" pill>
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
  div.card-body {
    padding: 5px;
    height: calc(100vh - 140px) !important;
    overflow-y: scroll;
  }
  .list-group-item {
    padding: 0.75rem 0.50rem;
  }
</style>
