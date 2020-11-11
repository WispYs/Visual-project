<template>
  <div class="layout">
    <header-bar></header-bar>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from './main-layout/HeaderBar';
  import FooterBar   from './main-layout/FooterBar';

  export default {
    components: {
      HeaderBar,
      FooterBar
    },

  };
</script>

<style lang="scss" scoped>
  @import '~styles/base/variable';

  .layout {
    
  }
</style>
