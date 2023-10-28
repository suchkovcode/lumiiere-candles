<template>
   <section class="auth">
      <div class="auth__wrapper">
         <header class="auth__header">
            <nuxt-link class="auth__header-logo" to="/" aria-label="Logo link">
               <svg class="auth__header-icon">
                  <use xlink:href="/sprite.svg#logo"></use>
               </svg>
            </nuxt-link>
         </header>
         <div class="auth__body">
            <h1 class="auth__title">Авторизация</h1>
            <form class="auth__form" @submit.prevent>
               <div class="auth__field">
                  <input v-model="email" class="auth__input" type="email" placeholder="Email" autocomplete="email" required />
               </div>
               <div class="auth__field auth__field-password" :class="{ active: isVisible }">
                  <input
                     v-model="password"
                     class="auth__input"
                     :type="!isVisible ? 'password' : 'text'"
                     placeholder="Password"
                     minlength="6"
                     autocomplete="current-password"
                     required />
                  <svg class="auth__input-icon" @click="isVisible = !isVisible">
                     <use xlink:href="/sprite.svg#eye"></use>
                  </svg>
               </div>
               <button type="button" class="btn auth__btn" @click="login">Войти</button>
            </form>
            <div class="auth__with">
               <hr />
               <p class="auth__with-text">или</p>
            </div>
            <div class="auth__provider">
               <button class="auth__provider-input" type="button">
                  <svg class="auth__provider-icon">
                     <use xlink:href="/sprite.svg#auth-google"></use>
                  </svg>
               </button>
               <button class="auth__provider-input" type="button">
                  <svg class="auth__provider-icon">
                     <use xlink:href="/sprite.svg#auth-github"></use>
                  </svg>
               </button>
            </div>
            <nuxt-link class="auth__login" to="/auth/signup"> У вас еще нет аккаунт? <span>Зарегистрироваться</span> </nuxt-link>
         </div>
         <footer class="auth__footer">
            <p class="auth__footer-text">© 2023 Lumiiere. All rights reserved.</p>
            <p class="auth__footer-text">
               <nuxt-link class="auth__footer-link" to="/"> Privacy policy </nuxt-link>
               <nuxt-link class="auth__footer-link" to="/"> Terms of Use </nuxt-link>
            </p>
         </footer>
      </div>
   </section>
</template>

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   setup() {
      definePageMeta({
         layout: "auth",
      });
   },

   data() {
      return {
         email: "",
         password: "",
         isVisible: false,
      };
   },

   computed: {},

   methods: {
      ...mapActions(useAppStore, { loginAuth: "logIn" }),

      async login() {
         const { login } = useStrapiAuth();
         try {
            await login({ identifier: this.email, password: this.password });
            await this.loginAuth();
            this.$router.push("/dashboard");
         } catch (e) {
            console.log(e);
         }
      },
   },
};
</script>
