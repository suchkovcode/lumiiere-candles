<template>
   <div v-if="filteredProducts.cardPaginationCount > 1" class="pagination">
      <button v-for="n in filteredProducts.cardPaginationCount" :key="n" class="pagination__item" :class="{ active: n === pageNumber }" @click="paginationHandler(n)">
         {{ n }}
      </button>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   data() {
      return {
         pageNumber: 1,
      };
   },
   computed: {
      ...mapState(useAppStore, ["filteredProducts"]),
   },

   methods: {
      ...mapActions(useAppStore, ["updatePageNumber"]),

      paginationHandler(n) {
         this.pageNumber = n;
         this.updatePageNumber(n);
      },
   },
};
</script>
