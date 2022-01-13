<template>
  <b-card
    border-variant="dark"
    header="Settings"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4"
  >
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
export default {
  name: 'SettingsPage',
  data () {
    return {
      rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style scoped>
  .td-sm {
    width: 50px !important;
  }
</style>
