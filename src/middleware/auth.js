import { useAppStore } from "@/store/appStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
   const store = useAppStore();
   
   if (!store.isAuth) {
      return navigateTo("/auth/login");
   }
});
