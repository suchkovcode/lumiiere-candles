<template>
   <p class="price">
      <span class="price__new">
         <span class="price__value">{{ priceNew }}</span>
         <span class="price__currency"> {{ currency }} </span>
      </span>
      <span v-if="priceOld" class="price__old">
         <span class="price__value">{{ priceOld }}</span>
         <span class="price__currency--old"> {{ currency }} </span>
      </span>
   </p>
</template>

<script>
export default {
   props: {
      priceNew: {
         type: Number,
         required: true,
      },

      priceOld: {
         type: [Number, Boolean],
         required: true,
      },
   },

   async setup() {
      const { find } = useStrapi();
      const { data } = await find("currency");
      return { currency: data.attributes.currency };
   },
};
</script>
