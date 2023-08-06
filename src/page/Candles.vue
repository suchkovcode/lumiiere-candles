<template>
   <section class="candles">
      <div class="container">
         <BaseBreadcrumbs :roterLink="roterData" />
         <div class="candles__header">
            <img class="candles__header-icon" src="@/assets/img/svg/candles__header-icon.svg" alt="Главная картинка" width="85" height="40" />
            <h1 class="title candles__title">СОЕВЫЕ СВЕЧИ</h1>
            <p class="subtitle candles__subtitle">
               <svg class="candles__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               Все наши свечи в одном месте — любой цвет, размер и аромат. Хочешь помедитировать, устроить дома романтик или просто создать уютную
               атмосферу? Выбирай под свое настроение и тайные желания!
            </p>
         </div>
      </div>
   </section>
   <section class="catalog">
      <div class="container">
         <MyCatalog :dataItem="getCandlesCard" />
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "PageCandles",

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
               id: 3,
               name: "Соевые свечи",
               to: "/catalog/candles",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useAppStore, ["getCandlesCard"]),
   },
};
</script>

<style lang="scss" scoped>
.candles {
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
      max-width: 650px;
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

.catalog {
   background-color: var(--color_base);

   .catalogs {
      padding: 20px;
      background-color: var(--color_base);

      @include md {
         padding: 30px;
      }

      @include lg {
         grid-template-columns: 1fr 1fr 1fr 1fr !important;
      }

      @include xxl {
         padding: 0;
      }
   }
}
</style>
