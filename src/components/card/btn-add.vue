<template>
   <button v-if="isEmpty" class="cardBtn">
      <svg class="cardBtn__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardBtnAddIcon"></use>
      </svg>
      <span>В корзину</span>
   </button>
   <button v-else class="cardBtn cardBtn--empty">
      <svg class="cardBtn__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardBtnAddIcon"></use>
      </svg>
      <span>Нет в наличии</span>
   </button>
</template>

<script setup>
const props = defineProps({
   isEmpty: Boolean,
});
</script>
