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

<script setup>
const emit = defineEmits(["cardsize"]);
const props = defineProps({
   sizeItemData: {
      type: String,
      required: true,
   },
});

const selectBtn = ref(props.sizeItemData);

watch(selectBtn, (newValue) => {
   selectBtn.value = newValue;
});

const selectBtnHandler = (event) => {
   selectBtn.value = event.target.value;
   emit("cardsize", selectBtn.value);
};
</script>
