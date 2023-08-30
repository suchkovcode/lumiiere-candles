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
