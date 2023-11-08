<template>
   <div class="tabs" :class="{ active: isClickBtn }">
      <button class="tabs__toggle" type="button" @click="isClickBtn = !isClickBtn">
         {{ selectRadioContent }}
      </button>
      <div class="drobdown drobdown--width">
         <label v-for="item in tabsData" :key="item.id" class="tabs__option">
            <input
               v-model="selectedRadio"
               class="tabs__option-input"
               type="radio"
               name="radio"
               :value="item.value"
               :content="item.content"
               @change="updateTab"
               @click="isClickBtn = false" />
            <span class="upercase tabs__option-text">{{ item.content }}</span>
         </label>
      </div>
   </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const selectedRadio = ref("");
const selectRadioContent = ref("");
const isClickBtn = ref(false);
const tabsData = ref([
   {
      id: 1,
      value: "delivery",
      content: "Способ доставки",
   },
   {
      id: 2,
      value: "payment",
      content: "Оплата",
   },
   {
      id: 3,
      value: "return",
      content: "Обмен и возрат",
   },
   {
      id: 4,
      value: "terms",
      content: "Сроки изготовления",
   },
]);

onMounted(() => {
   selectedRadio.value = tabsData.value[0].value;
   selectRadioContent.value = tabsData.value[0].content;
   emit("update:modelValue", selectedRadio.value);
});

const updateTab = (event) => {
   selectRadioContent.value = event.target.getAttribute("content");
   emit("update:modelValue", event.target.value);
};
</script>
