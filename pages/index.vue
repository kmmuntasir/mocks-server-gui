<template>
  <div class="d-flex flex-column justify-content-center align-items-center fullHeight">
    <div class="setupWizard">
      <b-alert v-if="alert.message" :variant="alert.variant" show size="sm" class="text-center">
        {{ alert.message }}
      </b-alert>
      <b-card
        border-variant="dark"
        :header="title"
        header-bg-variant="dark"
        header-text-variant="white"
      >
        <b-form @submit.prevent="proceed">
          <b-form-group label="Brand Name" description="This will be displayed as Logo">
            <b-form-input
              v-model="setup.brandName"
              placeholder="Example: My Awesome Mock-Server"
              required
              autofocus
            />
          </b-form-group>
          <b-form-group label="Base URL">
            <b-form-input
              v-model="setup.baseUrl"
              placeholder="Example: http://localhost:3000"
              required
            />
          </b-form-group>
          <b-form-group label="Admin API Path">
            <b-form-input
              v-model="setup.adminPath"
              placeholder="Example: /admin"
              required
            />
          </b-form-group>
          <b-form-group label="Admin API URL">
            <b-alert show variant="secondary">
              <code>{{ setup.baseUrl }}{{ setup.adminPath }}</code>
            </b-alert>
          </b-form-group>
          <hr>
          <b-form-group class="d-flex flex-row-reverse">
            <b-button type="submit" variant="primary">
              Proceed
            </b-button>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import Routes from '../constants/Routes'
import application from '../helpers/application'
import Locale from '../constants/Locale'
import RootEvent from '../constants/RootEvent'

export default {
  name: 'DefaultPage',
  data () {
    return {
      title: 'Setup | ' + Locale.BRAND_NAME,
      setup: {
        brandName: '',
        baseUrl: '',
        adminPath: ''
      },
      alert: {
        variant: 'primary',
        message: ''
      },
      settingsLoadedFromFile: false
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  created () {
    this.setApplicationSettings()
  },
  methods: {
    setApplicationSettings () {
      const setup = application.getSettings()
      if (setup) {
        this.setup = setup
        this.settingsLoadedFromFile = false
        this.proceed()
      } else {
        this.setup = application.readSettingsFromConfigFile()
        if (this.setup.baseUrl && this.setup.adminPath) {
          this.settingsLoadedFromFile = true
          this.proceed()
        } else {
          this.alert.message = 'Please complete the setup to access the Dashboard'
        }
      }
    },
    async proceed () {
      this.setup.loadedFromFile = this.settingsLoadedFromFile
      if (await application.validateSettings(this.setup)) {
        this.$root.$emit(RootEvent.PROCEED_TO_DASHBOARD)
        await this.$router.push(Routes.dashboard)
      } else if (this.settingsLoadedFromFile) {
        this.alert = {
          variant: 'danger',
          message: 'ApiConstants Configuration is incorrect. Please change settings and try again. You can also use the form below to use the Dashboard with temporarily stored configuration'
        }
        application.removeSettings()
        this.settingsLoadedFromFile = false
      } else {
        this.alert = {
          variant: 'danger',
          message: 'Failed to connect with the provided settings! Please change settings and try again.'
        }
      }
    }
  }
}
</script>

<style scoped>
  .fullHeight {
    height: calc(100vh - 86px) !important;
  }
  div.setupWizard {
    width: 100vw !important;
    max-width: 500px;
    margin: 0 1em;
  }
</style>
