<template>
  <div id="app" >
    <header-bar v-if="$route.meta.keepAlive"></header-bar>
    <router-view/>
    <side-nav v-if="$route.meta.keepAlive"></side-nav>
    <footer-bar v-if="$route.meta.keepAlive"></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from '@/components/main-layout/HeaderBar';
  import FooterBar from '@/components/main-layout/FooterBar';
  import SideNav from '@/components/main-layout/SideNav';

	export default {
	  name: 'App',
	  components: {
      HeaderBar,
      FooterBar,
      SideNav
    },
	}
</script>

<style lang="scss">
	@import '~styles/base/normalize';
  @import '~styles/base/global';
  html,body {
    height: 100%;
  }
	#app {
    height: 100%;
	}
</style>
