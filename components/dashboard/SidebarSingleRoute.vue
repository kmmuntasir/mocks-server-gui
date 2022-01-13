<template>
  <div>
    <b-button class="mb-2 text-left p-0" variant="light" block>
      <p v-b-toggle="routeId" size="sm" class="mb-0 p-2">
        A route
      </p>
      <b-collapse :id="routeId" class="mt-2">
        <b-card>
          <b-button block variant="primary">
            Variant 1
          </b-button>
          <b-button block variant="light">
            Variant 2
          </b-button>
          <b-button block variant="light">
            Variant 3
          </b-button>
          <b-button block variant="light">
            Variant 4
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'SidebarSingleRoute',
  date () {
    return {
      routeId: 'id'
    }
  },
  created () {
    this.routeId = this.getRandomId(10)
  },
  methods: {
    getRandomId (length) {
      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    }
  }
}
</script>

<style scoped>

</style>
