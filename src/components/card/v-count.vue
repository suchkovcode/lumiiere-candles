<template>
   <div class="btncount">
      <button class="btncount__minus" aria-label="Btn card minus" @click="countDecrement"></button>
      <p class="btncount__value">{{ count }}</p>
      <button class="btncount__plus" aria-label="Btn card plus" @click="countIncrement"></button>
   </div>
</template>

<script>
export default {
   props: {
      countData: {
         type: Number,
         required: true,
      },
   },

   emits: ["countItem"],

   data() {
      return {
         count: this.countData,
      };
   },

   watch: {
      count(newValue) {
         this.$emit("countItem", newValue);
      },

      countData(newValue) {
         this.count = newValue;
      },
   },

   methods: {
      countIncrement() {
         this.count === 10 ? (this.count = 10) : this.count++;
      },

      countDecrement() {
         this.count === 1 ? (this.count = 1) : this.count--;
      },
   },
};
</script>
