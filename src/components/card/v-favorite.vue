<template>
   <button class="cardFavorite" aria-label="Favorite btn add" :data-select="isFavorite" @click="toggleCard()">
      <svg class="cardFavorite__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardFavoriteIcon"></use>
      </svg>
   </button>
</template>

<script>
import { useFavoriteStore } from "@/store/favoriteStore";
import { mapActions } from "pinia";

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

   emits: ["isFavorite"],

   data() {
      return {
         selectFavorite: false,
      };
   },

   methods: {
      ...mapActions(useFavoriteStore, { addCardFavorite: "addCardFavorite", delCardFavorite: "delCardFavorite" }),

      toggleCard() {
         const newFavoriteState = !this.isFavorite;
         this.$emit("isFavorite", newFavoriteState);
         newFavoriteState ? this.addCardFavorite(this.cardId) : this.delCardFavorite(this.cardId);
      },
   },
};
</script>
