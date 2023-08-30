<template>
   <div class="btncount">
      <button class="btncount__minus" aria-label="Btn card minus" @click="countDecrement"></button>
      <p class="btncount__value">{{ countItem }}</p>
      <button class="btncount__plus" aria-label="Btn card plus" @click="countIncrement"></button>
   </div>
</template>

<script>
export default {
   props: {
      countItemData: {
         type: Number,
         required: true,
      },
   },

   emits: ["countItem"],

   data() {
      return {
         countItem: this.countItemData,
      };
   },

   watch: {
      countItem() {
         this.$emit("countItem", this.countItem);
      },

      countItemData(newValue) {
         this.countItem = newValue;
      },
   },

   methods: {
      countIncrement() {
         this.countItem === 10 ? (this.countItem = 10) : this.countItem++;
      },

      countDecrement() {
         this.countItem === 1 ? (this.countItem = 1) : this.countItem--;
      },
   },
};
</script>
