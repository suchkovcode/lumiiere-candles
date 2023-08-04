<template>
   <section class="goods">
      <div class="container">
         <BaseBreadcrumbs
            class="goods__breadcrumbs"
            :roterLink="roterData" />
         <div class="goods__header">
            <img
               class="goods__header-icon"
               src="@/assets/img/svg/catalog__header-icon.svg"
               alt="Главная картинка"
               width="85"
               height="40" />
            <h1 class="title goods__title">КАТАЛОГ</h1>
            <p class="subtitle goods__subtitle">
               <svg class="goods__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               «Поверь дружок, здесь ты найдешь все для сохранения своего душевного равновесия»
            </p>
         </div>
         <div class="goods__search">
            <form
               class="goods__search-container"
               action=""
               method="">
               <input
                  class="goods__search-input"
                  type="search"
                  placeholder="Что нужно найти?" />
               <svg
                  class="goods__search-icon"
                  fill="none"
                  stroke="rgb(182, 182, 182)">
                  <use xlink:href="@/assets/img/svg/sprite.svg#search"></use>
               </svg>
            </form>
            <button
               class="goods__search-btn"
               type="submit">
               Найти
            </button>
         </div>
      </div>
   </section>
   <section class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <div class="allcatalog__filter">
               <div class="allcatalog__filter-radio">
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="all"
                        data-value="all"
                        data-select="true" />
                     <span class="allcatalog__text">Все</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="candles"
                        data-value="candles"
                        data-select="false" />
                     <span class="allcatalog__text">Свечи</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="additionally"
                        data-value="additionally"
                        data-select="false" />
                     <span class="allcatalog__text">Дополнительно</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="sets"
                        data-value="sets"
                        data-select="false" />
                     <span class="allcatalog__text">Наборы свечей</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="postcards"
                        data-value="postcards"
                        data-select="false" />
                     <span class="allcatalog__text">Открытки</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="popular"
                        data-value="popular"
                        data-select="false" />
                     <span class="allcatalog__text">Популярные товары</span>
                  </label>
                  <label class="allcatalog__label">
                     <input
                        class="allcatalog__input"
                        type="radio"
                        name="radio"
                        value="meltsy"
                        data-value="meltsy"
                        data-select="false" />
                     <span class="allcatalog__text">Мелтсы</span>
                  </label>
               </div>
               <div class="allcatalog__filter-check">
                  <div class="allcatalog__filter-header">
                     <svg class="allcatalog__filter-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#catalogFilter"></use>
                     </svg>
                     <p class="allcatalog__filter-text">Фильтры</p>
                  </div>
                  <div class="allcatalog__filter-sort">
                     <button class="allcatalog__filter-btn">Сортировка</button>
                     <div class="allcatalog__filter-drobdown">
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value=""
                              checked />
                           <span class="allcatalog__filter-text">Порядок: сперва новые</span>
                        </label>
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value="" />
                           <span class="allcatalog__filter-text">Порядок: сперва старые</span>
                        </label>
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value="" />
                           <span class="allcatalog__filter-text">Цена: по возрастанию</span>
                        </label>
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value="" />
                           <span class="allcatalog__filter-text">Цена: по убыванию</span>
                        </label>
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value="" />
                           <span class="allcatalog__filter-text">Название: А—Я</span>
                        </label>
                        <label class="allcatalog__filter-label">
                           <input
                              class="allcatalog__filter-input"
                              type="radio"
                              name="radio"
                              value="" />
                           <span class="allcatalog__filter-text">Название: Я—А</span>
                        </label>
                     </div>
                  </div>
                  <div class="allcatalog__filter-sort">
                     <button class="allcatalog__filter-btn">Аромат</button>
                     <div class="allcatalog__filter-drobdown allcatalog__filter-drobdown--gap">
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Десертные</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Мужественные</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Природные</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Пряные</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Свежие</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Фруктовые</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Цветочные</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Ягодные</span>
                        </label>
                     </div>
                  </div>
                  <div class="allcatalog__filter-sort">
                     <button class="allcatalog__filter-btn">Коллекция</button>
                     <div class="allcatalog__filter-drobdown allcatalog__filter-drobdown--gap">
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Аниме</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Без персонажей</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Гарри Поттер</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Игры</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Новый год</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Сериалы</span>
                        </label>
                        <label class="allcatalog__filter-label allcatalog__filter-label--checkbox">
                           <input
                              class="allcatalog__filter-checkbox"
                              type="checkbox"
                              name=""
                              value="" />
                           <span class="allcatalog__filter-text">Фильмы</span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <MyCatalog
               class="allcatalog__card"
               :dataItem="products" />
         </div>
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "PageCatalog",

   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Каталог",
               to: "/catalog",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),
   },
};
</script>

