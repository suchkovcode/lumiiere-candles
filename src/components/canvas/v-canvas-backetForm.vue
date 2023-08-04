<template>
   <form class="backetForm" action="#" method="post" @click.prevent.stop>
      <div class="backetForm__contact">
         <h2 class="backetForm__title">Оформить заказ</h2>
         <div class="backetForm__input-box">
            <input class="backetForm__input" type="text" placeholder="Ваше имя" value="" />
         </div>
         <div class="backetForm__input-box">
            <input class="backetForm__input" type="email" placeholder="Электронная почта" value="" />
         </div>
         <div class="backetForm__input-box">
            <input class="backetForm__input" type="tel" placeholder="+38 (999) 999 99-99" value="" />
         </div>
      </div>
      <div class="backetForm__delivery">
         <h2 class="backetForm__title">Доставка</h2>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Город</span>
            <input class="backetForm__input" type="search" placeholder="Киев" value="" />
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Промокод:</span>
            <input class="backetForm__input" type="text" placeholder="Введите промокод" value="" />
         </label>
         <label class="backetForm__input-box">
            <span class="backetForm__subtitle">Как подписать заказ?</span>
            <input class="backetForm__input" type="text" placeholder="Подпись для коробки" value="" />
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
export default {
   name: "v-canvas-backet-form",

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
