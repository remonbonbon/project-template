<template lang="pug">
main.pageContainer
  section.pageContent
    h1 ToDOリスト
    NotificationPopup
    TodoList
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

<style scoped lang="scss">
.pageContainer {
  display: flex;
  justify-content: center;
}
.pageContent {
  width: 100%;
  max-width: 40rem;
}
</style>
