<template>
   <div class="filter">
      <div class="filter__radio">
         <label class="filter__label">
            <input class="filter__input" type="radio" value="все" v-model="filter.category" />
            <span class="filter__name">Все</span>
         </label>
         <label v-for="item in categoryData" :key="item" class="filter__label">
            <input class="filter__input" type="radio" :value="item" v-model="filter.category" />
            <span class="filter__name">{{ item.slice(0, 1).toUpperCase() + item.slice(1) }}</span>
         </label>
      </div>

      <div class="filter__title">
         <svg class="filter__title-icon">
            <use xlink:href="@/assets/img/svg/sprite.svg#catalogFilter"></use>
         </svg>
         <p class="filter__name">Фильтры</p>
      </div>

      <div class="filter__sort" :class="{ active: isClickSort }">
         <button class="filter__sort-btn" @click="isClickSort = !isClickSort">Сортировка</button>
         <div class="filter__sort-drobdown">
            <label class="filter__label">
               <input class="filter__input" type="radio" value="new" v-model="filter.sort" />
               <span class="filter__name">Порядок: новые</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" value="old" v-model="filter.sort" />
               <span class="filter__name">Порядок: старые</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" value="start" v-model="filter.sort" />
               <span class="filter__name">Название: А—Я</span>
            </label>
            <label class="filter__label">
               <input class="filter__input" type="radio" value="end" v-model="filter.sort" />
               <span class="filter__name">Название: Я—А</span>
            </label>
         </div>
      </div>

      <div class="filter__sort" :class="{ active: isClickAroma }">
         <button class="filter__sort-btn" @click="isClickAroma = !isClickAroma">Аромат</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Десертные" v-model="filter.aroma" />
               <span class="filter__name">Десертные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Мужественные" v-model="filter.aroma" />
               <span class="filter__name">Мужественные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Природные" v-model="filter.aroma" />
               <span class="filter__name">Природные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Пряные" v-model="filter.aroma" />
               <span class="filter__name">Пряные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Свежие" v-model="filter.aroma" />
               <span class="filter__name">Свежие</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Фруктовые" v-model="filter.aroma" />
               <span class="filter__name">Фруктовые</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Цветочные" v-model="filter.aroma" />
               <span class="filter__name">Цветочные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Ягодные" v-model="filter.aroma" />
               <span class="filter__name">Ягодные</span>
            </label>
         </div>
      </div>

      <div class="filter__sort" :class="{ active: isClickCollection }">
         <button class="filter__sort-btn" @click="isClickCollection = !isClickCollection">Коллекция</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Аниме" v-model="filter.collection" />
               <span class="filter__name">Аниме</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Без персонажей" v-model="filter.collection" />
               <span class="filter__name">Без персонажей</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Гарри Поттер" v-model="filter.collection" />
               <span class="filter__name">Гарри Поттер</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Игры" v-model="filter.collection" />
               <span class="filter__name">Игры</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Новый год" v-model="filter.collection" />
               <span class="filter__name">Новый год</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Сериалы" v-model="filter.collection" />
               <span class="filter__name">Сериалы</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input class="filter__checkbox" type="checkbox" value="Фильмы" v-model="filter.collection" />
               <span class="filter__name">Фильмы</span>
            </label>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "MyFilter",

   data() {
      return {
         filter: {
            category: "все",
            sort: "new",
            aroma: [],
            collection: [],
         },

         isClickSort: false,
         isClickAroma: false,
         isClickCollection: false,
      };
   },

   methods: {
      ...mapActions(useAppStore, { updateStateFilter: "updateFilterData" }),
   },

   mounted() {
      this.updateStateFilter(this.filter);
   },

   watch: {
      filter: {
         handler(newValue) {
            this.updateStateFilter(newValue);
         },
         deep: true,
      },
   },

   props: {
      categoryData: Array,
   },
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
            font-weight: 500;
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
