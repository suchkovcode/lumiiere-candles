<template>
   <div class="favoriteItem">
      <img class="favoriteItem__img" :src="favoriteItem.hero" alt="Картинка товара" width="70" height="70" />
      <div class="favoriteItem__options">
         <nuxt-link class="favoriteItem__name" :to="`/catalog/${favoriteItem.id}`" @click="$emit('closeCanvas', false)">
            {{ favoriteItem.title }}
         </nuxt-link>
         <p class="favoriteItem__size">Размер: 40 мл</p>
         <p class="favoriteItem__code">{{ favoriteItem.article.small }}</p>
      </div>
      <div class="favoriteItem__count">
         <div class="favoriteItem__sum">
            ${{ favoriteItem.price.small }}
         </div>
      </div>
      <button class="favoriteItem__remove" @click="$emit('delFavorite', favoriteItem.id)"></button>
   </div>
</template>

<script>
export default {
   props: {
      favoriteItem: {
         type: Object,
         required: true,
      },
   },

   emits: ["delFavorite", "closeCanvas"],
};
</script>
