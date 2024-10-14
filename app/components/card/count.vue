<template>
   <div class="btncount">
      <button class="btncount__minus" aria-label="Btn card minus" @click="countDecrement"></button>
      <p class="btncount__value">{{ count }}</p>
      <button class="btncount__plus" aria-label="Btn card plus" @click="countIncrement"></button>
   </div>
</template>

<script setup>
const emit = defineEmits(["countItem"]);
const props = defineProps({
   countData: {
      type: Number,
      required: true,
   },
});

const count = ref(props.countData);

const countIncrement = () => {
   count.value === 10 ? (count.value = 10) : count.value++;
};

const countDecrement = () => {
   count.value === 1 ? (count.value = 1) : count.value--;
};

watch(count, (newValue) => {
   emit("countItem", newValue);
   count.value = newValue;
});
</script>
