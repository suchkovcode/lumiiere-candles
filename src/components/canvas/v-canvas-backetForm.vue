<template>
   <form class="backetForm" @submit.prevent="onSubmit">
      <div class="backetForm__contact">
         <h2 class="backetForm__title">Оформить заказ</h2>
         <div class="backetForm__input-box">
            <input
               class="backetForm__input"
               name="name"
               type="text"
               placeholder="Ваше имя"
               :class="{ invalid: v$.name.$error }"
               v-model.trim="name"
               @blur="v$.name.$touch" />
            <span v-if="v$.name.$error" class="backetForm__input-err">{{ v$.name.$errors[0].$message }}</span>
         </div>
         <div class="backetForm__input-box">
            <input
               class="backetForm__input"
               name="email"
               type="email"
               placeholder="Электронная почта"
               :class="{ invalid: v$.email.$error }"
               v-model.trim="email"
               @blur="v$.email.$touch" />
            <span v-if="v$.email.$error" class="backetForm__input-err">{{ v$.email.$errors[0].$message }}</span>
         </div>
         <div class="backetForm__input-box">
            <input
               class="backetForm__input"
               name="phone"
               type="tel"
               placeholder="+38 (999) 999 99-99"
               :class="{ invalid: v$.tel.$error }"
               v-model.trim="tel"
               @blur="v$.tel.$touch" />
            <span v-if="v$.tel.$error" class="backetForm__input-err">{{ v$.tel.$errors[0].$message }}</span>
         </div>
      </div>
      <div class="backetForm__delivery">
         <h2 class="backetForm__title">Доставка</h2>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Город</span>
            <input
               class="backetForm__input"
               type="text"
               placeholder="Киев"
               :class="{ invalid: v$.city.$error }"
               v-model.trim="city"
               @blur="v$.city.$touch" />
            <span v-if="v$.city.$error" class="backetForm__input-err">{{ v$.city.$errors[0].$message }}</span>
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Промокод:</span>
            <input class="backetForm__input" type="text" placeholder="Введите промокод" v-model.trim="code" />
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Как подписать заказ?</span>
            <input class="backetForm__input" type="text" placeholder="Подпись для коробки" v-model.trim="sign" />
         </label>
      </div>
      <p class="backetForm__sum">
         Итоговая сумма: <strong>${{ sumData }}</strong>
      </p>
      <div class="backetForm__button-box">
         <button class="backetForm__btn btn" type="submit">Купить</button>
         <p class="backetForm__policy">Нажимая на кнопку «Купить» Вы соглашаетесь с нашей Политикой конфиденциальности</p>
      </div>
   </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers, numeric } from "@vuelidate/validators";

export default {
   name: "v-canvas-backet-form",

   data() {
      return {
         v$: useVuelidate(),
         name: null,
         email: null,
         tel: null,
         city: null,
         code: null,
         sign: null,
      };
   },

   validations() {
      return {
         name: {
            required: helpers.withMessage("Обязательное поле", required),
            minLength: helpers.withMessage("Минимальное количество символов 3", minLength(3)),
         },
         email: {
            required: helpers.withMessage("Обязательное поле", required),
            email: helpers.withMessage("Введите корректный email", email),
         },
         tel: {
            required: helpers.withMessage("Обязательное поле", required),
            numeric: helpers.withMessage("Введите корректный номер", numeric),
         },
         city: {
            required: helpers.withMessage("Обязательное поле", required),
            minLength: helpers.withMessage("Минимальное количество символов 3", minLength(3)),
         },
      };
   },

   methods: {
      onSubmit() {
         this.v$.$validate();
      },
   },

   props: {
      sumData: {
         type: Number,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.backetForm {
   overflow-y: scroll;
   width: 100%;
   height: 100%;
   padding: 25px;
   padding-bottom: 120px;

   &__order {
      margin-bottom: 50px;
   }

   &__contact {
      display: flex;
      flex-flow: column;
      gap: 25px;
      margin-bottom: 50px;
   }

   &__input-box {
      display: flex;
      flex-flow: column;
      gap: 5px;
   }

   &__title {
      font: 500 18px/1.5 "AvenirNextCyr";
   }

   &__subtitle {
      font: 400 16px/1.5 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__input {
      padding: 20px;
      border-radius: 50px;
      background-color: var(--color_input);

      &-err {
         color: red;
      }

      &.invalid {
         border: 1px solid red;
      }
   }

   &__delivery {
      display: flex;
      flex-flow: column;
      gap: 25px;
      margin-bottom: 50px;
   }

   &__sum {
      margin-bottom: 30px;
      font: 600 18px/1.5 "AvenirNextCyr";
   }

   &__button-box {
      display: flex;
      flex-flow: column;
      justify-content: center;
      gap: 15px;
   }

   &__policy {
      font: 400 16px/1.5 "AvenirNextCyr";
      text-align: center;
   }
}
</style>
