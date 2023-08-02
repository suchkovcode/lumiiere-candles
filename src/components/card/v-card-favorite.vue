<template>
   <button class="cardFavorite" :data-select="favoriteState" aria-label="Favorite btn add" @click="toggleCard()">
      <svg class="cardFavorite__icon">
         <use xlink:href="@/assets/img/svg/sprite.svg#cardFavoriteIcon"></use>
      </svg>
   </button>
</template>

<script>
import { useFavoriteStore } from "@/store/favoriteStore";
import { useAppStore } from "@/store/appStore";
import { mapActions, mapState } from "pinia";

export default {
   name: "v-card-favorite",

   data() {
      return {
         clickBtn: false,
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),

      favoriteState() {
         return this.products.find((item) => item.id === this.cardId).isFavorite;
      },
   },

   methods: {
      ...mapActions(useFavoriteStore, { addCardFavorite: "addCardFavorite", delCardFavorite: "delCardFavorite" }),
      ...mapActions(useAppStore, { updateFavorite: "updateFavorite" }),

      toggleCard() {
         if (!this.clickBtn) {
            this.addCardFavorite(this.cardId);
            this.updateFavorite(this.cardId, true);
            this.clickBtn = true;
         } else {
            this.delCardFavorite(this.cardId);
            this.updateFavorite(this.cardId, false);
            this.clickBtn = false;
         }
      },
   },

   props: {
      cardId: {
         type: String,
         required: true,
      },

      isFavorite: {
         type: Boolean,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.cardFavorite {
   cursor: pointer;
   position: absolute;
   top: 15px;
   right: 15px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   border-radius: 100%;
   background-color: var(--color_base);

   &__icon {
      width: 24px;
      height: 20px;
      fill: transparent;
      transition: all 0.2s ease-in-out;
   }

   &:hover {
      .cardFavorite__icon {
         transform: scale(1.2);
         transition: all 0.2s ease-in-out;
      }
   }

   &[data-select="true"] {
      .cardFavorite__icon {
         fill: var(--color_primary);
      }
   }

   &[data-select="false"] {
      .cardFavorite__icon {
         fill: none;
      }
   }
}
</style>
