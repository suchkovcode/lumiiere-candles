<template>
   <div class="favoriteItem">
      <img class="favoriteItem__img" :src="favoriteItem.hero" alt="Картинка товара" width="70" height="70" />
      <div class="favoriteItem__options">
         <router-link class="favoriteItem__name" :to="`/catalog/${favoriteItem.id}`" @click="$emit('closeCanvas', false)">
            {{ favoriteItem.title }}
         </router-link>
         <p class="favoriteItem__size">Размер: 40 мл</p>
         <p class="favoriteItem__code">{{ favoriteItem.code.small }}</p>
      </div>
      <div class="favoriteItem__count">
         <div class="favoriteItem__sum">${{ favoriteItem.price.small }}</div>
      </div>
      <button class="favoriteItem__remove" @click="$emit('delFavorite', favoriteItem.id)"></button>
   </div>
</template>

<script>
export default {
   name: "v-canvas-favorite-item",

   props: {
      favoriteItem: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style lang="scss" >
.favoriteItem {
   display: grid;
   grid-template-areas:
      "img options remove"
      "count count count";
   grid-template-columns: 70px 1fr 15%;
   gap: 15px;
   padding-bottom: 20px;
   border-bottom: 1px solid var(--color_border);

   &__img {
      grid-area: img;
      width: 70px;
      height: 70px;
      border-radius: 8px;
      object-fit: cover;
   }

   &__options {
      grid-area: options;
   }

   &__name {
      font: 700 14px/1.2 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__size {
      font: 500 13px/1.5 "AvenirNextCyr";
      color: var(--color_backet);
   }

   &__code {
      font: 500 13px/1.5 "AvenirNextCyr";
      color: var(--color_backet);
   }

   &__count {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      grid-area: count;
   }

   &__sum {
      font: 600 16px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__remove {
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

   @include lg {
      grid-template-areas: "img options count remove";
      grid-template-columns: 70px 1fr 0.9fr 80px;
   }
}
</style>
