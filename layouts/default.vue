<template>
  <div>
    <AppHeader />
    <b-container fluid class="defaultLayoutContainer">
      <b-row>
        <b-col class="col-10">
          <Nuxt />
        </b-col>
        <b-col class="col-2">
          <RightSideBar />
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="notificationModal"
      hide-backdrop
      content-class="shadow"
      hide-header
      :footer-bg-variant="notificationVariant"
      :body-bg-variant="notificationVariant"
      :body-text-variant="notificationVariant === 'light' || notificationVariant === 'warning' ? 'dark' : 'white'"
    >
      <!-- eslint-disable vue/no-v-html -->
      <h5>{{ notificationTitle }}</h5>
      <div v-html="notificationMessage" />
      <!--eslint-enable-->
      <template #modal-footer="{ ok }">
        <b-button class="close" size="sm" @click="ok()">
          <span aria-hidden="true">&times;</span>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import AppHeader from '../components/common/AppHeader'
import RightSideBar from '../components/common/RightSideBar'
import Locale from '../constants/Locale'
import RootEvent from '../constants/RootEvent'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    RightSideBar
  },
  data () {
    return {
      notificationVariant: 'info',
      notificationTitle: 'Notification',
      notificationMessage: 'Some Message'
    }
  },
  head () {
    return {
      title: Locale.BRAND_NAME
    }
  },
  mounted () {
    this.$root.$on(RootEvent.INVOKE_NOTIFICATION, (notification) => {
      this.showNotification(notification)
    })
  },
  methods: {
    showNotification (notification) {
      this.notificationTitle = notification.title
      this.notificationMessage = notification.message
      this.notificationVariant = notification.variant
      this.$bvModal.show('notificationModal')
      setTimeout(() => {
        this.$bvModal.hide('notificationModal')
      }, 5000)
    }
  }
}
</script>

<style>
:root {
  --wrapperTopPadding: 56px;
  --layoutTopBottomPadding: 15px;
}

body {
  margin: 0;
  padding: 0;
  clear: both;
}
.defaultLayoutContainer {
  padding-top: var(--wrapperTopPadding);
  z-index: 100;
}
.defaultLayoutContainer > .row > .col {
  min-height: calc(100vh - var(--wrapperTopPadding));
  padding-top: var(--layoutTopBottomPadding);
  padding-bottom: var(--layoutTopBottomPadding);
}
.alert-content-p {
  line-height: 30px;
}
</style>
