import Vue from 'vue'
import App from './App.vue'
console.log('print', Vue)
console.log('print', App)
new Vue({
  el: '#app',
  render: h => h(App)
})
