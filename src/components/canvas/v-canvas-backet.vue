<template>
   <div class="backet" :class="{ active: activeState }">
      <v-canvas-header @closeCanvas="emitCloseCanvas"> Корзина: </v-canvas-header>
      <div v-if="cards.length && !checkout" class="backet__product">
         <div class="backet__product-list">
            <v-canvas-backet-item v-for="item in cards" :key="item.id" :backetItem="item"></v-canvas-backet-item>
         </div>
         <p class="backet__product-all">Итого: ${{ sumAddition }}</p>
         <button class="btn backet__product-btn" type="button" @click="checkout = true">Оформить</button>
      </div>
      <p v-else-if="!cards.length && !checkout" class="backet__empty">Корзина пуста</p>
      <form v-if="checkout" class="backet__form" action="#" method="post" @click.prevent.stop>
         <div class="backet__form-contact">
            <h2 class="backet__tittle">Оформить заказ</h2>
            <div class="backet__form-input-box">
               <input class="backet__form-input" type="text" placeholder="Ваше имя" value="" />
            </div>
            <div class="backet__form-input-box">
               <input class="backet__form-input" type="email" placeholder="Электронная почта" value="" />
            </div>
            <div class="backet__form-input-box">
               <input class="backet__form-input" type="tel" placeholder="+38 (999) 999 99-99" value="" />
            </div>
         </div>
         <div class="backet__form-delivery">
            <h2 class="backet__tittle">Доставка</h2>
            <label class="backet__form-input-box">
               <span class="backet__form-title">Город</span>
               <input class="backet__form-input" type="search" placeholder="Киев" value="" />
            </label>
            <label class="backet__form-input-box">
               <span class="backet__form-title">Промокод:</span>
               <input class="backet__form-input" type="text" placeholder="Введите промокод" value="" />
            </label>
            <label class="backet__form-input-box">
               <span class="backet__form-title">Как подписать заказ?</span>
               <input class="backet__form-input" type="text" placeholder="Подпись для коробки" value="" />
            </label>
         </div>
         <p class="backet__form-sum">Итоговая сумма: <strong>${{ sumAddition }}</strong></p>
         <div class="backet__form-button-box">
            <button class="backet__form-btn btn" type="submit">Купить</button>
            <p class="backet__form-policy">Нажимая на кнопку «Купить» Вы соглашаетесь с нашей Политикой конфиденциальности</p>
         </div>
      </form>
   </div>
</template>

<script>
import { mapState } from "pinia";
import { useBacketStore } from "@/store/backetStore";

export default {
   name: "v-canvas-backet",

   data() {
      return {
         checkout: false,
      };
   },

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },

   computed: {
      ...mapState(useBacketStore, ["cards", "sumAddition"]),
   },

   props: {
      activeState: {
         type: Boolean,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.backet {
   overflow: hidden;
   position: fixed;
   top: 0;
   right: -100%;
   z-index: 50;
   display: block;
   width: 100%;
   height: 100vh;
   max-width: 450px;
   background-color: var(--color_base);
   transition: right 0.3s ease-in-out;

   &__empty {
      margin: 25px;
      padding: 25px;
      border-radius: 12px;
      background-color: var(--color_input);
   }

   &__product {
      overflow-y: scroll;
      height: 100%;
      padding: 25px;
      padding-bottom: 120px;

      &-list {
         display: flex;
         flex-flow: column;
         gap: 20px;
         margin-bottom: 20px;
      }

      &-all {
         margin-left: auto;
         font: 600 18px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-btn {
         margin-top: 30px;
      }
   }

   &__form {
      overflow-y: scroll;
      width: 100%;
      height: 100%;
      max-height: 90vh;
      padding: 25px;

      &-order {
         margin-bottom: 50px;
      }

      &-contact {
         display: flex;
         flex-flow: column;
         gap: 25px;
         margin-bottom: 50px;
      }

      &-input-box {
         display: flex;
         flex-flow: column;
         gap: 5px;
      }

      &-title {
         font: 400 16px/1.5 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-input {
         padding: 20px;
         border-radius: 50px;
         background-color: var(--color_input);
      }

      &-delivery {
         display: flex;
         flex-flow: column;
         gap: 25px;
         margin-bottom: 50px;
      }

      &-sum {
         margin-bottom: 30px;
         font: 600 18px/1.5 "AvenirNextCyr";
      }

      &-button-box {
         display: flex;
         flex-flow: column;
         justify-content: center;
         gap: 15px;
      }

      &-policy {
         font: 400 16px/1.5 "AvenirNextCyr";
         text-align: center;
      }

      &.hidden {
         display: none;
      }
   }

   &__tittle {
      font: 500 18px/1.5 "AvenirNextCyr";
   }

   &.active {
      right: 0;
   }

   @include sm {
      border-left: 1px solid var(--color_border);
   }

   @include lg {
      max-width: 550px;
   }
}
</style>
