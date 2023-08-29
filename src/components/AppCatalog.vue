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

<style lang="scss">
.catalogs {
   display: grid;
   justify-content: center;
   justify-items: center;
   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
   gap: 20px;
   margin-bottom: 30px;

   @include lg {
      justify-items: start;
      margin-bottom: 50px;
   }

   @include lg {
      grid-template-columns: 1fr 1fr 1fr;
   }
}
</style>
