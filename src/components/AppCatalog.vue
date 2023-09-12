<template>
   <div class="catalogs">
      <card v-for="(item, index) in dataItem" v-show="index < visibleItem" :key="item.uid" :card-data="item" />
   </div>
</template>

<script>
export default {
   props: {
      dataItem: {
         type: [Array, Object],
         required: true,
      },

      visibleItem: {
         type: Number,
         required: false,
         default: 100,
      },
   },
};
</script>
