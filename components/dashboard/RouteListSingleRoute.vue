<template>
  <div>
    <b-button class="mb-1 text-left p-0" variant="light" block>
      <p v-b-toggle="`route-${route.id}`" size="sm" class="mb-0 p-2">
        {{ route.id }}
      </p>
      <b-collapse :id="`route-${route.id}`" class="mt-2">
        <b-card class="text-dark">
          <p class="mb-0">
            <span>URL: </span><code>{{ route.url }}</code>
          </p>
          <hr>
          <p class="mb-0">
            <span>Method: </span><code>{{ route.method }}</code>
          </p>
          <hr>
          <b-button
            v-for="routeVariant in route.variants"
            :key="routeVariant"
            :disabled="checkIfVariantIsActive(routeVariant)"
            class="text-left d-flex"
            block
            :variant="checkIfVariantIsActive(routeVariant) ? 'success' : 'outline-success'"
            :title="checkIfVariantIsActive(routeVariant) ? '': 'Click to Apply this Variant'"
            @click="applyVariant(routeVariant)"
          >
            <p class="alert-content-p mb-0">
              {{ getRouteAndVariantFromRouteId(routeVariant).variant }}
            </p>
            <b-button
              v-if="checkIfVariantIsActive(routeVariant)"
              variant="light"
              size="sm"
              class="ml-auto"
            >
              <BIconCheck2 />
            </b-button>
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
import { BIconCheck2 } from 'bootstrap-vue'
import routesVariants from '../../helpers/routesVariants'
import customVariantApi from '../../network/apis/customVariantApi'
import RootEvent from '../../constants/RootEvent'

export default {
  name: 'RouteListSingleRoute',
  components: {
    BIconCheck2
  },
  props: {
    route: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      getRouteAndVariantFromRouteId: routesVariants.getRouteAndVariantFromRouteId,
      activeVariants: routesVariants.getActiveVariants()
    }
  },
  mounted () {
    this.$root.$on(RootEvent.APPLY_VARIANT, () => {
      this.fetchActiveVariants()
    })
    this.$root.$on(RootEvent.APPLY_CUSTOM_MOCK, () => {
      this.$emit('loading', true)
      this.fetchActiveVariants()
      this.$emit('loading', false)
    })
  },
  methods: {
    fetchActiveVariants () {
      this.activeVariants = routesVariants.getActiveVariants()
    },
    async applyVariant (routeVariant) {
      this.$emit('loading', true)
      const response = await customVariantApi.applyCustomVariant(routeVariant)
      if (response.success) {
        routesVariants.apply(routeVariant)
        this.$root.$emit(RootEvent.APPLY_VARIANT)
      }
      this.$emit('loading', false)
    },
    checkIfVariantIsActive (routeVariant) {
      return this.activeVariants.includes(routeVariant)
    }
  }
}
</script>

<style scoped>

</style>
