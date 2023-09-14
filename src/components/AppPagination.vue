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
         const visibleItems = this.paginationData < 5 ? this.paginationData : 5;
         const halfVisible = Math.floor(visibleItems / 2);
         let start = Math.max(1, this.pageNumber - halfVisible);
         let end = Math.min(this.paginationData, start + visibleItems - 1);
         if (end - start + 1 < visibleItems) {
            if (start === 1) {
               end = Math.min(this.paginationData, visibleItems);
            } else {
               start = Math.max(1, this.paginationData - visibleItems + 1);
               end = this.paginationData;
            }
         }
         return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      },
   },

   watch: {
      pageData(value) {
         this.pageNumber = value;
      }
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
