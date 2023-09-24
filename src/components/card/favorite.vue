<template>
   <button class="cardFavorite" aria-label="Favorite btn add" :data-select="isSelect" @click="toggleCard">
      <svg class="cardFavorite__icon">
         <use xlink:href="/sprite.svg#cardFavoriteIcon"></use>
      </svg>
   </button>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "@/store/favoriteStore";

export default {
   props: {
      cardId: {
         type: String,
         required: true,
      },
   },

   data() {
      return {
         isSelect: false,
      };
   },

   computed: {
      ...mapState(useFavoriteStore, ["cards"]),
   },

   watch: {
      cards() {
         this.isSelect = this.cards.some((item) => item.uid === this.cardId);
      },
   },

   mounted() {
      this.isSelect = this.cards.some((item) => item.uid === this.cardId);
   },

   methods: {
      ...mapActions(useFavoriteStore, { addCardFavorite: "addCardFavorite", delCardFavorite: "delCardFavorite" }),

      toggleCard() {
         this.isSelect = !this.isSelect;
         this.isSelect ? this.addCardFavorite(this.cardId) : this.delCardFavorite(this.cardId);
      },
   },
};
</script>
