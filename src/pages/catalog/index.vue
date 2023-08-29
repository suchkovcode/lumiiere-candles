<template>
   <section class="goods">
      <div class="container">
         <base-breadcrumbs class="goods__breadcrumbs" :roter-link="roterData" />
         <div class="goods__header">
            <svg class="goods__header-icon" width="85" height="40">
               <use xlink:href="@/assets/img/svg/sprite.svg#catalogHeaderIcon"></use>
            </svg>
            <h1 class="title goods__title">КАТАЛОГ</h1>
            <p class="subtitle goods__subtitle">
               <svg class="goods__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               «Поверь дружок, здесь ты найдешь все для сохранения своего душевного равновесия»
            </p>
         </div>
         <div class="goods__search">
            <div class="goods__search-container">
               <input class="goods__search-input" type="text" placeholder="Что нужно найти?" @input="searchQuery = $event.target.value" />
               <svg class="goods__search-icon" fill="none" stroke="rgb(182, 182, 182)">
                  <use xlink:href="@/assets/img/svg/sprite.svg#search"></use>
               </svg>
            </div>
            <button class="goods__search-btn" @click="serchUpdate(searchQuery)">Найти</button>
         </div>
      </div>
   </section>
   <section class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter :category-data="uniqueCategories" @filter="filterData = $event" />
            <div>
               <AppPagination class="allcatalog__pagination" />
               <AppCatalog class="allcatalog__cards" :data-item="filteredBySearchQuery" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
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
               last: true,
            },
         ],

         searchQuery: "",
      };
   },

   computed: {
      ...mapState(useAppStore, ["uniqueCategories", "filteredBySearchQuery"]),
   },

   methods: {
      ...mapActions(useAppStore, { serchUpdate: "updateSearchQuery" }),
   },
};
</script>

<style lang="scss">
.goods {
   margin-bottom: 20px;
   padding: 20px;
   padding-top: 120px;
   background-color: var(--color_base);

   &__header {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 50px;

      &-icon {
         position: absolute;
         top: 0;
         left: calc(50% - 45px);
         z-index: 50;

         @include md {
            width: 100px;
            height: auto;
         }

         @include lg {
            left: 10px;
         }

         @include xxl {
            width: 110px;
            height: auto;
         }
      }

      @include lg {
         flex-flow: row;
         justify-content: space-between;
         align-items: flex-end;
      }
   }

   &__title {
      padding-top: 30px;
      letter-spacing: 2px;
      color: var(--color_secondary);

      @include sm {
         font-size: 42px;
      }

      @include md {
         font-size: 46px;
         text-align: center;
      }

      @include lg {
         font-size: 52px;
         text-align: left;
      }

      @include xl {
         font-size: 56px;
      }

      @include xxl {
         font-size: 58px;
      }
   }

   &__subtitle {
      max-width: 400px;
      text-align: center;
      color: var(--color_secondary);

      &-icon {
         position: absolute;
         top: -30px;
         left: -10px;
         width: 40px;
         height: 40px;

         @include md {
            left: -15px;
         }

         @include lg {
            left: -30px;
         }
      }

      @include lg {
         font-size: 18px !important;
         text-align: left;
      }
   }

   &__search {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 10px;

      &-container {
         position: relative;
         display: block;
         width: 100%;

         @include lg {
            max-width: 270px;
         }

         @include xl {
            max-width: 340px;
         }
      }

      &-input {
         position: relative;
         width: 100%;
         height: 60px;
         padding: 0 15px 0 50px;
         border-radius: 50px;
         background: var(--color_bg_grey);

         @include lg {
            max-width: 270px;
         }

         @include xl {
            max-width: 340px;
         }
      }

      &-icon {
         position: absolute;
         top: 50%;
         left: 15px;
         width: 25px;
         height: 25px;
         transform: translateY(-50%);
      }

      &-btn {
         cursor: pointer;
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 60px;
         border-radius: 50px;
         font: 500 18px/1.5 "Karton";
         color: var(--color_base);
         background-color: var(--color_btn);
         transition: all 0.2s ease-in-out;

         &:hover {
            background-color: var(--color_btn_hover);
         }

         @include md {
            max-width: 170px;
         }
      }

      @include md {
         flex-flow: row;
         gap: 20px;
         max-width: 600px;
         margin: 0 auto;
      }

      @include lg {
         margin: 0;
      }
   }

   @include sm {
      padding: 30px 20px;
      padding-top: 170px;
   }

   @include lg {
      padding: 30px;
      padding-top: 170px;
   }

   @include xl {
      padding-top: 200px;
   }
}

.allcatalog {
   background-color: var(--color_base);

   &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 0 20px;

      @include lg {
         grid-template-columns: 220px 1fr;
         gap: 20px;
      }

      @include xl {
         padding: 0;
      }
   }

   &__cards {
      .card {
         border: 1px solid var(--color_border) !important;
      }
   }

   &__pagination {
      margin-bottom: 30px;

      @include md {
         justify-content: flex-end !important;
      }
   }

   @include sm {
      padding: 30px 20px;
   }

   @include lg {
      padding: 30px;
   }
}
</style>
