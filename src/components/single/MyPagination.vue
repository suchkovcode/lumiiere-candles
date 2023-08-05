<template>
   <div class="pagination">
      <button
         v-for="n in getCountCardPagination"
         :key="n"
         class="pagination__item"
         :class="{ active: n === pageNumber }"
         @click="(pageNumber = n), updatePageNumber(n)">
         {{ n }}
      </button>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "MyPagination",

   data() {
      return {
         pageNumber: 1,
      };
   },

   methods: {
      ...mapActions(useAppStore, ["updatePageNumber"]),
   },

   computed: {
      ...mapState(useAppStore, ["getCountCardPagination"]),
   },
};
</script>

<style lang="scss" scoped>
.pagination {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;

   &__item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid var(--color_border);
      border-radius: 6px;
      font-family: "Karton";
      font-size: 14px;
      font-weight: 400;
      color: var(--color_secondary);
      transition: all 0.2s ease-in-out;

      &:hover {
         border: 1px solid var(--color_primary);
         color: var(--color_base);
         background-color: var(--color_primary);
      }

      &.active {
         border: 1px solid var(--color_primary);
         font-weight: 600;
         color: var(--color_base);
         background-color: var(--color_primary);
      }
   }
}
</style>
