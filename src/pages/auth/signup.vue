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
            <VForm v-slot="{ meta: formMeta }" class="auth__form" :validation-schema="schema" :initial-values="initialValues" @submit="createUser">
               <div class="auth__field">
                  <VField v-slot="{ field, meta }" name="username">
                     <input
                        v-bind="field"
                        class="auth__input"
                        type="text"
                        placeholder="Username"
                        autocomplete="name"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                  </VField>
                  <VErrorMessage class="auth__input-err" name="username" as="span" />
               </div>

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
               <div class="auth__info">
                  <p class="auth__info-text">Используйте 6 или более символов с комбинацией букв, цифр и символов</p>
                  <p class="auth__info-text">
                     Когда вы создаете учетную запись или входите в систему, вы принимаете наши <span> Условия использования</span>
                  </p>
               </div>
               <button type="submit" class="btn auth__btn" :class="{ novalid: !formMeta.valid }">ЗАРЕГИСТРИРОВАТЬСЯ</button>
               <p v-if="isValidvisible" class="auth__input-err auth__input-err--form">Ошибка регистрации, повторите ще раз</p>
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
            <nuxt-link class="auth__login" to="/auth/login"> Уже есть аккаунт? <span>Войти</span> </nuxt-link>
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
         initialValues: { username: "", email: "", password: "" },
         schema: yup.object({
            username: yup.string().trim().required("Обязательное поле").min(4, "Минимальное количество символов 4"),
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

      async createUser(values, actions) {
         const { register } = useStrapiAuth();
         try {
            await register({ username: values.username, email: values.email, password: values.password });
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
