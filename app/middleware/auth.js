export default defineNuxtRouteMiddleware(async (to, from) => {
   const jwt = useCookie("strapi_jwt");
   
   if (!jwt.value) {
      return navigateTo("/auth/login");
   }
});
