require('whatwg-fetch');

const Vue = require('vue').default;
const App = require('./App.vue').default;
const router = require('./router');
const store = require('./store');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
