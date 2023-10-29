<template>
   <div>
      <h1 style="text-align: center; padding: 20px">Welcome to your dashboard</h1>
      <button class="btn" style="max-width: 300px; margin: 0 auto" @click="logOut">Выйти</button>
   </div>
</template>

<script>
export default {
   setup() {
      definePageMeta({
         layout: "auth",
         middleware: "auth",
      });
   },

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
