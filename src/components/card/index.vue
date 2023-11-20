<template>
   <article class="card" itemscope itemtype="http://schema.org/Product">
      <header class="card__header">
         <card-favorite :card-id="cardData.uid" />
         <img
            class="card__hero"
            :src="cardData.img.url"
            :alt="cardData.img.alternativeText"
            :title="cardData.img.caption"
            width="140"
            height="180"
            loading="lazy"
            itemprop="'image'" />
      </header>
      <div class="card__body">
         <card-rating :rating-storage="card" />
         <h3 class="card__title" itemprop="'name'">{{ cardData.title }}</h3>
         <p class="card__article">Артикул: {{ cardArticle }}</p>
         <p v-if="isCandles || isMelts" class="card__description">{{ categoryJoin }}</p>
         <card-price :price-new="cardPriceNew" :price-old="cardPriceOld" :price-currency="cardData.price.currency" />
         <card-changesize v-if="isCandles" :size-item-data="card.size" @cardsize="card.size = $event" />
      </div>
      <footer class="card__footer">
         <card-btn-more :card-id="cardData.uid" :card-type="cardData.category" />
         <card-count :count-data="card.count" @count-item="card.count = $event" />
         <card-btn-add :is-empty="cardData.isStock" @click="addCardBacket" />
      </footer>
   </article>
</template>

<script setup>
const props = defineProps({
   cardData: {
      type: Object,
      required: true,
   },
});

const store = useBacketStore();
const card = ref({
   id: props.cardData.uid,
   size: "small",
   count: 1,
});

const categoryJoin = computed(() => props.cardData?.tags?.join(" | "));
const cardArticle = computed(() => props.cardData?.article?.[card.value.size]?.toUpperCase());
const isCandles = computed(() => props.cardData?.category?.toLowerCase()?.trim() === "свечи");
const isMelts = computed(() => props.cardData?.category?.toLowerCase()?.trim() === "мелтсы");

const cardPriceNew = computed(() => {
   const newPrice = props.cardData?.price?.new?.[card.value.size];
   return newPrice ? newPrice : false;
});

const cardPriceOld = computed(() => {
   const oldPrice = props.cardData?.price?.old?.[card.value.size];
   return oldPrice ? oldPrice : false;
});

const addCardBacket = () => {
   if (props.cardData.isStock) {
      const cardData = { ...card.value };
      store.addCardBacket(cardData);
      card.value.count = 1;
      card.value.size = "small";
   }
};
</script>
