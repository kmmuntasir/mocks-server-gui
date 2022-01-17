<template>
  <b-overlay :show="loading">
    <b-card
      border-variant="dark"
      header="Server Info"
      header-bg-variant="dark"
      header-text-variant="white"
      header-class="h5 text-right"
    >
      <b-button class="mb-1 text-left p-0" variant="primary" block>
        <b-badge variant="light" class="float-right mr-1 mt-1">
          Active Mock
        </b-badge>
        <p class="h5 mt-4 mb-4 p-0 pl-1 pr-1 text-center">
          {{ server.settings.mock }}
        </p>
      </b-button>
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Server Version</small>
          <b-badge variant="secondary">
            {{ server.version }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>API Delay</small>
          <b-badge variant="secondary">
            {{ server.settings.delay }} ms
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Host</small>
          <b-badge variant="secondary">
            {{ server.settings.host }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Port</small>
          <b-badge variant="secondary">
            {{ server.settings.port }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Log Mode</small>
          <b-badge variant="secondary">
            {{ server.settings.log }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>CORS Policy</small>
          <b-badge variant="secondary">
            {{ server.settings.cors === 'true' ? 'Enabled' : 'Disabled' }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>CORS Pre-Flight</small>
          <b-badge variant="secondary">
            {{ server.settings.corsPreFlight === 'true' ? 'Enabled' : 'Disabled' }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Mock Path</small>
          <b-badge variant="secondary">
            {{ server.settings.path }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>Admin API Path</small>
          <b-badge variant="secondary">
            {{ server.settings.adminApiPath }}
          </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <small>CLI Enabled</small>
          <b-badge variant="secondary">
            {{ server.settings.cli }}
          </b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-overlay>
</template>

<script>
import serverSettingsApi from '../../network/apis/serverSettingsApi'
import settings from '../../helpers/settings'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'RightSideBar',
  data () {
    return {
      server: {
        version: '',
        settings: {}
      },
      loading: true
    }
  },
  created () {
    this.fetchServerSettings()
  },
  mounted () {
    this.$root.$on(RootEvent.UPDATE_MOCK, () => {
      this.server.settings.mock = settings.getCurrentMock()
    })
    this.$root.$on(RootEvent.UPDATE_SERVER_SETTINGS, () => {
      this.fetchServerSettings()
    })
  },
  methods: {
    async fetchServerSettings () {
      this.loading = true
      let response = await serverSettingsApi.fetchSettings()
      if (response.success) {
        this.server.settings = response.data
        settings.update(this.server.settings)
        this.$root.$emit(RootEvent.UPDATE_MOCK, { id: this.server.settings.mock })
      }
      response = await serverSettingsApi.fetchServerVersion()
      if (response.success) {
        this.server.version = response.data.version
        settings.update({ version: this.server.version })
      }
      this.loading = false
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
