<template>
   <nav class="breadcrumbs">
      <ul class="breadcrumbs__list">
         <li v-for="item in roterLink" :key="item.id" class="breadcrumbs__item" :class="{ active: item.last }">
            <nuxt-link class="breadcrumbs__link" :to="item.to">
               {{ item.name }}
            </nuxt-link>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   props: {
      roterLink: {
         type: Array,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
   margin-bottom: 30px;

   &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @include lg {
         justify-content: flex-start;
      }
   }

   &__link {
      font: 400 16px/1.2 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 18px;
      }
   }

   &__item {
      cursor: pointer;
      font-size: 16px;

      &:not(.breadcrumbs__item.active)::after {
         content: "/";
         display: inline-block;
         margin: 0 10px;
         font-size: 18px;
         line-height: 1.6;
         color: var(--color_secondary);
      }

      &:hover > .breadcrumbs__link {
         color: var(--color_primary);
      }

      &.active > .breadcrumbs__link {
         font: 500 16px/1.2 "AvenirNextCyr";
         color: var(--color_primary);

         @include md {
            font-size: 18px;
         }
      }
   }
}
</style>
