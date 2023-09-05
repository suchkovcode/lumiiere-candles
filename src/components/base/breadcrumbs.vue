<template>
   <nav class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
      <ul class="breadcrumbs__list">
         <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <nuxt-link class="breadcrumbs__link" to="/" itemscope itemtype="http://schema.org/Thing" itemprop="item">
               <span itemprop="name">Главная</span>
            </nuxt-link>
            <meta itemprop="position" content="1" />
         </li>
         <li v-if="roterLink.catalog" class="breadcrumbs__item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link class="breadcrumbs__link" to="/catalog" itemscope itemtype="http://schema.org/Thing" itemprop="item">
               <span itemprop="name">Каталог</span>
            </nuxt-link>
            <meta itemprop="position" content="2" />
         </li>
         <li class="breadcrumbs__item active">
            <nuxt-link class="breadcrumbs__link" :to="roterLink.to" itemscope itemtype="http://schema.org/Thing" itemprop="item">
               <span itemprop="name"> {{ roterLink.name }}</span>
            </nuxt-link>
            <meta v-if="!roterLink.catalog" itemprop="position" content="2" />
            <meta v-if="roterLink.catalog" itemprop="position" content="3" />
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   props: {
      roterLink: {
         type: Object,
         required: true,
      },
   },
};
</script>
