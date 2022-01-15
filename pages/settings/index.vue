<template>
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
            Mock Settings
          </h5>
        </div>
        <div class="ml-auto d-flex">
          <b-button
            variant="danger"
            class="cardTitleBarButton mb-0"
            title="Clear All"
            @click="goToAppSettings"
          >
            <span>Change Application Settings</span>
            <BIconArrowRightCircle />
          </b-button>
        </div>
      </div>
    </template>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Setting</th>
          <th>Value</th>
          <th class="td-sm">
            Options
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td>Some Property</td>
          <td>Some Value</td>
          <td>
            <b-button variant="warning" size="sm" class="m-0">
              Edit
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>
  </b-card>
</template>

<script>
import { BIconArrowRightCircle } from 'bootstrap-vue'
import SettingsMiddleware from '../../middleware/SettingsMiddleware'
import Routes from '../../constants/Routes'
import application from '../../helpers/application'

export default {
  name: 'SettingsPage',
  components: {
    BIconArrowRightCircle
  },
  middleware: [SettingsMiddleware],
  data () {
    return {
      rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    goToAppSettings () {
      if (confirm('This will remove current app settings. Are you sure?')) {
        application.removeSettings()
        this.$router.push(Routes.root)
      }
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
