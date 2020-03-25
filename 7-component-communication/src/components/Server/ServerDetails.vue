<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>Server <strong>#{{ server.id }}</strong> selected, Status: <strong><em>{{ server.status }}</em></strong></p>
    <hr>
    <button @click="resetStatus">Rest to Normal</button>
  </div>
</template>

<script>
import { serverBus } from '../../main';

export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    }
  },
  // Created Lifecycle Hook
  created () {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    })
  }
}
</script>

<style>

</style>