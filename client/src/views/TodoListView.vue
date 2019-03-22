<template lang="pug">
section
  h1 ToDOリスト
  NotificationPopup
  TodoList(v-bind:todos=`[
    { id: 1, task: 'テスト1', isCompleted: false },
    { id: 2, task: 'テスト2', isCompleted: true },
  ]`)
</template>

<script>
const TodoList = require('../components/TodoList.vue').default;
const NotificationPopup = require('../components/NotificationPopup.vue')
  .default;

module.exports = {
  components: {
    TodoList,
    NotificationPopup,
  },
};
</script>
