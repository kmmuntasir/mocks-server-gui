<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <b-card
          border-variant="dark"
          header="Mock Server Settings"
          header-bg-variant="dark"
          header-text-variant="white"
          header-class="h5"
        >
          <b-form @submit.prevent="updateSettings">
            <b-form-group label="API Delay" description="Applicable for only the mock APIs.">
              <b-input-group append="millisecond(s)">
                <b-form-input
                  placeholder="Default value is 0"
                  type="number"
                />
              </b-input-group>
            </b-form-group>
          </b-form>
        </b-card>
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
            The <b><em>Base URL</em></b> and <b><em>Admin API Path</em></b> were loaded from the
            <code>~/constants/ApiConstants.js</code> file, and the <b><em>Brand Name</em></b> was loaded from
            <code>~/constants/Locale.js</code> file. If you have changed the values inside the file, you can use the
            <b><em>Change Application Settings</em></b> button above to update the values.
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
// import settings from '../../helpers/settings'

export default {
  name: 'SettingsPage',
  components: {
    BIconArrowRightCircle
  },
  middleware: [SettingsMiddleware],
  data () {
    return {
      applicationSettings: application.getSettings(),
      mockSettings: {},
      changeSettingsAllowed: false
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
    updateSettings () {

    }
  }
}
</script>

<style scoped>
  .cardTitleBarButton {
    font-size: 0.8rem;
    padding: 0.10rem 0.20rem;
  }
  .td-sm {
    width: 50px !important;
  }
</style>
