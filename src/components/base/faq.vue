<!-- eslint-disable vue/no-v-html -->
<template>
   <div class="faq">
      <details v-for="item in faqData" :key="item.id" class="faq__item">
         <summary class="faq__item-title">
            {{ item.title }}
            <span class="transition faq__btn"></span>
         </summary>
         <p class="faq__item-content" v-html="item.content"></p>
      </details>
   </div>
</template>

<script setup>
const props = defineProps({
   faqData: {
      type: Array,
      required: true,
   },
});
</script>
