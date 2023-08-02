<template>
   <MyHeader v-if="this.$route.path !== '/404'" />
   <main
      class="main"
      id="main">
      <router-view></router-view>
   </main>
   <MyFooter v-if="this.$route.path !== '/404'" />
</template>

<script>


export default {
   name: "App",
};
</script>

<style lang="scss">
@import "@/styles/reset";
@import "@/styles/fonts";
@import "@/styles/var";
@import "@/styles/global";
@import "@/styles/text";
@import "@/styles/btn";
</style>
