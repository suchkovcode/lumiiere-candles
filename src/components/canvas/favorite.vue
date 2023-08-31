<template>
   <div class="favorite" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Избранное:
      </canvas-header>
      <div v-if="cards.length > 0" class="favorite__list">
         <canvas-favorite-item v-for="item in cards" :key="item.id" :favorite-item="item" @del-favorite="delFavorite(item.uid)" />
      </div>
      <p v-else class="favorite__empty">Список избранного пуст</p>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "@/store/favoriteStore";

export default {
   props: {
      activeState: {
         type: Boolean,
         required: true,
      },
   },

   emits: ["closeCanvas"],

   computed: {
      ...mapState(useFavoriteStore, ["cards"]),
   },

   methods: {
      ...mapActions(useFavoriteStore, { delCardFavorite: "delCardFavorite" }),

      delFavorite(id) {
         this.delCardFavorite(id);
      },

      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },
};
</script>

