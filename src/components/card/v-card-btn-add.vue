<template>
   <button class="cardBtn">
      <svg class="cardBtn__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardBtnAddIcon"></use>
      </svg>
      <span>В корзину</span>
   </button>
</template>

<script>
export default {
   name: "v-card-btn-add",
};
</script>

<style lang="scss" scoped>
.cardBtn {
   cursor: pointer;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   height: 45px;
   border-radius: 55px;
   font: 500 14px/1.3 "AvenirNextCyr";
   color: var(--color_base);
   background-color: var(--color_primary);
   transition: all 0.2s ease-in-out;

   &__icon {
      width: 15px;
      height: 45px;
      fill: none;
   }

   &:hover {
      background-color: #ff6219;
   }

   @include md {
      flex: 0 0 calc(50% - 5px);
   }
}
</style>
