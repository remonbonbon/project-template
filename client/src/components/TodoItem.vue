<script>
const _ = require('lodash');

module.exports = {
  props: {
    id: String,
    task: String,
    isCompleted: Boolean,
  },
  data(vm) {
    return {
      input: {
        task: vm.task,
        isCompleted: vm.isCompleted,
      },
    };
  },
  created: function() {
    this.debouncedSave = _.debounce(this.save, 400);
  },
  methods: {
    async save() {
      await this.$store.dispatch('todos/update', {
        id: this.id,
        ...this.input,
      });
      this.$store.dispatch('notifications/add', {
        level: 'info',
        code: 'save-task',
        message: `「${this.input.task}」を保存しました。`,
      });
    },
    async remove() {
      await this.$store.dispatch('todos/remove', this.id);
      this.$store.dispatch('notifications/add', {
        level: 'warn',
        code: 'remove-task',
        message: `「${this.input.task}」を削除しました。`,
      });
    },
  },
};
</script>

<template lang="pug">
.todoItem
  label.fixWidth
    input(type="checkbox"
      v-on:change="save"
      v-model="input.isCompleted")
    span 完了
  span.task(v-bind:class="{completed: input.isCompleted}")
    span(v-if="input.isCompleted") {{ input.task }}
    input.task_textbox(type="text"
      v-if="!input.isCompleted"
      v-on:input="debouncedSave"
      v-model="input.task")
  button.fixWidth(v-on:click="remove") 削除
</template>

<style scoped lang="scss">
.todoItem {
  border: 1px solid $border-color;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
}
.fixWidth {
  flex-shrink: 0;
}
.task {
  margin: 0 0.5rem;
  width: 100%;
  &.completed {
    color: #888;
    text-decoration: line-through;
  }
  &_textbox {
    width: 100%;
  }
}
</style>
