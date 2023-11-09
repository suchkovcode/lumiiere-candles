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

const isSelect = ref(false);
const store = useFavoriteStore();
const { cards } = storeToRefs(store);

const toggleCard = () => {
   isSelect.value = !isSelect.value;
   isSelect.value ? store.addCardFavorite(props.cardId) : store.delCardFavorite(props.cardId);
};

watch(cards, () => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});

onMounted(() => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});
</script>
