<template>
  <header>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="brandName">
        <span v-if="!appSettings">
          {{ config.BRAND_NAME }}
        </span>
        <span v-if="appSettings">
          {{ appSettings.brandName }}
        </span>
        <span class="pageName bg-info btn-sm ml-2">
          {{ appSettings || $route.name !== 'index' ? $route.name : 'Setup' }}
        </span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <NavBar />
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import application from '../../helpers/application'
import config from '../../constants/config'
import RootEvent from '../../constants/RootEvent'
import NavBar from './NavBar'

export default {
  name: 'AppHeader',
  components: {
    NavBar
  },
  data () {
    return {
      config,
      appSettings: application.getSettings()
    }
  },
  mounted () {
    this.$root.$on(RootEvent.PROCEED_TO_DASHBOARD, () => {
      this.fetchAppSettings()
    })
    this.$root.$on(RootEvent.PROCEED_TO_SETUP, () => {
      this.fetchAppSettings()
    })
  },
  methods: {
    fetchAppSettings () {
      this.appSettings = application.getSettings()
    }
  }
}
</script>

<style scoped>
  .brandName {
    font-size: 1rem;
  }
  .pageName {
    text-transform: capitalize;
    font-style: italic;
  }
</style>
