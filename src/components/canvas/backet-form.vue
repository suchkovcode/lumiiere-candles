<template>
   <form class="backetForm" @submit.prevent="false">
      <div class="backetForm__contact">
         <h2 class="backetForm__title">Оформить заказ</h2>
         <div class="backetForm__input-box">
            <input v-model.trim="name" class="backetForm__input" name="name" type="text" placeholder="Ваше имя" />
         </div>
         <div class="backetForm__input-box">
            <input v-model.trim="email" class="backetForm__input" name="email" type="email" placeholder="Электронная почта" />
         </div>
         <div class="backetForm__input-box">
            <input v-model.trim="tel" class="backetForm__input" name="phone" type="tel" placeholder="+38 (999) 999 99-99" />
         </div>
      </div>
      <div class="backetForm__delivery">
         <h2 class="backetForm__title">Доставка</h2>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Страна:</span>
            <select v-model.trim="country" class="backetForm__input">
               <option value="Украина">Украина</option>
            </select>
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Город:</span>
            <input v-model.trim="city" class="backetForm__input" type="text" placeholder="Ваш город" />
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Промокод:</span>
            <input v-model.trim="code" class="backetForm__input" type="text" placeholder="Введите промокод" />
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Как подписать заказ?</span>
            <input v-model.trim="sign" class="backetForm__input" type="text" placeholder="Подпись для коробки" />
         </label>
      </div>
      <p class="backetForm__sum">
         Итоговая сумма: <strong>{{ sumData }} {{ currencyData }}</strong>
      </p>
      <div class="backetForm__button-box">
         <button class="backetForm__btn btn" type="submit">Купить</button>
         <p class="backetForm__policy">Нажимая на кнопку «Купить» Вы соглашаетесь с нашей Политикой конфиденциальности</p>
      </div>
   </form>
</template>

<script setup>
const props = defineProps({
   sumData: {
      type: String,
      required: true,
   },

   currencyData: {
      type: String,
      required: true,
   },
});

const name = ref(null);
const email = ref(null);
const tel = ref(null);
const country = ref("Украина");
const city = ref(null);
const code = ref(null);
const sign = ref(null);
</script>
