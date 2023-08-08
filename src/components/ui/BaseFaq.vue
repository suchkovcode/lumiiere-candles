<template>
   <div class="faq">
      <details
         v-for="item in faqData"
         :key="item.id"
         class="faq__item">
         <summary class="faq__item-title">
            {{ item.title }}
            <span class="transition faq__btn"></span>
         </summary>
         <p class="faq__item-content" v-html="item.content"></p>
      </details>
   </div>
</template>

<script>
export default {
   name: "BaseFaq",

   props: {
      faqData: {
         type: Array,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.faq {
   display: flex;
   flex-flow: column;

   &__btn {
      position: relative;
      display: block;
      min-width: 35px;
      min-height: 35px;
      border-radius: 100%;
      background-color: transparent;

      &::before,
      &::after {
         content: "";
         position: absolute;
         top: calc(50% - 1px);
         right: calc(50% - 11px);
         display: block;
         width: 22px;
         height: 2px;
         border-radius: 2px;
         background-color: var(--color_primary);
      }

      &::after {
         transform: rotate(90deg);
      }

      @include lg {
         min-width: 40px;
         min-height: 40px;

         &::before,
         &::after {
            right: calc(50% - 13px);
            width: 26px;
         }
      }
   }

   &__item {
      cursor: pointer;
      border-top: 1px solid var(--color_border);
      outline: none;
      list-style: none;

      &:last-of-type {
         border-bottom: 1px solid var(--color_border);
      }

      &:hover > .faq__item-title > .faq__btn {
         background-color: var(--color_primary);
      }

      &:hover > .faq__item-title > .faq__btn::after {
         background-color: var(--color_base);
      }

      &:hover > .faq__item-title > .faq__btn::before {
         background-color: var(--color_base);
      }

      &[open] > .faq__item-title > .faq__btn {
         transform: rotate(45deg);
      }
   }

   &__item-title {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 15px 0;
      font: 500 16px/1.3 "AvenirNextCyr";
      text-align: left;
      text-transform: uppercase;
      list-style: none;

      &::-webkit-details-marker {
         display: none;
         width: 0;
         height: 0;
      }

      &:focus-visible {
         outline: none;
      }

      @include xl {
         padding: 20px 0;
      }
   }

   &__item-content {
      padding: 0 35px 15px 0;
      font: 400 16px/1.5 "AvenirNextCyr";
      color: var(--color_secondary);

      @include lg {
         font-size: 18px;
      }

      @include xl {
         padding: 0 40px 20px 0;
      }
   }
}
</style>
