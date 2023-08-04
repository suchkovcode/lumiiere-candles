<template>
   <div class="filter">
      <div class="filter__radio">
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Все</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Свечи</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Дополнительно</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Наборы свечей</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Открытки</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Популярные товары</span>
         </label>
         <label class="filter__label">
            <input class="filter__input" type="radio" name="radio" />
            <span class="filter__name">Мелтсы</span>
         </label>
      </div>

      <div class="filter__title">
         <svg class="filter__title-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#catalogFilter"></use>
         </svg>
         <p class="filter__name">Фильтры</p>
      </div>

      <div class="filter__sort">
         <button class="filter__sort-btn">Сортировка</button>
         <div class="filter__sort-drobdown">
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" checked />
               <span class="filter__name">Порядок: сперва новые</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" />
               <span class="filter__name">Порядок: сперва старые</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" />
               <span class="filter__name">Цена: по возрастанию</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" />
               <span class="filter__name">Цена: по убыванию</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" />
               <span class="filter__name">Название: А—Я</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" name="radio" value="" />
               <span class="filter__name">Название: Я—А</span>
            </label>
         </div>
      </div>

      <div class="filter__sort">
         <button class="filter__sort-btn">Аромат</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Десертные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Мужественные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Природные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Пряные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Свежие</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Фруктовые</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Цветочные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Ягодные</span>
            </label>
         </div>
      </div>

      <div class="filter__sort">
         <button class="filter__sort-btn">Коллекция</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Аниме</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Без персонажей</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Гарри Поттер</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Игры</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Новый год</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Сериалы</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" name="" value="" />
               <span class="filter__name">Фильмы</span>
            </label>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "MyFilter",
};
</script>

<style lang="scss" scoped>
/* stylelint-disable order/order */
.filter {
   &__radio {
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

   &__label {
      cursor: pointer;

      &--checkbox {
         display: flex;
         align-items: center;
         gap: 10px;
      }
   }

   &__input {
      &:checked {
         + * {
            color: var(--color_primary);
         }
      }
   }

   &__name {
      cursor: pointer;
      font: 400 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include lg {
         font-size: 16px;
      }
   }

   &__title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      &-icon {
         width: 16px;
         height: 16px;
         fill: var(--color_secondary);
      }

      @include lg {
         display: none;
      }
   }

   &__sort {
      height: fit-content;
      padding: 12px 0;
      border-top: 1px solid var(--color_border);
      border-bottom: 1px solid var(--color_border);

      &-btn {
         cursor: pointer;
         position: relative;
         display: block;
         width: 100%;
         font: 400 14px/1.3 "AvenirNextCyr";
         text-align: left;
         color: var(--color_secondary);
         transition: all 0.2s ease-in-out;

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

      &:nth-child(3) {
         border-top: none;
      }

      &:nth-child(4) {
         border-top: none;
      }

      &:nth-child(5) {
         border-top: none;
      }

      &:hover {
         .filter__sort-btn {
            &::before,
            &::after {
               background-color: var(--color_primary);
            }
         }
      }

      &.active {
         & .filter__sort-btn {
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

         & .filter__sort-drobdown {
            display: flex;
         }
      }

      @include lg {
         border-top: none;
         border-bottom: none;
      }
   }

   &__checkbox {
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
}
</style>
