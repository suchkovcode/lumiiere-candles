<template>
   <div class="catalogs" itemscope itemtype="http://schema.org/ItemList">
      <card v-for="(item, index) in dataItem" v-show="index < visibleItem" :key="item.uid" :card-data="item" :data-id="index" />
   </div>
</template>

<script setup>
const props = defineProps({
   dataItem: {
      type: [Array, Object],
      required: true,
   },

   visibleItem: {
      type: Number,
      required: false,
      default: 100,
   },
});
</script>
