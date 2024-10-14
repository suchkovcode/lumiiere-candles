<template>
   <div v-if="paginationData > 1" class="pagination">
      <button v-for="n in displayedPagination" :key="n" class="pagination__item" :class="{ active: n === store.pageNumber }" @click="changePage(n)">
         {{ n }}
      </button>
   </div>
</template>

<script setup>
const store = useAppStore();
const props = defineProps({
   paginationData: {
      type: Number,
      required: true,
   },
});

const displayedPagination = computed(() => {
   const visibleItems = Math.min(props.paginationData, 5);
   const start = Math.max(1, Math.min(store.pageNumber - Math.floor(visibleItems / 2), props.paginationData - visibleItems + 1));
   const end = Math.min(start + visibleItems - 1, props.paginationData);
   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const changePage = (newPage) => {
   window.scrollTo(0, 350);
   store.setPageNumber(newPage);
};
</script>
