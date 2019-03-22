<script>
const Vuex = require('vuex');
const mapGetters = Vuex.mapGetters;
const mapActions = Vuex.mapActions;

module.exports = {
  computed: {
    ...mapGetters('notifications', ['notifications']),
  },
  methods: {
    ...mapActions('notifications', ['remove']),
  },
};
</script>

<template lang="pug">
div
  .notifications(v-if="notifications.length > 0")
    .notification(v-for="n in notifications"
      v-bind:key="n.id"
      v-bind:class="[`notification-${n.level}`]")
      span {{ n.date.toLocaleString() }} {{ n.message }}
      button(v-on:click="remove(n.id)") OK
</template>

<style scoped lang="scss">
.notifications {
  z-index: 1000;
  position: absolute;
  top: 10px;
  right: 10px;
}
.notification {
  background-color: $body-bg;
  border: 1px solid $border-color;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  padding: 0.5rem;

  &:not(:first-child) {
    margin-top: 0.6rem;
  }

  &-info {
    background-color: rgb(205, 255, 218);
    border: 1px solid rgb(162, 231, 171);
  }
  &-warn {
    background-color: rgb(255, 236, 194);
    border: 1px solid rgb(233, 199, 135);
  }
}
</style>
