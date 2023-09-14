<template>
   <div v-if="paginationData > 1" class="pagination">
      <button v-for="n in displayedPagination" :key="n" class="pagination__item" :class="{ active: n === pageNumber }" @click="changePage(n)">
         {{ n }}
      </button>
   </div>
</template>

<script>
export default {
   props: {
      paginationData: {
         type: Number,
         required: true,
      },

      pageData: {
         type: Number,
         required: true,
      },
   },

   emits: ["pageNumber"],

   data() {
      return {
         pageNumber: this.pageData,
      };
   },

   computed: {
      displayedPagination() {
         const visibleItems = 5;
         const halfVisible = Math.floor(visibleItems / 2);
         let start = Math.max(1, this.pageNumber - halfVisible);
         let end = Math.min(this.paginationData, start + visibleItems - 1);
         const diff = end - start + 1;

         if (diff < visibleItems) {
            if (start === 1) {
               end = visibleItems;
            } else {
               start = this.paginationData - visibleItems + 1;
               end = this.paginationData;
            }
         }

         return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      },
   },

   methods: {
      changePage(newPage) {
         window.scrollTo(0, 350);
         this.pageNumber = newPage;
         this.$emit("pageNumber", newPage);
      },
   },
};
</script>
