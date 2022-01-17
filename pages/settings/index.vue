<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <b-overlay :show="loading">
          <b-card
            border-variant="dark"
            header="Mock Server Settings"
            header-bg-variant="dark"
            header-text-variant="white"
            header-class="h5"
          >
            <b-form @submit.prevent="updateSettings">
              <b-form-group
                label-cols="5"
                label="CORS Policy"
              >
                <b-form-checkbox
                  v-model="serverSettings.cors"
                  value="true"
                  unchecked-value="false"
                  @change="updateDataModifiedFlag"
                >
                  {{ serverSettings.cors === 'true' ? 'Enabled' : 'Disabled' }}
                </b-form-checkbox>
              </b-form-group>
              <b-form-group
                label-cols="5"
                label="CORS Preflight"
              >
                <b-form-checkbox
                  v-model="serverSettings.corsPreFlight"
                  value="true"
                  unchecked-value="false"
                  @change="updateDataModifiedFlag"
                >
                  {{ serverSettings.corsPreFlight === 'true' ? 'Enabled' : 'Disabled' }}
                </b-form-checkbox>
              </b-form-group>
              <b-form-group
                label-cols="5"
                label="API Delay"
                description="Applicable for only the mock APIs."
              >
                <b-input-group append="millisecond(s)">
                  <b-form-input
                    v-model="serverSettings.delay"
                    placeholder="Default value is 0"
                    type="number"
                    @change="updateDataModifiedFlag"
                    @keyup="updateDataModifiedFlag"
                  />
                </b-input-group>
              </b-form-group>
              <hr>
              <b-form-group
                label-cols="5"
                label="Mock Directory Path"
              >
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-danger border-danger">
                      <strong class="text-white">Application Root/</strong>
                    </b-input-group-text>
                  </template>
                  <b-form-input
                    v-model="serverSettings.path"
                    class="border-danger"
                    @change="updateDataModifiedFlag"
                    @keyup="updateDataModifiedFlag"
                  />
                </b-input-group>
                <b-alert variant="danger" size="sm" show class="mt-2">
                  <p>
                    Depending on different mock directories set up in the server, you might need to manually apply
                    the default mock (from the dashboard) after changing the mock path.
                  </p>
                  <b>Hint:</b> Normally you don't have to change this value.
                </b-alert>
              </b-form-group>
              <hr>
              <b-form-group class="d-flex flex-row-reverse">
                <b-button type="submit" variant="primary" :disabled="!dataModified">
                  Save
                </b-button>
              </b-form-group>
            </b-form>
          </b-card>
        </b-overlay>
      </b-col>
      <b-col>
        <b-card
          border-variant="dark"
          header-tag="header"
          header-bg-variant="dark"
          header-text-variant="white"
        >
          <template #header>
            <div class="d-flex">
              <div>
                <h5 class="mb-0 text-left">
                  Application Settings
                </h5>
              </div>
              <div class="ml-auto d-flex">
                <b-button
                  variant="danger"
                  class="cardTitleBarButton mb-0"
                  title="Clear All"
                  @click="goToAppSettings"
                >
                  <span>
                    {{ changeSettingsAllowed ? 'Change Application Settings' : 'Reload Settings From Config' }}
                  </span>
                  <BIconArrowRightCircle />
                </b-button>
              </div>
            </div>
          </template>
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span>Brand Name</span>
              <code>{{ applicationSettings.brandName }}</code>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span>Base URL</span>
              <code>{{ applicationSettings.baseUrl }}</code>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <span>Admin API Path</span>
              <code>{{ applicationSettings.adminPath }}</code>
            </b-list-group-item>
          </b-list-group>
          <b-alert v-if="applicationSettings.loadedFromFile" show class="mt-2">
            <b>Note: </b>
            <hr class="mt-2 mb-2">
            These settings were loaded from the <code>~/constants/config.js</code> file. If you have changed the
            values inside the file, you can use the <b><em>Reload Settings From Config</em></b> button above to
            update the values.
          </b-alert>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconArrowRightCircle } from 'bootstrap-vue'
import SettingsMiddleware from '../../middleware/SettingsMiddleware'
import Routes from '../../constants/Routes'
import application from '../../helpers/application'
import settings from '../../helpers/settings'
import serverSettingsApi from '../../network/apis/serverSettingsApi'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'SettingsPage',
  components: {
    BIconArrowRightCircle
  },
  middleware: [SettingsMiddleware],
  data () {
    return {
      applicationSettings: application.getSettings(),
      serverSettings: settings.readServerSettingsFromMemory(),
      changeSettingsAllowed: false,
      loading: false,
      dataModified: false
    }
  },
  created () {
    this.changeSettingsAllowed = !this.applicationSettings.loadedFromFile
  },
  methods: {
    goToAppSettings () {
      if (confirm('This will remove current app settings. Are you sure?')) {
        application.removeSettings()
        this.$router.push(Routes.root)
      }
    },
    updateDataModifiedFlag () {
      this.dataModified = !settings.compareSettingsWithMemory(this.serverSettings)
    },
    async updateSettings () {
      this.loading = true
      const response = await serverSettingsApi.updateSettings(this.serverSettings)
      if (response.success) {
        this.$root.$emit(RootEvent.UPDATE_SERVER_SETTINGS)
        settings.update(this.serverSettings)
        this.updateDataModifiedFlag()
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .cardTitleBarButton {
    font-size: 0.8rem;
    padding: 0.10rem 0.20rem;
  }

  div.card-body {
    height: calc(100vh - 140px) !important;
    overflow-y: scroll;
  }
</style>
