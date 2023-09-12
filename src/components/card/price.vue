<template>
   <p class="price">
      <span class="price__new">
         <span class="price__value"> {{ priceNew }} </span>
         <span class="price__currency"> {{ currency }} </span>
      </span>
      <span v-if="priceOld" class="price__old">
         <span class="price__value"> {{ priceOld }} </span>
         <span class="price__currency--old"> {{ currency }} </span>
      </span>
   </p>
</template>

<script>
export default {
   props: {
      priceNew: {
         type: [Number, Boolean],
         required: true,
      },

      priceOld: {
         type: [Number, Boolean],
         required: true,
      },
   },

   async setup() {
      const { data } = await useFetch(`https://strapi-2vim.onrender.com/api/currency`)
      return { currency:data.value.data.attributes.currency};
   },
};
</script>
