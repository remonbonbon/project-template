const Vue = require('vue').default;
const Router = require('vue-router').default;
const TodoListView = require('./views/TodoListView.vue').default;

Vue.use(Router);

module.exports = new Router({
  mode: 'hash',
  routes: [{ path: '/', component: TodoListView }],
  scrollBehavior: (to, from, savedPosition) => {
    // 戻るボタンで戻ってきたときに前のスクロール位置を復元
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
});
