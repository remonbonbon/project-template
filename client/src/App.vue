<template lang="pug">
#app
  CommonHeader
  router-view
  CommonFooter
</template>

<script>
const CommonHeader = require('./components/CommonHeader.vue').default;
const CommonFooter = require('./components/CommonFooter.vue').default;

module.exports = {
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>

<style lang="scss">
@import './scss/reset.scss';
</style>
