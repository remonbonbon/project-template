<script>
const Vuex = require('vuex');
const mapState = Vuex.mapState;
const TodoItem = require('./TodoItem.vue').default;

module.exports = {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTask: '',
    };
  },
  computed: {
    ...mapState('todos', ['todos']),
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      await this.$store.dispatch('todos/list');
      this.$store.dispatch('notifications/add', {
        level: 'info',
        code: 'fetch-todos',
        message: `ToDOを読み込みました。`,
      });
    },
    async addNewTask() {
      await this.$store.dispatch('todos/add', {
        task: this.newTask,
        isCompleted: false,
      });
      this.$store.dispatch('notifications/add', {
        level: 'info',
        code: 'new-todo',
        message: `「${this.newTask}」を作成しました。`,
      });
      this.newTask = '';
    },
  },
};
</script>

<template lang="pug">
.todoList
  form.newTask(v-on:submit.prevent="addNewTask")
    input.newTask_textbox(type="text"
      placeholder="新しいToDOを入力"
      v-model="newTask")
    button.newTask_button(type="submit") 作成
  TodoItem(
    v-for="todo in todos"
    v-bind:key="todo.id"
    v-bind:id="todo.id"
    v-bind:task="todo.task"
    v-bind:isCompleted="todo.isCompleted")
</template>

<style scoped lang="scss">
.newTask {
  width: 100%;
  display: flex;

  &_textbox {
    width: 100%;
  }
  &_button {
    flex-shrink: 0;
    padding: 0 0.5rem;
  }
}
</style>
