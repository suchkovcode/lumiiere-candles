<template>
   <section class="boxes">
      <div class="container">
         <BaseBreadcrumbs class="boxes__breadcrumbs" :roterLink="roterData" />
         <div class="boxes__header">
            <img class="boxes__header-icon" src="@/assets/img/svg/boxes__header-icon.svg" alt="Главная картинка" width="85" height="40" />
            <h1 class="title boxes__title">НАБОРЫ СВЕЧЕЙ</h1>
            <p class="subtitle boxes__subtitle">
               <svg class="boxes__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               Одна свеча хорошо, а две лучше, что уж говорить о целом наборе! Идеальное решение для тех, кто не хочет выбирать. Закажи разные, а
               потом выбери любимчика!
            </p>
         </div>
      </div>
   </section>
   <section class="catalog">
      <div class="container">
         <MyCatalog :dataItem="getBoxesCard" />
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "pageBoxes",

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
               name: "Наборы свечей",
               to: "/catalog/boxes",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useAppStore, ["getBoxesCard"]),
   },
};
</script>

<style lang="scss" scoped>
.boxes {
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
         top: -10px;
         left: calc(50% - 70px);
         z-index: 10;
         width: 140px;
         height: auto;

         @include lg {
            left: 10px;
            width: 150px;
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
      max-width: 500px;
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
            left: -25px !important;
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
