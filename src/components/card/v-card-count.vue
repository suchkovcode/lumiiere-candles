<template>
   <div class="btncount">
      <button class="btncount__minus" aria-label="Btn card minus" @click="countDecrement"></button>
      <p class="btncount__value">{{ countItem }}</p>
      <button class="btncount__plus" aria-label="Btn card plus" @click="countIncrement"></button>
   </div>
</template>

<script>
export default {
   name: "v-card-count",

   data() {
      return {
         countItem: 1,
      };
   },

   watch: {
      countItem() {
         this.$emit("countItem", this.countItem);
      },

      countItemData(newValue) {
         this.countItem = newValue;
      },
   },

   methods: {
      countIncrement() {
         this.countItem === 10 ? (this.countItem = 10) : this.countItem++;
      },

      countDecrement() {
         this.countItem === 1 ? (this.countItem = 1) : this.countItem--;
      },
   },

   props: {
      countItemData: {
         type: Number,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.btncount {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 45px;
   border: 1px solid var(--color_border);
   border-radius: 55px;
   font: 500 14px/1.3 "AvenirNextCyr";
   color: var(--color_secondary);
   background-color: var(--color_base);
   transition: all 0.2s ease-in-out;

   &__minus {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 30px;
      height: 100%;
      border-radius: 50px 0 0 50px;

      &::before {
         content: "";
         position: absolute;
         top: 50%;
         left: 10px;
         display: block;
         width: 15px;
         height: 1px;
         background-color: var(--color_secondary);
         transition: all 0.2s ease-in-out;
      }

      &:hover {
         &::before {
            background-color: var(--color_primary);
         }
      }
   }

   &__plus {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 30px;
      height: 100%;
      border-radius: 0 50px 50px 0;

      &::before,
      &::after {
         content: "";
         position: absolute;
         top: 50%;
         right: 10px;
         display: block;
         width: 15px;
         height: 1px;
         background-color: var(--color_secondary);
         transition: all 0.2s ease-in-out;
      }

      &::after {
         transform: rotate(90deg);
      }

      &:hover {
         &::before,
         &::after {
            background-color: var(--color_primary);
         }
      }
   }

   @include md {
      flex: 0 0 calc(50% - 5px);
   }
}
</style>
