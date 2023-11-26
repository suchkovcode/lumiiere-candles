<template>
   <aside class="filter">
      <div class="filter__radio">
         <label class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" value="Все" />
            <span class="filter__name">Все</span>
         </label>
         <label v-for="item in getUniqueFilter.uniqueCategories" :key="item" class="filter__label">
            <input v-model="filter.category" class="filter__input" type="radio" :value="item" />
            <span class="filter__name">{{ item }}</span>
         </label>
      </div>
      <div class="filter__title">
         <svg class="filter__title-icon">
            <use xlink:href="/img/sprite.svg#catalogFilter"></use>
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
            <label v-for="item in getUniqueFilter.uniqueCollections" :key="item" class="filter__label filter__label--checkbox">
               <input v-model="filter.collection" class="filter__checkbox" type="checkbox" :value="item" />
               <span class="filter__name">{{ item }}</span>
            </label>
         </div>
      </div>
      <div class="filter__sort" :class="{ active: isClickAroma }">
         <button class="filter__sort-btn" @click="isClickAroma = !isClickAroma">Аромат</button>
         <div class="filter__sort-drobdown filter__sort-drobdown--gap">
            <label v-for="item in getUniqueFilter.uniqueAromas" :key="item" class="filter__label filter__label--checkbox">
               <input v-model="filter.aroma" class="filter__checkbox" type="checkbox" :value="item" />
               <span class="filter__name">{{ item }}</span>
            </label>
         </div>
      </div>
   </aside>
</template>

<script setup>
const emit = defineEmits(["filterHandler"]);

const isClickAroma = ref(false);
const isClickCollection = ref(false);
const isClickSort = ref(false);
const filter = ref({
   category: "Все",
   sort: "new",
   aroma: [],
   collection: [],
});

const { find } = useStrapi();
const { data } = await find("products", { "pagination[pageSize]": 100 });
const card = await useHandllerApi(data);

const getUniqueFilter = computed(() => {
   const isEmptyObject = (obj) => {
      return Object.keys(obj).length === 0;
   };

   const uniqueCategories = [...new Set(card.map((item) => item.category))]
      .filter((category) => category !== null && !isEmptyObject(category))
      .sort((a, b) => b.localeCompare(a));

   const uniqueCollections = [...new Set(card.map((item) => item.collection))]
      .filter((collection) => collection !== null && !isEmptyObject(collection))
      .sort((a, b) => a.localeCompare(b));

   const uniqueAromas = [...new Set(card.map((item) => item.aroma))]
      .filter((aroma) => aroma !== null && !isEmptyObject(aroma))
      .sort((a, b) => a.localeCompare(b));

   return {
      uniqueCategories,
      uniqueCollections,
      uniqueAromas,
   };
});

watch(filter, (newValue) => {
      emit("filterHandler", newValue);
   }, { deep: true },
);

onMounted(() => {
   emit("filterHandler", filter.value);
});
</script>
