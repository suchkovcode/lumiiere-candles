<template>
   <nav class="breadcrumbs">
      <ol class="breadcrumbs__list" itemscope itemtype="http://schema.org/BreadcrumbList">
         <li class="breadcrumbs__item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link class="breadcrumbs__link" to="/" itemprop="item" itemtype="http://schema.org/Thing" itemid="/">
               <span itemprop="name">Главная</span>
            </nuxt-link>
            <meta itemprop="position" content="1" />
         </li>

         <li v-if="roterLink.catalog" class="breadcrumbs__item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link class="breadcrumbs__link" to="/catalog" itemprop="item" itemtype="http://schema.org/Thing" itemid="/catalog">
               <span itemprop="name">Каталог</span>
            </nuxt-link>
            <meta itemprop="position" content="2" />
         </li>

         <li v-if="roterLink.subpage" class="breadcrumbs__item" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link"
               :to="roterLink.subpage.to"
               itemprop="item"
               itemtype="http://schema.org/Thing"
               :itemid="roterLink.subpage.to">
               <span itemprop="name">{{ roterLink.subpage.name }}</span>
            </nuxt-link>
            <meta itemprop="position" content="3" />
         </li>

         <li class="breadcrumbs__item active" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link"
               :to="roterLink.to"
               itemprop="item"
               itemtype="http://schema.org/Thing"
               :itemid="roterLink.to">
               <span itemprop="name"> {{ roterLink.name }}</span>
            </nuxt-link>
            <meta v-if="!roterLink.catalog" itemprop="position" content="2" />
            <meta v-if="roterLink.catalog && !roterLink.subpage" itemprop="position" content="3" />
            <meta v-if="roterLink.subpage" itemprop="position" content="4" />
         </li>
      </ol>
   </nav>
</template>

<script setup>
const props = defineProps({
   roterLink: {
      type: Object,
      required: true,
   },
});
</script>
