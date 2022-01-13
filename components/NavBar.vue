<template>
  <b-navbar-nav class="ml-auto">
    <nuxt-link class="nav-link" :to="Routes.dashboard">
      Dashboard
    </nuxt-link>
    <nuxt-link class="nav-link nuxt-link-active" :to="Routes.settings">
      Settings
    </nuxt-link>
    <div>
      <b-nav-item-dropdown right>
        <template #button-content>
          User
        </template>
        <b-dropdown-item>
          Profile
        </b-dropdown-item>
        <b-dropdown-item>
          Sign Out
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item :to="Routes.about">
          About Mocks-Server-GUI
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </b-navbar-nav>
</template>

<script>
import Routes from '../constants/Routes'

export default {
  name: 'NavBar',
  data () {
    return {
      Routes
    }
  }
}
</script>
