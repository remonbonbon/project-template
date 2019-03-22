<script>
const TodoItem = require('./TodoItem.vue').default;

module.exports = {
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  methods: {},
};
</script>

<template lang="pug">
.todoList
  TodoItem(
    v-for="todo in todos"
    v-bind:key="todo.id"
    v-bind:task="todo.task"
    v-bind:isCompleted="todo.isCompleted")
</template>

<style scoped lang="scss"></style>
