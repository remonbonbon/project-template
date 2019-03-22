const Vue = require('vue').default;
const Vuex = require('vuex').default;
const createLogger = require('vuex/dist/logger');
const notifications = require('./modules/notifications');

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

module.exports = new Vuex.Store({
  modules: {
    notifications,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
