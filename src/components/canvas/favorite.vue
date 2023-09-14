<template>
   <div class="favorite" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Избранное:
      </canvas-header>
      <ClientOnly>
         <div v-show="cards.length > 0" class="favorite__list">
            <canvas-favorite-item v-for="item in cards" :key="item.id" :favorite-item="item" @del-favorite="delFavorite(item.uid)" />
         </div>
         <p v-show="!cards.length" class="favorite__empty">Список избранного пуст</p>
      </ClientOnly>
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
