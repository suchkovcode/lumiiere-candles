<template>
   <div v-if="paginationData > 1" class="pagination">
      <button
         v-for="n in paginationData"
         :key="n"
         class="pagination__item"
         :class="{ active: n === pageNumber }"
         @click="$emit('pageNumber', n), (pageNumber = n)">
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
};
</script>
