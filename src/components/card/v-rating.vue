<template>
   <div class="rating">
      <div class="rating__icons">
         <svg
            v-for="(item, index) in 5"
            :key="index"
            class="rating__icon"
            :class="{
               active: ratingHoverData === index + 1 || ratingHoverData > index + 1,
               deactive: ratingClickData && ratingHoverData < index + 1,
            }"
            :data-index="index + 1"
            @mouseover="hoverIcon"
            @mouseout="ratingClickData ? ratingHoverData : (rating.hoverItem = 0)"
            @click="clickItem">
            <use xlink:href="@/assets/img/svg/sprite.svg#cardRatingIcon"></use>
         </svg>
      </div>
      <span class="rating__value">{{ ratingHoverData }}</span>
      <span class="rating__total">({{ ratingVoteData }})</span>
   </div>
</template>

<script>
export default {
   props: {
      ratingStorage: {
         type: Object,
         required: true,
      },
   },

   emits: ["ratingData"],

   data() {
      return {
         rating: {
            hoverItem: 0,
            countVote: 0,
            clickUser: false,
         },
      };
   },

   computed: {
      ratingHoverData() {
         return this.rating.hoverItem;
      },

      ratingVoteData() {
         return this.rating.countVote;
      },

      ratingClickData() {
         return this.rating.clickUser;
      },
   },

   methods: {
      hoverIcon(event) {
         if (!this.ratingClickData) {
            const index = Number(event.currentTarget.dataset.index);
            this.rating.hoverItem = index;
         }
      },

      clickItem() {
         if (!this.ratingClickData) {
            this.rating.countVote += 1;
            this.rating.clickUser = true;
            this.$emit("ratingData", this.rating);
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.rating {
   display: flex;
   align-items: center;
   gap: 5px;
   margin-bottom: 5px;

   &__icons {
      display: inline-flex;
      gap: 3px;
      font-size: 0;
   }

   &__icon {
      cursor: pointer;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: var(--color_secondary);

      &:hover:not(.rating__icon.deactive) {
         fill: var(--color_primary);
         stroke: var(--color_primary);
      }

      &.active {
         fill: var(--color_primary);
         stroke: var(--color_primary);
      }
   }

   &__value {
      font: 300 16px/1.3 "AvenirNextCyr";
      color: #000;
      opacity: 0.7;
   }

   &__total {
      font: 500 16px/1.3 "AvenirNextCyr";
      color: #000;
   }
}
</style>
