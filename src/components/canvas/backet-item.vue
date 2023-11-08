<template>
   <div class="backetItem">
      <img
         class="backetItem__img"
         :src="backetItem.img.url"
         :alt="backetItem.img.alternativeText"
         :title="backetItem.img.caption"
         width="70"
         height="70" />
      <div class="backetItem__options">
         <nuxt-link class="backetItem__name" :to="`/catalog/${pathToCategory}/${backetItem.id}`">{{ backetItem.title }}</nuxt-link>
         <p class="backetItem__size">Размер: {{ sizeArticleData }} мл</p>
         <p class="backetItem__code">{{ backetItem.article }}</p>
      </div>
      <div class="backetItem__count">
         <div class="backetItem__plusminus">
            <div class="backetItem__minus" @click="store.decrementCountCard(backetItem.article)"></div>
            <div class="backetItem__total">
               {{ backetItem.count }}
            </div>
            <div class="backetItem__plus" @click="store.incrementCountCard(backetItem.article)"></div>
         </div>
         <div class="backetItem__sum">
            {{ backetItem.total }} {{ backetItem.currency }}
         </div>
      </div>
      <div class="backetItem__remove" @click="store.delCardBacket(backetItem.article)"></div>
   </div>
</template>

<script setup>
const props = defineProps({
   backetItem: {
      type: Object,
      required: true,
   },
});

const store = useBacketStore();

const sizeArticleData = computed(() => {
   const sizeMapping = {
      small: "40",
      medium: "100",
      large: "200",
   };

   return sizeMapping[props.backetItem.size] || "";
});

const pathToCategory = computed(() => {
   const categoryToPath = {
      Свечи: "candles",
      Наборы: "boxes",
      Мелтсы: "melts",
      Дополнительно: "matches",
   };

   return categoryToPath[props.backetItem.category];
});
</script>
