<template>
   <aside class="filter">
      <!-- <div class="filter__radio">
         <label class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" value="Все" />
            <span class="filter__name">Все</span>
         </label>
         <label v-for="item in category" :key="item" class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" :value="item" />
            <span class="filter__name">{{ item }}</span>
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
      <div class="filter__sort" :class="{ active: isClickCollection }">
         <button class="filter__sort-btn" @click="isClickCollection = !isClickCollection">Коллекция</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label v-for="item in collection" :key="item" class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" :value="item" />
               <span class="filter__name">{{ item }}</span>
            </label>
         </div>
      </div>
      <div class="filter__sort" :class="{ active: isClickAroma }">
         <button class="filter__sort-btn" @click="isClickAroma = !isClickAroma">Аромат</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label v-for="item in aroma" :key="item" class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" :value="item" />
               <span class="filter__name">{{ item }}</span>
            </label>
         </div>
      </div> -->
   </aside>
</template>

<script>
import { getUniqueFilter } from "@/api/request";

export default {
   emits: ["filterHandler"],

   // async setup() {
   //    const { data } = await useAsyncData("filter", () => getUniqueFilter(), {
   //       lazy: true,
   //    });

   //    return {
   //       category: data.value.uniqueCategories,
   //       collection: data.value.uniqueCollections,
   //       aroma: data.value.uniqueAromas,
   //    };
   // },

   data() {
      return {
         filter: {
            category: "Все",
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
            this.$emit("filterHandler", newValue);
         },
         deep: true,
      },
   },

   created() {
      this.$emit("filterHandler", this.filter);
   },
};
</script>
