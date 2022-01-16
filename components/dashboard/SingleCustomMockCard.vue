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
            <b-button
              :variant="`${active ? 'dark' : 'success'}`"
              size="sm"
              class="mr-auto"
              :disabled="active"
              @click="applyCustomMock(mock)"
            >
              <BIconCheck2 v-if="!active" />
              <span>{{ active ? 'Applied' : 'Apply' }}</span>
            </b-button>
            <b-button
              variant="danger"
              size="sm"
              class="ml-auto"
              :disabled="active"
              @click="deleteCustomMock(mock)"
            >
              <BIconTrash />
              <span>Delete</span>
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
import { BIconCheck2, BIconTrash } from 'bootstrap-vue'
import routesVariants from '../../helpers/routesVariants'
import RootEvent from '../../constants/RootEvent'
import customMock from '../../helpers/customMock'

export default {
  name: 'SingleCustomMockCard',
  components: {
    BIconCheck2,
    BIconTrash
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
    applyCustomMock (mock) {
      this.$emit('loading', true)
      customMock.apply(mock)
      this.$root.$emit(RootEvent.APPLY_VARIANT, mock)
      this.$root.$emit(RootEvent.APPLY_CUSTOM_MOCK, mock)
      this.$emit('loading', false)
    },
    deleteCustomMock (mock) {
      if (confirm('Are you sure?')) {
        this.$emit('loading', true)
        customMock.delete(mock)
        this.$root.$emit(RootEvent.DELETE_CUSTOM_MOCK)
        this.$emit('loading', false)
      }
    }
  }
}
</script>

<style scoped>

</style>
