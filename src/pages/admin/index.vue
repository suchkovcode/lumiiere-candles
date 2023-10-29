<template>
   <section>
   </section>
</template>

<script>
export default {
   setup() {
      definePageMeta({
         layout: "admin",
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
