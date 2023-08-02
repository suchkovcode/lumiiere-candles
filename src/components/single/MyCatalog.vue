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
         type: Array,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.catalogs {
   display: grid;
   justify-content: center;
   justify-items: center;
   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
   gap: 20px;
   margin-bottom: 30px;
   padding: 0 20px;

   @include lg {
      margin-bottom: 50px;
      padding: 0 30px;
   }

   @include xxl {
      padding: 0;
   }
}
</style>
