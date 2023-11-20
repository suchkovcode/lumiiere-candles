<template>
   <p class="price" itemscope itemprop="offers" itemtype="http://schema.org/Offer">
      <span class="price__new">
         <span class="price__value" itemprop="price"> {{ priceNew }} </span>
         <span class="price__currency"> {{ priceCurrency }} </span>
         <meta itemprop="priceCurrency" content="USD" />
         <meta itemprop="priceValidUntil" content="2029-12-31" />
      </span>
      <del v-if="priceOld" class="price__old">
         <span class="price__value" itemprop="LowPrice"> {{ priceOld }} </span>
         <span class="price__currency--old"> {{ priceCurrency }} </span>
      </del>
      <link itemprop="availability" href="http://schema.org/InStock" />
   </p>
</template>

<script setup>
const props = defineProps({
   priceNew: {
      type: [Number, Boolean],
      required: true,
   },

   priceOld: {
      type: [Number, Boolean],
      required: true,
   },

   priceCurrency: {
      type: String,
      required: true,
   },
});
</script>
