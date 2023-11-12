<template>
   <section class="auth">
      <div class="auth__wrapper">
         <header class="auth__header">
            <nuxt-link class="auth__header-logo" to="/" aria-label="Logo link">
               <svg class="auth__header-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#logo"></use>
               </svg>
            </nuxt-link>
         </header>
         <div class="auth__body">
            <h1 class="auth__title">РЕГИСТРАЦИЯ</h1>
            <Form v-slot="{ meta: formMeta }" class="auth__form" :validation-schema="schema" :initial-values="initialValues" @submit="createUser">
               <div class="auth__field">
                  <Field v-slot="{ field, meta }" name="username">
                     <input
                        v-bind="field"
                        class="auth__input"
                        type="text"
                        placeholder="Username"
                        autocomplete="name"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                  </Field>
                  <ErrorMessage class="auth__input-err" name="username" as="span" />
               </div>

               <div class="auth__field">
                  <Field v-slot="{ field, meta }" name="email">
                     <input
                        v-bind="field"
                        class="auth__input"
                        type="email"
                        placeholder="Email"
                        autocomplete="email"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                  </Field>
                  <ErrorMessage class="auth__input-err" name="email" as="span" />
               </div>

               <div class="auth__field auth__field-password" :class="{ active: isVisible }">
                  <Field v-slot="{ field, meta }" name="password">
                     <input
                        v-bind="field"
                        class="auth__input"
                        :type="!isVisible ? 'password' : 'text'"
                        placeholder="Password"
                        autocomplete="on"
                        :class="{ invalid: !meta.valid && meta.touched, valid: meta.valid && meta.touched }" />
                     <svg class="auth__input-icon" @click="isVisible = !isVisible">
                        <use xlink:href="@/assets/img/svg/sprite.svg#eye"></use>
                     </svg>
                  </Field>
                  <ErrorMessage class="auth__input-err" name="password" as="span" />
               </div>
               <div class="auth__info">
                  <p class="auth__info-text">Используйте 6 или более символов с комбинацией букв, цифр и символов</p>
                  <p class="auth__info-text">
                     Когда вы создаете учетную запись или входите в систему, вы принимаете наши <span> Условия использования</span>
                  </p>
               </div>
               <!-- <div class="auth__cloudflare">
                  <LazyNuxtTurnstile v-model="token" />
               </div> -->
               <button
                  type="submit"
                  class="btn auth__btn"
                  :disabled="!formMeta.valid ? true : false"
                  :class="{ novalid: !formMeta.valid }">
                  ЗАРЕГИСТРИРОВАТЬСЯ
               </button>
               <p v-if="isValidVisible" class="auth__input-err auth__input-err--form">Ошибка регистрации, повторите ще раз</p>
            </Form>
            <div class="auth__with">
               <hr />
               <p class="auth__with-text">или</p>
            </div>
            <div class="auth__provider">
               <button class="auth__provider-input" type="button">
                  <svg class="auth__provider-icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#auth-google"></use>
                  </svg>
               </button>
               <button class="auth__provider-input" type="button">
                  <svg class="auth__provider-icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#auth-github"></use>
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

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";

const token = ref(null);
const isValidVisible = ref(false);
const isVisible = ref(false);
const initialValues = ref({ username: "", email: "", password: "" });

const schema = object({
   username: string().trim().required("Обязательное поле").min(4, "Минимальное количество символов 4"),
   email: string()
      .trim()
      .required("Обязательное поле")
      .email("Введите правильный email")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, { message: "Введите полный email" }),
   password: string().trim().required("Обязательное поле").min(6, "Минимальное количество символов 6"),
});

const createUser = async (values, actions) => {
   const { register } = useStrapiAuth();
   try {
      const response = await register({ username: values.username, email: values.email, password: values.password });
      process.client ? localStorage.setItem("username", response.user.value.username) : false;
      $router.push("/admin");
   } catch (e) {
      (isValidvisible.value = true), console.error(e);
      setTimeout(() => {
         sValidvisible.value = false;
      }, 2500);
   } finally {
      actions.resetForm();
   }
};

definePageMeta({
   layout: "auth",
});
</script>
