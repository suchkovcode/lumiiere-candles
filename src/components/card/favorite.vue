<template>
   <button class="cardFavorite" aria-label="Favorite btn add" :data-select="isSelect" @click="toggleCard">
      <svg class="cardFavorite__icon">
         <use xlink:href="/sprite.svg#cardFavoriteIcon"></use>
      </svg>
   </button>
</template>

<script setup>
const props = defineProps({
   cardId: {
      type: String,
      required: true,
   },
});
const store = useFavoriteStore();
const isSelect = ref(false);

watch(store.cards, () => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});

onMounted(() => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});

const toggleCard = () => {
   isSelect.value = !isSelect.value;
   isSelect.value ? store.addCardFavorite(props.cardId) : delCardFavorite(props.cardId);
};
</script>
