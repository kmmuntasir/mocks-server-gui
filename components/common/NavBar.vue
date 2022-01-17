<template>
  <b-navbar-nav class="ml-auto">
    <nuxt-link class="nav-link" :to="Routes.dashboard">
      <small><BIconGrid1x2Fill /></small>
      <span>Dashboard</span>
    </nuxt-link>
    <nuxt-link class="nav-link nuxt-link-active" :to="Routes.settings">
      <small><BIconGearFill /></small>
      <span>Settings</span>
    </nuxt-link>
    <div>
      <b-nav-item-dropdown right>
        <template #button-content>
          <small><BIconEmojiSunglassesFill /></small>
          <span>Misc.</span>
        </template>
        <b-dropdown-item :to="Routes.doc">
          <small><BIconJournalBookmarkFill /></small>
          <span>Documentation</span>
        </b-dropdown-item>
        <b-dropdown-item :to="Routes.about">
          <small><BIconJournalText /></small>
          <span>About Mocks-Server-GUI</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </b-navbar-nav>
</template>

<script>
import {
  BIconGearFill,
  BIconGrid1x2Fill,
  BIconEmojiSunglassesFill,
  BIconJournalText,
  BIconJournalBookmarkFill
} from 'bootstrap-vue'
import Routes from '../../constants/Routes'

export default {
  name: 'NavBar',
  components: {
    BIconGearFill,
    BIconGrid1x2Fill,
    BIconEmojiSunglassesFill,
    BIconJournalText,
    BIconJournalBookmarkFill
  },
  data () {
    return {
      Routes
    }
  }
}
</script>
