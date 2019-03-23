const Vue = require('vue').default;
const App = require('./App.vue').default;
const axios = require('axios');
const router = require('./router');
const store = require('./store');

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL_BASE;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
