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
            <VForm v-slot="{ meta: formMeta }" class="auth__form" :validation-schema="schema" :initial-values="initialValues" @submit="login">
               <div class="auth__field">
                  <VField v-slot="{ field, meta }" name="email">
                     <input
                        v-bind="field"
                        class="auth__input"
                        type="email"
                        placeholder="Email"
                        autocomplete="email"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                  </VField>
                  <VErrorMessage class="auth__input-err" name="email" as="span" />
               </div>
               <div class="auth__field auth__field-password" :class="{ active: isVisible }">
                  <VField v-slot="{ field, meta }" name="password">
                     <input
                        v-bind="field"
                        class="auth__input"
                        :type="!isVisible ? 'password' : 'text'"
                        placeholder="Password"
                        autocomplete="on"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                     <svg class="auth__input-icon" @click="isVisible = !isVisible">
                        <use xlink:href="/sprite.svg#eye"></use>
                     </svg>
                  </VField>
                  <VErrorMessage class="auth__input-err" name="password" as="span" />
               </div>
               <div class="auth__cloudflare">
                  <NuxtTurnstile v-model="token" />
               </div>
               <button
                  type="submit"
                  class="btn auth__btn"
                  :disabled="!formMeta.valid || !token ? true : false"
                  :class="{ novalid: !formMeta.valid || !token }">
                  Войти
               </button>
               <p v-if="isValidvisible" class="auth__input-err auth__input-err--form">Ошибка авторизации, повторите ще раз</p>
            </VForm>
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
               <nuxt-link class="auth__footer-link" to="/policy"> Privacy policy </nuxt-link>
               <nuxt-link class="auth__footer-link" to="/oferta"> Terms of Use </nuxt-link>
            </p>
         </footer>
      </div>
   </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";

export default {
   components: {
      VForm: Form,
      VField: Field,
      VErrorMessage: ErrorMessage,
   },

   setup() {
      definePageMeta({
         layout: "auth",
      });
   },

   data() {
      return {
         token: null,
         isValidvisible: false,
         isVisible: false,
         initialValues: { email: "", password: "" },

         schema: object({
            email: string()
               .trim()
               .required("Обязательное поле")
               .email("Введите правильный email")
               .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, { message: "Введите полный email" }),
            password: string().trim().required("Обязательное поле").min(6, "Минимальное количество символов 6"),
         }),
      };
   },

   methods: {
      async login(values, actions) {
         const { login } = useStrapiAuth();
         try {
            if (this.token) {
               const response = await login({ identifier: values.email, password: values.password });
               process.client ? localStorage.setItem("username", response.user.value.username) : false;
               this.token = null;
               this.$router.push("/admin");
            }
         } catch (e) {
            (this.isValidvisible = true), console.error(e);
            setTimeout(() => {
               this.isValidvisible = false;
            }, 2500);
         } finally {
            actions.resetForm();
         }
      },
   },
};
</script>

<style lang="scss">
/* stylelint-disable at-rule-empty-line-before */
@import "@/assets/styles/base/reset";
@import "@/assets/styles/base/fonts";
@import "@/assets/styles/base/var";
@import "@/assets/styles/base/mixin";
@import "@/assets/styles/base/global";
@import "@/assets/styles/base/text";
@import "@/assets/styles/base/btn";

@import "@/assets/styles/pages/auth/layouts";
@import "@/assets/styles/pages/auth/auth";
</style>
