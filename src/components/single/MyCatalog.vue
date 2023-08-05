<template>
   <div class="catalogs">
      <v-card v-for="item in dataItem" :key="item.id" :cardData="item" />
   </div>
</template>

<script>
export default {
   name: "MyCatalog",

   props: {
      dataItem: {
         type: [Array, Object],
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
