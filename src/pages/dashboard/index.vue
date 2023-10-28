<template>
   <div>
      <h1 style="text-align: center; padding: 20px">Welcome to your dashboard</h1>
      <button class="btn" style="max-width: 300px; margin: 0 auto" @click="logOut">Выйти</button>
   </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   setup() {
      definePageMeta({
         layout: "auth",
         middleware: "auth",
      });
   },

   methods: {
      ...mapActions(useAppStore, { logoutAuth: "logOut" }),

      logOut() {
         const { logout } = useStrapiAuth();
         logout();
         this.logoutAuth();
         this.$router.push("/auth/login");
      },
   },
};
</script>
