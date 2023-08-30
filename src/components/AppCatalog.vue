<template>
   <div class="catalogs">
      <card v-for="item in dataItem" :key="item.id" :card-data="item" />
   </div>
</template>

<script>
export default {
   props: {
      dataItem: {
         type: [Array, Object],
         required: true,
      },
   },
};
</script>
