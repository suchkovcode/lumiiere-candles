<template>
   <div class="filter">
      <div class="filter__radio">
         <label class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" value="все" />
            <span class="filter__name">Все</span>
         </label>
         <label v-for="item in categoryData" :key="item" class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" :value="item" />
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
               <input v-model="filter.sort" class="filter__input" type="radio" value="new" />
               <span class="filter__name">Порядок: новые</span>
            </label>
            <label class="filter__label">
               <input v-model="filter.sort" class="filter__input" type="radio" value="old" />
               <span class="filter__name">Порядок: старые</span>
            </label>
            <label class="filter__label">
               <input v-model="filter.sort" class="filter__input" type="radio" value="start" />
               <span class="filter__name">Название: А—Я</span>
            </label>
            <label class="filter__label">
               <input v-model="filter.sort" class="filter__input" type="radio" value="end" />
               <span class="filter__name">Название: Я—А</span>
            </label>
         </div>
      </div>

      <div class="filter__sort" :class="{ active: isClickAroma }">
         <button class="filter__sort-btn" @click="isClickAroma = !isClickAroma">Аромат</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Десертные" />
               <span class="filter__name">Десертные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Мужественные" />
               <span class="filter__name">Мужественные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Природные" />
               <span class="filter__name">Природные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Пряные" />
               <span class="filter__name">Пряные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Свежие" />
               <span class="filter__name">Свежие</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Фруктовые" />
               <span class="filter__name">Фруктовые</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Цветочные" />
               <span class="filter__name">Цветочные</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" value="Ягодные" />
               <span class="filter__name">Ягодные</span>
            </label>
         </div>
      </div>

      <div class="filter__sort" :class="{ active: isClickCollection }">
         <button class="filter__sort-btn" @click="isClickCollection = !isClickCollection">Коллекция</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Аниме" />
               <span class="filter__name">Аниме</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Без персонажей" />
               <span class="filter__name">Без персонажей</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Гарри Поттер" />
               <span class="filter__name">Гарри Поттер</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Игры" />
               <span class="filter__name">Игры</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Новый год" />
               <span class="filter__name">Новый год</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Сериалы" />
               <span class="filter__name">Сериалы</span>
            </label>
            <label class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" value="Фильмы" />
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
   props: {
      categoryData: {
         type: Array,
         required: true,
      },
   },

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

   watch: {
      filter: {
         handler(newValue) {
            this.updateStateFilter(newValue);
         },
         deep: true,
      },
   },

   mounted() {
      this.updateStateFilter(this.filter);
   },

   methods: {
      ...mapActions(useAppStore, { updateStateFilter: "updateFilterData" }),
   },
};
</script>
