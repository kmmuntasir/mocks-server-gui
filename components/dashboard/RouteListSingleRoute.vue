<template>
  <div>
    <b-button class="mb-2 text-left p-0" variant="light" block>
      <p v-b-toggle="`route-${route.id}`" size="sm" class="mb-0 p-2">
        {{ route.id }}
      </p>
      <b-collapse :id="`route-${route.id}`" class="mt-2">
        <b-card>
          <p><span>URL: </span><code>{{ route.url }}</code></p>
          <p><span>Method: </span><code>{{ route.method }}</code></p>
          <p>Variants:</p>
          <b-button v-for="routeVariant in route.variants" :key="routeVariant" class="text-left" block variant="primary">
            {{ routeVariant }}
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'RouteListSingleRoute',
  props: {
    route: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
