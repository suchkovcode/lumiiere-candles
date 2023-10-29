<template>
   <div class="admin">
      <header class="admin__header">
         <div class="container">
            <div class="admin__header-wrap">
               <div></div>
               <nuxt-link class="admin__header-logo" to="/" aria-label="Logo link">
                  <svg class="admin__header-icon">
                     <use xlink:href="/sprite.svg#logo"></use>
                  </svg>
               </nuxt-link>
               <button class="admin__header-btn" @click="logOut">Выйти</button>
            </div>
         </div>
      </header>
      <main id="admin">
         <slot />
      </main>
   </div>
</template>

<script>
export default {
   methods: {
      logOut() {
         const { logout } = useStrapiAuth();
         process.client ? localStorage.removeItem("username") : false;
         logout();
         this.$router.push("/auth/login");
      },
   },
};
</script>

<style lang="scss">
@import "@/assets/styles/admin/admin";
</style>
