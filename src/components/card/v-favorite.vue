<template>
   <button class="cardFavorite" :data-select="favoriteState" aria-label="Favorite btn add" @click="toggleCard()">
      <svg class="cardFavorite__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardFavoriteIcon"></use>
      </svg>
   </button>
</template>

<script>
import { useFavoriteStore } from "@/store/favoriteStore";
import { useAppStore } from "@/store/appStore";
import { mapActions, mapState } from "pinia";

export default {
   props: {
      cardId: {
         type: String,
         required: true,
      },

      isFavorite: {
         type: Boolean,
         required: true,
      },
   },

   data() {
      return {
         clickBtn: false,
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),

      favoriteState() {
         return this.products.find((item) => item.id === this.cardId).isFavorite;
      },
   },

   methods: {
      ...mapActions(useFavoriteStore, { addCardFavorite: "addCardFavorite", delCardFavorite: "delCardFavorite" }),

      toggleCard() {
         !this.favoriteState ? this.addCardFavorite(this.cardId) : this.delCardFavorite(this.cardId);
      },
   },
};
</script>
