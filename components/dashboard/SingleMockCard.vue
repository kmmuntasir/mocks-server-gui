<template>
  <div>
    <b-button class="mb-1 text-left p-0" variant="dark" block>
      <p v-b-toggle="`mock-${mock.id}`" size="sm" class="mb-0 p-2">
        {{ mock.id }}
      </p>
      <b-collapse :id="`mock-${mock.id}`" class="mt-2">
        <b-card class="text-dark">
          <p><span>Parent: </span><code>{{ getMockParent(mock) }}</code></p>
          <p>Applied Routes Variants:</p>
          <b-button v-for="route in mock.routesVariants" :key="route" block variant="light" class="text-left">
            {{ route }}
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'SingleMockCard',
  props: {
    mock: {
      type: Object,
      default: null
    }
  },
  methods: {
    getMockParent (mock) {
      return mock.from ?? 'No Parent'
    }
  }
}
</script>

<style scoped>

</style>
