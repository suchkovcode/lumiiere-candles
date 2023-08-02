<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <BaseBreadcrumbs :roterLink="roterData" />
            <article class="post__container">
               <img class="post__img" src="@/assets/img/png/hero__card-1.jpg" loading="lazy" alt="" width="260" height="260" />
               <div class="post__content">
                  <header class="post__content-header">
                     <v-card-rating :ratingStorage="storageDataCard" />
                     <h3 class="post__title">Гарри Поттер</h3>
                     <p class="post__article">
                        Артикул:
                        <span class="post__article-size" data-type="article" data-value=""> CNDL-HAR-S </span>
                     </p>
                     <v-card-price :priceData="'4.99'" />
                     <v-card-changesize />
                     <div class="post__btn">
                        <v-card-count />
                        <v-card-btn-add class="post__btn-add" />
                        <v-card-favorite class="post__favorite" :cardId="cardIdData" :isFavorite="storageDataCard.isFavorite" />
                     </div>
                  </header>
                  <main class="post__content-body">
                     <p class="post__key">пряный тыквенный латте | золотой снитч</p>
                     <p class="post__description">
                        Поттер, учишься балету? Представь, что ты на завтраке в Хогсмиде, повсюду аромат тыквенного сока, сливочного пива,
                        карамели и кофе. Обволакивающий, тёплый, уютный, просто отвал всего. Пахнет, как твой настоящий друг.
                     </p>
                     <p class="post__info">
                        Интенсивность:
                        <span class="post__info-circles">
                           <span class="post__info-circle active"></span>
                           <span class="post__info-circle active"></span>
                           <span class="post__info-circle active"></span>
                           <span class="post__info-circle active"></span>
                           <span class="post__info-circle"></span>
                        </span>
                     </p>
                  </main>
                  <footer class="post__content-footer">
                     <p class="post__category" data-category="aroma">Аромат: <span>Десертные</span></p>
                     <p class="post__category" data-category="collection">Коллекция: <span>Гарри Поттер</span></p>
                     <p class="post__category" data-category="weight">Вес: <span>115</span>г</p>
                  </footer>
               </div>
            </article>
         </div>
      </section>
   </div>
</template>

<script>
export default {
   name: "PagePost",

   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Каталог",
               to: "/catalog",
               last: false,
            },
            {
               id: 2,
               name: "Карточка товара",
               to: "/:id",
               last: true,
            },
         ],
         cardIdData: this.$route.params.id,
         storageDataCard: JSON.parse(localStorage.getItem(`data-${this.$route.params.id}`)),
      };
   },
};
</script>

<style lang="scss" >
.post {
   &__container {
      display: flex;
      flex-flow: column;
      gap: 20px;

      @include md {
         flex-flow: row;
      }

      @include lg {
         gap: 30px;
      }
   }

   &__img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 560px;
      object-fit: cover;
   }

   &__content {
      display: flex;
      flex-flow: column;
      gap: 20px;
      max-width: 560px;

      &-footer {
         display: flex;
         flex-flow: column;
      }
   }

   &__title {
      margin-bottom: 5px;
      font: 500 26px/1.3 "Karton";
      color: var(--color_secondary);
   }

   &__article {
      margin-bottom: 25px;
      font: 300 16px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      &-size {
         text-transform: uppercase;
      }
   }

   &__btn {
      display: flex;
      align-items: center;
      gap: 10px;

      &-add {
         min-width: 120px;
         max-width: 160px;

         &:hover {
            background-color: #ff6219;
         }

         @include md {
            flex: 0 0 calc(50% - 5px);
         }
      }
   }

   &__favorite {
      cursor: pointer;
      position: relative;
      top: 0;
      left: 0;
      border: 1px solid var(--color_primary);
   }

   &__key {
      margin-bottom: 15px;
      font: 600 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   &__description {
      margin-bottom: 15px;
      font: 400 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   &__info {
      display: flex;
      align-items: center;
      gap: 10px;
      font: 600 14px/1.3 "AvenirNextCyr";

      &-circles {
         display: flex;
         align-items: center;
         gap: 5px;
      }

      &-circle {
         display: block;
         width: 12px;
         height: 12px;
         border-radius: 100%;
         background-color: var(--color_border);

         &.active {
            background-color: var(--color_primary);
         }

         @include md {
            width: 15px;
            height: 15px;
         }
      }

      @include md {
         font-size: 16px;
      }
   }

   &__category {
      font: 300 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   & .changesize {
      margin-bottom: 20px;
   }

   .btncount {
      max-width: 100px;
   }
}
</style>
