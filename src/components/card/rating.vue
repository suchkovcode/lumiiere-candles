<template>
   <div class="rating" itemscope itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating">
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
      <span class="rating__total" itemprop="ratingValue">({{ ratingVoteData }})</span>
      <meta itemprop="ratingCount" content="1">
   </div>
</template>

<script setup>
const props = defineProps({
   ratingStorage: {
      type: Object,
      required: true,
   },
});

const rating = ref({
   hoverItem: 0,
   countVote: 0,
   clickUser: false,
});

const ratingHoverData = computed(() => rating.value.hoverItem);
const ratingVoteData = computed(() => rating.value.countVote);
const ratingClickData = computed(() => rating.value.clickUser);

const hoverIcon = (event) => {
   if (!ratingClickData.value) {
      const index = Number(event.currentTarget.dataset.index);
      rating.value.hoverItem = index;
   }
};

const clickItem = () => {
   if (!ratingClickData.value) {
      rating.value.countVote += 1;
      rating.value.clickUser = true;
   }
};
</script>