<style lang="scss">
.goods {
   margin-bottom: 20px;
   padding: 20px;
   padding-top: 120px;

   &__header {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 50px;

      &-icon {
         position: absolute;
         top: 0;
         left: calc(50% - 45px);

         @include md {
            width: 100px;
            height: auto;
         }

         @include lg {
            left: 10px;
         }

         @include xxl {
            width: 110px;
            height: auto;
         }
      }

      @include lg {
         flex-flow: row;
         justify-content: space-between;
         align-items: flex-end;
      }
   }

   &__title {
      padding-top: 30px;
      letter-spacing: 2px;
      color: var(--color_secondary);

      @include sm {
         font-size: 42px;
      }

      @include md {
         font-size: 46px;
         text-align: center;
      }

      @include lg {
         font-size: 52px;
         text-align: left;
      }

      @include xl {
         font-size: 56px;
      }

      @include xxl {
         font-size: 58px;
      }
   }

   &__subtitle {
      max-width: 400px;
      text-align: center;
      color: var(--color_secondary);

      &-icon {
         position: absolute;
         top: -30px;
         left: -10px;
         width: 40px;
         height: 40px;

         @include md {
            left: -15px;
         }

         @include lg {
            left: -30px;
         }
      }

      @include lg {
         font-size: 18px !important;
         text-align: left;
      }
   }

   &__search {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 10px;

      &-container {
         position: relative;
         display: block;
         width: 100%;

         @include lg {
            max-width: 270px;
         }

         @include xl {
            max-width: 340px;
         }
      }

      &-input {
         position: relative;
         width: 100%;
         height: 60px;
         padding: 0 15px 0 50px;
         border-radius: 50px;
         background: var(--color_bg_grey);

         @include lg {
            max-width: 270px;
         }

         @include xl {
            max-width: 340px;
         }
      }

      &-icon {
         position: absolute;
         top: 50%;
         left: 15px;
         width: 25px;
         height: 25px;
         transform: translateY(-50%);
      }

      &-btn {
         cursor: pointer;
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 60px;
         border-radius: 50px;
         font: 500 18px/1.5 "Karton";
         color: var(--color_base);
         background-color: var(--color_btn);
         transition: all 0.2s ease-in-out;

         &:hover {
            background-color: var(--color_btn_hover);
         }

         @include md {
            max-width: 170px;
         }
      }

      @include md {
         flex-flow: row;
         gap: 20px;
         max-width: 600px;
         margin: 0 auto;
      }

      @include lg {
         margin: 0;
      }
   }

   @include sm {
      padding: 30px 20px;
      padding-top: 170px;

   }

   @include lg {
      padding: 30px;
      padding-top: 170px;
   }

   @include xl {
      padding-top: 200px;
   }
}

