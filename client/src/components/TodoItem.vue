<script>
module.exports = {
  props: {
    id: String,
    task: String,
    isCompleted: Boolean,
  },
  data: vm => {
    return {
      input: {
        task: vm.task,
        isCompleted: vm.isCompleted,
      },
    };
  },
  watch: {
    'input.isCompleted': function(newValue, oldValue) {
      if (newValue) {
        this.$store.dispatch('notifications/add', {
          level: 'info',
          code: 'complete-task',
          message: `タスク「${this.input.task}」が完了しました。`,
        });
      } else {
        this.$store.dispatch('notifications/add', {
          level: 'warn',
          code: 'restart-task',
          message: `タスク「${this.input.task}」を再開しました。`,
        });
      }
    },
  },
  methods: {},
};
</script>

<template lang="pug">
.todoItem
  label.isCompleted
    input(type="checkbox"
      v-model="input.isCompleted")
    span 完了
  span {{ id }}
  span.task(v-bind:class="{completed: input.isCompleted}")
    span(v-if="input.isCompleted") {{ input.task }}
    input.task_textbox(type="text"
      v-if="!input.isCompleted"
      v-model="input.task")
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
.isCompleted {
  flex-shrink: 0;
}
.task {
  margin-left: 0.5rem;
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
