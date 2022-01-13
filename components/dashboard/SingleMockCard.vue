<template>
  <div>
    <b-button class="mb-2 text-left p-0" variant="dark" block>
      <h5 v-b-toggle="mockCardId" size="sm" class="mb-0 p-2 text-center">
        A Mock
      </h5>
      <b-collapse :id="mockCardId" class="mt-2">
        <b-card>
          <b-button block variant="light">
            Route 1
          </b-button>
          <b-button block variant="light">
            Route 2
          </b-button>
          <b-button block variant="light">
            Route 3
          </b-button>
          <b-button block variant="light">
            Route 4
          </b-button>
        </b-card>
      </b-collapse>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'SingleMockCard',
  date () {
    return {
      mockCardId: 'id'
    }
  },
  created () {
    this.mockCardId = this.getRandomId(10)
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
