<template>
   <div class="changesize">
      <p class="changesize__title">Размер</p>
      <div class="changesize__select">
         <button class="changesize__btn" value="small" :class="{ active: selectBtn === 'small' }" @click="selectBtnHandler">40 мл</button>
         <button class="changesize__btn" value="medium" :class="{ active: selectBtn === 'medium' }" @click="selectBtnHandler">100 мл</button>
         <button class="changesize__btn" value="large" :class="{ active: selectBtn === 'large' }" @click="selectBtnHandler">200 мл</button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      sizeItemData: {
         type: String,
         required: true,
      },
   },

   emits: ["cardsize"],

   data() {
      return {
         selectBtn: this.sizeItemData,
      };
   },

   watch: {
      sizeItemData(newValue) {
         this.selectBtn = newValue;
      },
   },

   methods: {
      selectBtnHandler(event) {
         this.selectBtn = event.target.value;
         this.$emit("cardsize", this.selectBtn);
      },
   },
};
</script>
