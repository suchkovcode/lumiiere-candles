<template>
   <div class="favorite" :class="{ active: activeState }">
      <canvas-header @close-canvas="$emit('closeCanvas', false)">
         Избранное:
      </canvas-header>
      <ClientOnly>
         <div v-show="store.cards.length > 0" class="favorite__list">
            <canvas-favorite-item v-for="item in store.cards" :key="item.id" :favorite-item="item" @del-favorite="delFavorite(item.uid)" />
         </div>
         <p v-show="!store.cards.length" class="favorite__empty">Список избранного пуст</p>
      </ClientOnly>
   </div>
</template>

<script setup>
const emit = defineEmits(["closeCanvas"]);
const props = defineProps({
   activeState: {
      type: Boolean,
      required: true,
   },
});

const store = useFavoriteStore();

const delFavorite = (id) => {
   store.delCardFavorite(id);
};
</script>
