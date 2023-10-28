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
            <h1 class="auth__title">РЕГИСТРАЦИЯ</h1>
            <form class="auth__form" @submit.prevent="onSubmit">
               <div class="auth__field">
                  <input v-model="username" class="auth__input" type="text" name="username" placeholder="Username" />
               </div>

               <div class="auth__field">
                  <input v-model="email" class="auth__input" type="email" placeholder="Email" />
               </div>
               <div class="auth__field auth__field-password" :class="{ active: isVisible }">
                  <input v-model="password" class="auth__input" :type="!isVisible ? 'password' : 'text'" placeholder="Password" />
                  <svg class="auth__input-icon" @click="isVisible = !isVisible">
                     <use xlink:href="/sprite.svg#eye"></use>
                  </svg>
               </div>
               <div class="auth__info">
                  <p class="auth__info-text">Используйте 8 или более символов с комбинацией букв, цифр и символов</p>
                  <p class="auth__info-text">
                     Когда вы создаете учетную запись или входите в систему, вы принимаете наши <span> Условия использования</span>
                  </p>
               </div>
               
               <button type="submit" class="btn auth__btn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
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
            <nuxt-link class="auth__login" to="/auth/login"> Уже есть аккаунт? <span>Войти</span> </nuxt-link>
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
         username: null,
         email: null,
         password: null,
         isVisible: false,
      };
   },

   methods: {
      ...mapActions(useAppStore, { loginAuth: "logIn" }),

      async createUser(e) {
         const { register } = useStrapiAuth();
         try {
            await register({ username: this.username, email: this.email, password: this.password });
            this.loginAuth();
            this.$router.push("/dashboard");
         } catch (e) {
            console.log(e);
         }
      },
   },
};
</script>
