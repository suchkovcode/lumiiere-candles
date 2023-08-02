<template>
   <div class="backet" :class="{ active: activeState }">
      <v-canvas-header @closeCanvas="emitCloseCanvas"> Корзина: </v-canvas-header>
      <p class="backet__empty">Корзина пуста</p>
      <div class="backet__product hidden">
         <div class="backet__product-list">
            <div class="backet__product-item">
               <img class="backet__product-img" src="" alt="Картинка товара" width="70" height="70" />
               <div class="backet__product-options">
                  <a class="backet__product-name" href="#"></a>
                  <p class="backet__product-size">Размер: <span class="backet__product-option"></span> мл</p>
                  <p class="backet__product-code"></p>
               </div>
               <div class="backet__product-count">
                  <div class="backet__product-plusminus">
                     <div class="backet__product-minus" data-type="minus"></div>
                     <div class="backet__product-total" data-value=""></div>
                     <div class="backet__product-plus" data-type="plus"></div>
                  </div>
                  <div class="backet__product-sum">$<span class="backet__product-cost"></span></div>
               </div>
               <div class="backet__product-remove"></div>
            </div>
         </div>
         <div class="backet__product-all">
            Итого: $
            <span class="backet__product-value">0</span>
         </div>
         <button class="btn backet__product-btn" type="button">Оформить</button>
      </div>
      <form class="backet__form hidden" action="#" method="post">
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
         <p class="backet__form-sum">
            Итоговая сумма:
            <span class="backet__form-currency">$</span>
            <span class="backet__form-count">0</span>
         </p>
         <div class="backet__form-button-box">
            <button class="backet__form-btn btn" type="submit">Купить</button>
            <p class="backet__form-policy">Нажимая на кнопку «Купить» Вы соглашаетесь с нашей Политикой конфиденциальности</p>
         </div>
      </form>
   </div>
</template>

<script>
export default {
   name: "v-canvas-backet",

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
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

      &.hidden {
         display: none;
      }
   }

   &__product {
      padding: 25px;

      &-list {
         display: flex;
         flex-flow: column;
         gap: 20px;
         margin-bottom: 20px;
      }

      &-item {
         display: grid;
         grid-template-areas:
            "img options remove"
            "count count count";
         grid-template-columns: 70px 1fr 15%;
         gap: 15px;
         padding-bottom: 20px;
         border-bottom: 1px solid var(--color_border);

         @include lg {
            grid-template-areas: "img options count remove";
            grid-template-columns: 70px 1fr 0.9fr 80px;
         }
      }

      &-img {
         grid-area: img;
         width: 70px;
         height: 70px;
         border-radius: 8px;
         object-fit: cover;
      }

      &-options {
         grid-area: options;
      }

      &-name {
         font: 700 14px/1.5 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-size {
         font: 500 13px/1.5 "AvenirNextCyr";
         color: var(--color_backet);
      }

      &-code {
         font: 500 13px/1.5 "AvenirNextCyr";
         color: var(--color_backet);
      }

      &-count {
         display: flex;
         justify-content: space-between;
         align-items: center;
         grid-area: count;
      }

      &-plusminus {
         position: relative;
         display: flex;
         align-items: center;
         gap: 10px;
      }

      &-minus {
         cursor: pointer;
         position: relative;
         width: 20px;
         height: 20px;
         border: 1px solid var(--color_backet);
         border-radius: 100%;
         transition: all 0.2s ease-in-out;

         &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 5px);
            display: block;
            width: 10px;
            height: 1px;
            background-color: var(--color_backet);
            transition: all 0.2s ease-in-out;
         }

         &:hover {
            border: 1px solid var(--color_secondary);

            &::after {
               background-color: var(--color_secondary);
            }
         }
      }

      &-plus {
         cursor: pointer;
         position: relative;
         width: 20px;
         height: 20px;
         border: 1px solid var(--color_backet);
         border-radius: 100%;
         transition: all 0.2s ease-in-out;

         &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 5px);
            display: block;
            width: 10px;
            height: 1px;
            background-color: var(--color_backet);
            transform: rotate(90deg);
            transition: all 0.2s ease-in-out;
         }

         &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 5px);
            display: block;
            width: 10px;
            height: 1px;
            background-color: var(--color_backet);
            transition: all 0.2s ease-in-out;
         }

         &:hover {
            border: 1px solid var(--color_secondary);

            &::after {
               background-color: var(--color_secondary);
            }
         }
      }

      &-total {
         font: 500 14px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-sum {
         font: 600 16px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-remove {
         cursor: pointer;
         position: relative;
         align-self: center;
         grid-area: remove;
         width: 22px;
         height: 22px;
         margin-left: auto;
         border: 1px solid var(--color_backet);
         border-radius: 100%;
         transition: all 0.2s ease-in-out;

         &::before,
         &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: calc(50% - 7px);
            display: block;
            width: 14px;
            height: 1px;
            background-color: var(--color_backet);
            transition: all 0.2s ease-in-out;
         }

         &::before {
            transform: rotate(45deg);
         }

         &::after {
            transform: rotate(-45deg);
         }

         &:hover {
            border: 1px solid red;

            &::before,
            &::after {
               background-color: red;
            }
         }
      }

      &-all {
         margin-left: auto;
         font: 600 18px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-btn {
         margin-top: 30px;
      }

      &.hidden {
         display: none;
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
         font: 400 18px/1.5 "AvenirNextCyr";
      }

      &-currency {
         font: 600 18px/1.5 "AvenirNextCyr";
      }

      &-count {
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
      overflow-y: auto;
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
