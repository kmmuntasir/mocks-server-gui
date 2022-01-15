<template>
  <div>
    <b-button
      :variant="`${active ? 'success' : 'dark'}`"
      class="mb-1 text-left p-0"
      block
    >
      <p v-b-toggle="`mock-collapse-${mock.id}`" size="sm" class="mb-0 p-2">
        {{ mock.id }}
      </p>
      <b-collapse :id="`mock-collapse-${mock.id}`" class="mt-2">
        <b-card class="text-dark">
          <b-alert variant="dark" show class="d-flex align-content-center p-2">
            <div>
              <p class="mb-0 alert-content-p">
                <span>Parent: </span><code>{{ getMockParent(mock) }}</code>
              </p>
            </div>
            <b-button
              :variant="`${active ? 'dark' : 'success'}`"
              size="sm"
              class="ml-auto"
              :disabled="active"
              @click="applyMock(mock)"
            >
              <BIconCheck2 v-if="!active" />
              <span>{{ active ? 'Applied' : 'Apply' }}</span>
            </b-button>
            <div class="clearfix" />
          </b-alert>
          <hr>
          <b-button
            v-for="route in mock.routesVariants"
            :key="route"
            block
            variant="outline-dark"
            class="text-left d-flex"
            disabled
          >
            <p class="alert-content-p mb-0">
              {{ getRouteAndVariantFromRouteId(route).route }}
            </p>
            <b-button variant="primary" class="ml-auto" size="sm">
              {{ getRouteAndVariantFromRouteId(route).variant }}
            </b-button>
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
import { BIconCheck2 } from 'bootstrap-vue'
import serverSettingsApi from '../../network/apis/serverSettingsApi'
import settings from '../../helpers/settings'
import routesVariants from '../../helpers/routesVariants'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'SingleMockCard',
  components: {
    BIconCheck2
  },
  props: {
    mock: {
      type: Object,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      getRouteAndVariantFromRouteId: routesVariants.getRouteAndVariantFromRouteId
    }
  },
  methods: {
    getMockParent (mock) {
      return mock.from ?? 'No Parent'
    },
    async applyMock (mock) {
      this.$emit('loading', true)
      const response = await serverSettingsApi.updateSettings({
        mock: mock.id
      })
      if (response.success) {
        settings.update({ mock: mock.id })
        this.$root.$emit(RootEvent.UPDATE_MOCK, mock)
      }
      this.$emit('loading', false)
    }
  }
}
</script>

<style scoped>

</style>
