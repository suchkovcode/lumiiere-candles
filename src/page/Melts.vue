<template>
   <section class="melts">
      <div class="container">
         <BaseBreadcrumbs :roterLink="roterData" />
         <div class="melts__header">
            <img class="melts__header-icon" src="@/assets/img/svg/melts__header-icon.svg" alt="Главная картинка" width="85" height="40" />
            <h1 class="title melts__title">НЕВЕРОЯТНЫЕ МЕЛТСЫ</h1>
         </div>
      </div>
   </section>
   <section class="catalog">
      <div class="container">
         <MyCatalog :dataItem="getMeltsCard" />
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "PageMelts",

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
               name: "Невероятные мелтсы",
               to: "/catalog/melts",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useAppStore, ["getMeltsCard"]),
   },
};
</script>

<style lang="scss" scoped>
.melts {
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
         top: -30px;
         left: calc(50% - 60px);
         z-index: 10;
         width: 120px;
         height: auto;

         @include md {
            top: -40px;
            width: 140px;
            height: auto;
         }

         @include lg {
            top: -30px;
            left: -20px;
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
