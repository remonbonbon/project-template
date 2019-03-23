const Vue = require('vue').default;
const Vuex = require('vuex').default;
const createLogger = require('vuex/dist/logger');

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const notifications = require('./modules/notifications');
const todos = require('./modules/todos');
module.exports = new Vuex.Store({
  modules: {
    notifications,
    todos,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