.allcatalog {
   &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 0 20px;

      @include lg {
         grid-template-columns: 220px 1fr;
         gap: 20px;
      }

      @include xl {
         padding: 0;
      }
   }

   &__filter {
      &-sort {
         height: fit-content;
         padding: 12px 0;
         border-top: 1px solid var(--color_border);
         border-bottom: 1px solid var(--color_border);

         &:nth-child(3) {
            border-top: none;
         }

         &:nth-child(4) {
            border-top: none;
         }

         /* stylelint-disable-next-line order/order */
         &:hover {
            .allcatalog__filter-btn {
               &::before,
               &::after {
                  background-color: var(--color_primary);
               }
            }
         }

         &.active {
            & .allcatalog__filter-btn {
               &::before,
               &::after {
                  background-color: var(--color_primary);
               }

               &::before {
                  transform: rotate(130deg) translateY(-3px);
               }

               &::after {
                  transform: rotate(50deg) translateY(3px);
               }
            }

            & .allcatalog__filter-drobdown {
               display: flex;
            }
         }

         @include lg {
            border-top: none;
            border-bottom: none;
         }
      }

      &-radio {
         display: flex;
         flex-flow: row;
         flex-wrap: wrap;
         justify-content: center;
         gap: 10px 20px;
         margin-bottom: 30px;

         @include lg {
            flex-flow: column;
            flex-wrap: nowrap;
         }
      }

      &-header {
         display: flex;
         align-items: center;
         gap: 10px;
         margin-bottom: 20px;

         @include lg {
            display: none;
         }
      }

      &-icon {
         width: 16px;
         height: 16px;
         fill: var(--color_secondary);
      }

      &-label {
         cursor: pointer;

         &--checkbox {
            display: flex;
            align-items: center;
            gap: 10px;
         }
      }

      &-input {
         &:checked {
            + .allcatalog__filter-text {
               color: var(--color_primary);
            }
         }
      }

      &-checkbox {
         cursor: pointer;
         width: 20px;
         height: 20px;
         padding: 3px;
         border: 1px solid var(--color_border);
         background-clip: content-box;

         &:checked {
            background-color: var(--color_primary);
         }
      }

      /* stylelint-disable-next-line no-descending-specificity */
      &-text {
         cursor: pointer;
         font: 400 14px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);

         @include lg {
            font: 400 16px/1.3 "AvenirNextCyr";
         }
      }

      /* stylelint-disable-next-line no-descending-specificity */
      &-btn {
         cursor: pointer;
         position: relative;
         display: block;
         width: 100%;
         font: 400 14px/1.3 "AvenirNextCyr";
         text-align: left;
         color: var(--color_secondary);
         transition: all 0.2s ease-in-out;

         /* stylelint-disable-next-line no-descending-specificity */
         &::before {
            content: " ";
            position: absolute;
            top: 50%;
            right: 0;
            display: block;
            width: 8px;
            height: 1px;
            background-color: var(--color_secondary);
            transform: rotate(40deg) translateY(-3px);
            transition: all 0.2s ease-in-out;

            @include lg {
               content: none;
               display: none;
            }
         }

         /* stylelint-disable-next-line no-descending-specificity */
         &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: 0;
            display: block;
            width: 8px;
            height: 1px;
            background-color: var(--color_secondary);
            transform: rotate(320deg) translateY(3px);
            transition: all 0.2s ease-in-out;

            @include lg {
               content: none;
               display: none;
            }
         }

         @include lg {
            cursor: default;
         }
      }

      /* stylelint-disable-next-line no-descending-specificity */
      &-drobdown {
         display: none;
         flex-flow: column;
         gap: 5px;
         padding: 13px 0;

         &--gap {
            gap: 10px;
         }

         @include lg {
            display: flex;
         }
      }
   }

   &__label {
      cursor: pointer;
      transition: all 0.2s ease-in-out;
   }

   &__text {
      font: 400 16px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
      transition: all 0.2s ease-in-out;

      &:hover {
         color: var(--color_primary);
      }

      @include lg {
         font: 400 16px/1.3 "AvenirNextCyr";
      }
   }

   &__card {
      .card {
         border: 1px solid var(--color_border) !important;
      }
   }

   .catalog {
      padding: 0;
   }

   @include sm {
      padding: 30px 20px;
   }

   @include lg {
      padding: 30px;
   }
}
</style>
