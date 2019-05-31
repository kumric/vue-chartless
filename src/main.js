import Vue from 'vue'
import Chartless from './Chartless.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Chartless),
}).$mount('#app')

// "main": "./dist/chartless.ssr.js",
// "module": "./dist/chartless.esm.js",

// "src/*",
// "public/*",
// "*.json",
// "*.js"
