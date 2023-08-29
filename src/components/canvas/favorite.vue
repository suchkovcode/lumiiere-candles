<template>
   <div class="favorite" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Избранное:
      </canvas-header>
      <div v-if="cards.length > 0" class="favorite__list">
         <canvas-favorite-item v-for="item in cards" :key="item.id" :favorite-item="item" @del-favorite="delFavorite(item.id)" />
      </div>
      <p v-else class="favorite__empty">Список избранного пуст</p>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "@/store/favoriteStore";
import { useAppStore } from "@/store/appStore";

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
      ...mapActions(useAppStore, { updateFavorite: "updateFavorite" }),

      delFavorite(id) {
         this.delCardFavorite(id);
         this.updateFavorite(id, false);
      },

      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },
};
</script>

<style lang="scss" scoped>
.favorite {
   position: fixed;
   top: 0;
   right: -100%;
   z-index: 50;
   display: block;
   width: 100%;
   height: 100vh;
   max-width: 450px;
   background-color: var(--color_base);
   transition: right 0.3s ease-in-out;

   &__empty {
      margin: 25px;
      padding: 25px;
      border-radius: 12px;
      background-color: var(--color_input);
   }

   &__list {
      overflow-y: scroll;
      display: flex;
      flex-flow: column;
      gap: 20px;
      height: 100%;
      margin-bottom: 20px;
      padding: 25px;
      padding-bottom: 120px;
   }

   &.active {
      overflow: hidden;
      right: 0;
   }

   @include sm {
      border-left: 1px solid var(--color_border);
   }

   @include lg {
      max-width: 550px;
   }
}
</style>
