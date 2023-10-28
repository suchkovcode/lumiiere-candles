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
                  <input v-model="username" class="auth__input" type="text" placeholder="Username" minlength="3" required />
               </div>
               <div class="auth__field">
                  <input v-model="email" class="auth__input" type="email" placeholder="Email" required />
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
export default {
   setup() {
      definePageMeta({
         layout: "auth",
      });
   },

   data() {
      return {
         username: "",
         email: "",
         isVisible: false,
         isValidUsername: false,
         isValidEmail: false,
      };
   },

   watch: {
      username(newValue) {
         if (newValue.length > 2) {
            this.isValidUsername = true;
         }
      },
      email(newValue) {
         let reg =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (reg.test(String(newValue).toLowerCase())) {
            this.isValidEmail = true;
         } else {
            this.isValidEmail = false;
         }
      },
   },

   methods: {
      login() {},
   },
};
</script>
