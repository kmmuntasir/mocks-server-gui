<template>
  <b-card
    border-variant="dark"
    header="All you need to know..."
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4"
  >
    <div class="text-to-read">
      <b-alert variant="info" show class="text-center">
        <b>Disclaimer: </b> You should get familiarized with the
        <b><a href="https://www.mocks-server.org/">mocks-server</a></b> package before using this application.
      </b-alert>
      <ol type="i">
        <li>
          <b>Control Application Settings: </b> When you first run me, you should see a setup page where you can
          configure the Brand Name, API Host and Admin API Path. These settings will be saved in the browser memory
          and will be used throughout your usage. You can change them at any time.<br>
          If you wish to use me for a bigger project where multiple developers will be working and you don't want all
          of them to be bothered to input the configuration data, you can <i>hard-code</i> these settings in
          the <code>~/constants/config.js</code> file. I will automatically read those settings from there and won't
          bother any of you for configuration.
        </li>
        <li>
          <b>Control Mocks Server Settings: </b> You can control the <b>CORS Policy</b>, <b>API Delay</b>, or even
          <b>Mock Directory Path</b> from the settings page, while the server is running. The settings will be applied
          immediately and you can see them in the <b>Server Status</b> sidebar.<br>
          <span class="text-danger">
            <b>Note: </b> Change the <b>Mock Directory Path</b> ***ONLY IF*** you have multiple sets of mocks set up
            in your mock server in multiple directories.
          </span>
        </li>
        <li>
          <b>Apply Mocks: </b> In the Dashboard, you should see the <b>Available Mocks</b> section. You can click to
          expand each mocks and see all the routes variants for that mock. You can click the <b>Apply</b> button to
          apply that mock immediately.<br>
          <b>Note: </b> All the currently configured custom route-variants will be removed when
          you apply a mock.
        </li>
        <li>
          <b>Apply Routes Variants: </b> In the Dashboard, you should see the <b>Available Routes</b> section. You
          can click to expand each routes and see all the routes variants for that route. You can click any routes
          variant, which is not active, to activate it. When activated a route variant, the previously active variant
          of that route will be removed from the custom variants list, if present.
        </li>
        <li>
          <b>Clear Custom Variants: </b> At any moment, you can use the Red <b>Clear All</b> button in the header of
          the <b>Custom Variants</b> section in the Dashboard to clear all the custom route variants. This will make
          the server return to the default state of the currently active mock. Please note that this button will not
          be visible when the custom variants list is empty.
        </li>
        <li>
          <b>Save/Delete Custom Mocks: </b> In the Dashboard, you should see the <b>Active Variants</b> section. It
          contains all the routes variants that are currently active in the mock server. Using the Blue
          <b>Save Custom Mock</b> button, you can save this current combination of route variants as a custom mock,
          which you can apply later. Please note that this button will not be visible when the custom variants list
          is empty.
          <br>From the <b>Custom Mocks</b> section in the Dashboard, you can expand any saved custom mock, view the
          routes variants list, apply it by using the Apply button. And if you want, you can use the delete button to
          delete the custom mock.
        </li>
      </ol>
    </div>
  </b-card>
</template>

<script>
import SettingsMiddleware from '../../middleware/SettingsMiddleware'

export default {
  name: 'DocPage',
  middleware: [SettingsMiddleware]
}
</script>

<style scoped>

div.card-body {
  height: calc(100vh - 144px) !important;
  overflow-y: scroll;
}

.text-to-read {
  font-size: 1.2em;
  font-family: monospace;
  line-height: 1.8;
  text-align: justify;
}

.text-to-read li {
  margin-bottom: 1em;
}

</style>
