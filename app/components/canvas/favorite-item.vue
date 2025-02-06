<template>
   <div class="favoriteItem">
      <img
         class="favoriteItem__img"
         :src="`https://strapi.suchkov.cc${favoriteItem.img.url}`"
         :alt="favoriteItem.img.alternativeText"
         :title="favoriteItem.img.caption"
         width="70"
         height="70" />
      <div class="favoriteItem__options">
         <nuxt-link class="favoriteItem__name" :to="`/catalog/${pathToCategory}/${favoriteItem.uid}`" @click="$emit('closeCanvas', false)">
            {{ favoriteItem.title }}
         </nuxt-link>
         <p class="favoriteItem__size">Размер: 40 мл</p>
         <p class="favoriteItem__code">{{ favoriteItem.article.small }}</p>
      </div>
      <div class="favoriteItem__count">
         <div class="favoriteItem__sum">
            {{ favoriteItem.price.currency }} {{ favoriteItem.price.new.small }}
         </div>
      </div>
      <button class="favoriteItem__remove" @click="$emit('delFavorite', favoriteItem.uid)"></button>
   </div>
</template>

<script setup>
const emit = defineEmits(["delFavorite", "closeCanvas"]);

const props = defineProps({
   favoriteItem: {
      type: Object,
      required: true,
   },
});

const pathToCategory = computed(() => {
   const categoryToPath = {
      "Соевые свечи": "candles",
      "Наборы свечей": "boxes",
      "Диффузоры": "diffusers",
      "Мелтсы": "melts",
      "Дополнительно": "matches",
   };

   return categoryToPath[props.favoriteItem.category];
});
</script>
