<template>
   <div class="changesize">
      <p class="changesize__title">Размер</p>
      <div class="changesize__select">
         <button class="changesize__btn" value="small" :class="{ active: selectBtn === 'small' }" @click="selectBtnHandler">40 мл</button>
         <button class="changesize__btn" value="medium" :class="{ active: selectBtn === 'medium' }" @click="selectBtnHandler">
            100 мл
         </button>
         <button class="changesize__btn" value="large" :class="{ active: selectBtn === 'large' }" @click="selectBtnHandler">200 мл</button>
      </div>
   </div>
</template>

<script>
import { useStorage } from "@vueuse/core";

export default {
   name: "v-card-changesize",

   data() {
      return {
         selectBtn: this.cardData.cardSizeData,
      };
   },

   mounted() {
      this.$emit("cardsize", this.selectBtn);
   },


   methods: {
      selectBtnHandler(event) {
         this.selectBtn = event.target.value;
         this.$emit("cardsize", this.selectBtn);
      },
   },

   props: {
      cardData: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.changesize {
   &__title {
      margin-bottom: 5px;
      font: 400 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__select {
      position: relative;
      display: inline-flex;
      flex-wrap: wrap;
      gap: 7px;
      min-width: auto;
      box-sizing: border-box;
   }

   &__btn {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 30px;
      min-height: 30px;
      padding: 7px;
      border: 1px solid #ddd;
      font: 400 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
      background-color: var(--color_base);
      transition: all 0.2s ease-in-out;

      &:hover {
         border: 1px solid rgba(0, 0, 0, 50%);
         color: #000;
      }

      &.active {
         border: 1px solid rgba(0, 0, 0, 50%);
         color: #000;
      }
   }
}
</style>
