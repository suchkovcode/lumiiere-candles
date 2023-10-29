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
               <button type="submit" class="btn auth__btn" :class="{ novalid: !formMeta.valid }">Войти</button>
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
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

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
         isValidvisible: false,
         isVisible: false,
         initialValues: { email: "", password: "" },

         schema: yup.object({
            email: yup
               .string()
               .trim()
               .required("Обязательное поле")
               .email("Введите правильный email")
               .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, { message: "Введите полный email" }),
            password: yup.string().trim().required("Обязательное поле").min(6, "Минимальное количество символов 6"),
         }),
      };
   },

   methods: {
      ...mapActions(useAppStore, { loginAuth: "logIn" }),

      async login(values, actions) {
         const { login } = useStrapiAuth();
         try {
            await login({ identifier: values.email, password: values.password });
            this.loginAuth();
            this.$router.push("/dashboard");
         } catch (e) {
            (this.isValidvisible = true), console.log(e);
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
