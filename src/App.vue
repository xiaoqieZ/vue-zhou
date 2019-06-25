<template>
  <div id="app">
<!-- 路由 -->
    <transition mode="out-in">
		  <router-view></router-view>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
	overflow-x: hidden;
}
 /* .v-enter{
	 opacity: 0;
	 transform: translateX(100%);
	 position: absolute;
 }
 .v-leave-to{
	 opacity: 0;
	 transform: translateX(-100%);
	 position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
	 transition: all 0.5s ease; 
 } */
</style>

