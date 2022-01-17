<template>
  <b-card
    border-variant="dark"
    header="About this Project"
    header-bg-variant="dark"
    header-text-variant="white"
    header-class="h4"
  >
    <div class="text-to-read">
      <p>Hi,</p>
      <p>
        Looks like you want to know more about me. Well, I'm a front-end application developed in nuxt.js and vue.js.
        I am a result of the severe desperation and extreme frustration of my developer, which he got over the
        exhaustion of using POSTMAN for changing mocks when using the
        <b><a href="https://www.mocks-server.org/"> mocks-server</a></b> node package.
      </p>

      <p>
        <b><a href="https://www.mocks-server.org/">mocks-server</a></b> is a decent package to create mock responses
        for your API. It has an awesome feature of creating multiple mocks (combinations of responses) and selecting
        the one that suits your needs on the go, either from CLI or by calling an admin API.
      </p>

      <p>
        My developer started out using this package for a large project, and over time, it grew and had a lot of mocks
        to choose from. Maintaining POSTMAN collections for those mocks was a nightmare, he eventually decided to
        build a front-end which can be used as a web interface to control the mocks. As a result, I was born.
      </p>

      <p>
        As of now, there isn't yet any official admin web interface for
        <b><a href="https://www.mocks-server.org/"> mocks-server</a></b>, but don't worry, they have it in there
        roadmap. I believe when they'll be done with that, I'll be obsolete because the official admin web interface
        will be much better than me, and hopefully will have much more features. But for now, I think I'm a good
        enough solution if you plan to use this package for mocking.
      </p>
    </div>
  </b-card>
</template>

<script>
import SettingsMiddleware from '../../middleware/SettingsMiddleware'
export default {
  name: 'AboutPage',
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
