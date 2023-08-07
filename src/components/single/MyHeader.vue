<template>
   <header class="header">
      <p class="header__message">100% VEGAN. CRUELTY FREE.</p>
      <div class="container">
         <div class="header__container">
            <div class="header__left">
               <div class="header__left-catalog" :class="{ active: isActiveLeft }" @mouseover="menuLeftActive" @mouseout="isActiveLeft = false">
                  <button class="header__btn-menu" aria-label="Catalog button" @click="openMobileMenu">
                     <svg class="header__icon" fill="#EB4A00">
                        <use xlink:href="@/assets/img/svg/sprite.svg#catalog"></use>
                     </svg>
                  </button>
                  <ul class="header__left-drobdown" :class="{ active: isActiveLeft }">
                     <li class="header__left-drobdown-item">
                        <router-link class="header__left-drobdown-link" :to="{ name: 'catalog'}"> Все товары </router-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <router-link class="header__left-drobdown-link" :to="{ name: 'melts'}"> Мелтсы </router-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <router-link class="header__left-drobdown-link" :to="{ name: 'boxes'}"> Наборы </router-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <router-link class="header__left-drobdown-link" :to="{ name: 'postcard'}"> Открытки </router-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <router-link class="header__left-drobdown-link" :to="{ name: 'candles'}"> Соевые свечи </router-link>
                     </li>
                  </ul>
               </div>
               <button class="header__btn-search" aria-label="Search button">
                  <svg class="header__icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#search"></use>
                  </svg>
               </button>
               <div>
                  <ul class="header__left-nav">
                     <li class="header__left-nav-item">
                        <router-link class="header__left-nav-link" to="/about"> О нас </router-link>
                     </li>
                     <li class="header__left-nav-item">
                        <span class="header__left-nav-link" ref="footerLink" @click="toScrollFooter"> Контакты </span>
                     </li>
                  </ul>
               </div>
            </div>
            <router-link class="header__logo" to="/" aria-label="Logo link">
               <svg class="header__logo-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#logo"></use>
               </svg>
            </router-link>
            <div class="header__right">
               <ul class="header__right-nav" :class="{ active: isActiveRight }" @mouseover="menuRightActive" @mouseout="isActiveRight = false">
                  <li class="header__right-nav-item" :class="{ active: isActiveRight }">Для клиента</li>
                  <li class="header__right-drobdown">
                     <ul class="header__right-drobdown-list">
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/care"> Уход </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/about"> О нас </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/partners"> Сотрудничество </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/faq"> Ответы на вопросы </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/delivery"> Доставка и оплата </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/oferta"> Договор оферты </router-link>
                        </li>
                        <li class="header__right-drobdown-item">
                           <router-link class="header__right-drobdown-link" to="/policy"> Политика конфиденциальности </router-link>
                        </li>
                     </ul>
                  </li>
               </ul>
               <button class="header__btn-favorite" @click="togllerFavorite(true)">
                  <svg class="header__icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#favorite"></use>
                  </svg>
                  <span class="header__icon-count"> {{ cardsFavorite.length }} </span>
               </button>
               <button class="header__btn-backet" @click="togllerBacket(true)">
                  <svg class="header__icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#backet"></use>
                  </svg>
                  <span class="header__icon-count"> {{ cardsBacket.length }} </span>
               </button>
            </div>
         </div>
      </div>
      <v-canvas-menu :activeState="isActiveCanvasMenu" @closeCanvas="isActiveCanvasMenu = $event" />
      <v-canvas-favorite :activeState="isActiveFavorite" @closeCanvas="togllerFavorite($event)" />
      <v-canvas-backet :activeState="isActiveBacket" @closeCanvas="togllerBacket($event)" />
   </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";
import { useBacketStore } from "@/store/backetStore";
import { useFavoriteStore } from "@/store/favoriteStore";

export default {
   name: "MyHeader",

   data() {
      return {
         isActiveCanvasMenu: false,
         isActiveRight: false,
         isActiveLeft: false,
      };
   },

   computed: {
      ...mapState(useAppStore, ["isActiveFavorite", "isActiveBacket"]),
      ...mapState(useBacketStore, { cardsBacket: "cards" }),
      ...mapState(useFavoriteStore, { cardsFavorite: "cards" }),
   },

   methods: {
      ...mapActions(useAppStore, { togllerFavorite: "updateFavoriteCanvas", togllerBacket: "updateBacketCanvas" }),

      openMobileMenu() {
         const breakpoint = window.matchMedia("(max-width: 1200px)");
         breakpoint.matches ? (this.isActiveCanvasMenu = true) : (this.isActiveCanvasMenu = false);
      },

      toScrollFooter() {
         const footer = document.querySelector("#footer");
         footer.scrollIntoView({ behavior: "smooth" });
      },

      menuRightActive() {
         const breakpoint = window.matchMedia("(min-width: 1200px)");
         breakpoint.matches ? (this.isActiveRight = true) : (this.isActiveRight = false);
      },

      menuLeftActive() {
         const breakpoint = window.matchMedia("(min-width: 1200px)");
         breakpoint.matches ? (this.isActiveLeft = true) : (this.isActiveLeft = false);
      },
   },
};
</script>

<style lang="scss" scoped>
.header {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   width: 100%;

   &__container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 67px;
      padding: 20px;
      background-color: var(--color_base);
      box-shadow: 0 25px 45px 0 rgba(107, 107, 106, 5%);

      @include sm {
         height: 90px;
         margin: 15px 20px 0 20px;
         padding: 20px 25px;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 70%);
         box-shadow: 0 25px 45px 0 rgb(107, 107, 106, 10%);
         backdrop-filter: blur(10px);
      }

      @include md {
         margin: 15px 30px 0 30px;
      }

      @include lg {
         height: 100px;
      }

      @include xxl {
         height: 110px;
         margin: 15px auto 0 auto;
      }
   }

   &__message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 20px;
      max-width: 2000px;
      margin: 0 auto;
      font: 400 12px/1.2 "AvenirNextCyr";
      text-align: center;
      color: var(--color_base);
      background-color: var(--color_primary);

      @include sm {
         height: 25px;
      }

      @include lg {
         height: 30px;
         font: 500 14px/1.2 "AvenirNextCyr";
      }
   }

   &__btn {
      &-menu {
         cursor: pointer;
         display: flex;
         align-items: center;
         gap: 10px;

         &::after {
            content: "Меню";
            font: 500 16px/1.3 "AvenirNextCyr";
            color: var(--color_secondary);

            @include xl {
               content: "Каталог";
            }
         }

         &:hover::after {
            color: var(--color_primary);
         }

         @include sm {
            padding: 15px;
            border-radius: 20px;
            background-color: var(--color_header_btn);
            transition: background-color 0.2s ease-in-out;

            &:hover {
               background-color: var(--color_header_btn_hover);
            }

            &:hover > .header__menu-text {
               color: var(--color_primary);
            }
         }
      }

      &-search {
         display: none;

         @include sm {
            cursor: pointer;
            position: relative;
            z-index: 100;
            display: block;
            margin-left: 130px;
         }

         @include xl {
            margin-left: 145px;
         }
      }

      &-favorite {
         cursor: pointer;
         position: relative;
         display: block;

         @include sm {
            padding: 15px;
            border-radius: 20px;
            background-color: var(--color_header_btn);
            transition: background-color 0.2s ease-in-out;

            &:hover {
               background-color: var(--color_header_btn_hover);
            }

            &:hover > .header__icon {
               stroke: var(--color_primary);
            }
         }
      }

      &-backet {
         cursor: pointer;
         position: relative;
         display: block;

         @include sm {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            border-radius: 20px;
            background-color: var(--color_header_btn);
            transition: background-color 0.2s ease-in-out;

            &:hover {
               background-color: var(--color_header_btn_hover);
            }

            &:hover::before {
               color: var(--color_primary);
            }

            &:hover > .header__icon {
               stroke: var(--color_primary);
            }
         }

         @include md {
            &::before {
               content: "Корзина";
               font: 500 16px/1.3 "AvenirNextCyr";
               color: var(--color_secondary);
            }
         }
      }
   }

   &__logo {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-top: -10px;
   }

   &__icon-count {
      position: absolute;
      right: -3px;
      bottom: -7px;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      font: 400 10px/1.3 "AvenirNextCyr";
      background-color: var(--color_primary);

      @include sm {
         width: 22px;
         height: 22px;
         font: 400 12px/1.3 "AvenirNextCyr";
      }

      @include md {
         width: 24px;
         height: 24px;
         font: 400 13px/1.3 "AvenirNextCyr";
      }
   }

   &__icon {
      width: 24px;
      height: 24px;
      fill: none;
      stroke: var(--color_secondary);
      transition: all 0.2s ease-in-out;

      &:hover {
         stroke: var(--color_primary);
      }

      @include sm {
         &--backet {
            width: 28px;
            height: 28px;
         }
      }
   }

   &__logo-icon {
      width: 110px;
      height: 31px;

      @include sm {
         width: 130px;
         height: 55px;
      }

      @include md {
         width: 140px;
      }

      @include lg {
         width: 160px;
      }

      @include xl {
         margin-right: 180px;
      }
   }

   &__left {
      position: relative;

      &-catalog {
         @include sm {
            position: absolute;
            top: -15px;
            left: -10px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 130px;
            height: fit-content;

            &.active {
               height: 340px;
            }
         }

         @include xl {
            left: 0;
         }
      }

      &-nav {
         display: none;
         gap: 30px;
         margin-left: 40px;

         &-link {
            cursor: pointer;
            font: 500 16px/1.5 "AvenirNextCyr";
            color: var(--color_secondary);

            &:hover {
               color: var(--color_primary);
            }
         }

         @include xl {
            display: flex;
         }
      }

      &-drobdown {
         position: absolute;
         top: 94px;
         left: -35px;
         display: none;
         flex-flow: column;
         align-items: center;
         gap: 10px;
         width: 200px;
         padding: 25px 40px;
         border-radius: 20px;
         background-color: var(--color_base);
         box-shadow: 0 0 10px 10px rgba(0, 0, 0, 2%);

         &::before {
            content: "";
            position: absolute;
            top: -14px;
            left: calc(50% - 7px);
            display: block;
            width: 0;
            height: 0;
            border-right: 10px solid transparent;
            border-bottom: 14px solid var(--color_base);
            border-left: 10px solid transparent;
         }

         &-link {
            font: 500 16px/1.5 "AvenirNextCyr";
            text-align: center;
            color: var(--color_secondary);
            transition: background-color 0.2s ease-in-out;

            &:hover {
               color: var(--color_primary);
            }
         }

         &.active {
            display: flex;
         }
      }

      @include md {
         display: flex;
         align-items: center;
         gap: 20px;
      }
   }

   &__right {
      position: relative;
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: -10px;

      &-nav {
         position: absolute;
         top: 15px;
         right: 170px;
         display: none;
         width: 140px;
         text-align: center;

         &-item {
            cursor: pointer;
            position: relative;
            display: inline-block;
            width: fit-content;

            @include xl {
               font: 500 16px/1.5 "AvenirNextCyr";
               color: var(--color_secondary);
               transition: background-color 0.2s ease-in-out;

               &::before {
                  content: "";
                  position: absolute;
                  top: 11px;
                  right: -20px;
                  display: block;
                  border-top: 6px solid var(--color_primary);
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;
                  border-radius: 1px;
               }

               &:hover {
                  color: var(--color_primary);
               }

               &.active + .header__right-drobdown {
                  display: flex;
               }
            }
         }

         &.active {
            right: 75px;
            width: 330px;
            height: 340px;
         }

         @include xl {
            display: block;
            margin-right: 60px;
         }
      }

      &-drobdown {
         position: absolute;
         top: 80px;
         left: 0;
         display: none;
         padding: 25px 40px;
         border-radius: 20px;
         background-color: var(--color_base);
         box-shadow: 0 0 10px 10px rgba(0, 0, 0, 2%);

         &::before {
            content: "";
            position: absolute;
            top: -14px;
            left: calc(50% - 7px);
            display: block;
            width: 0;
            height: 0;
            border-right: 10px solid transparent;
            border-bottom: 14px solid var(--color_base);
            border-left: 10px solid transparent;
         }

         &-list {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 10px;
         }

         &-link {
            font: 500 16px/1.5 "AvenirNextCyr";
            text-align: center;
            white-space: nowrap;
            color: var(--color_secondary);
            transition: background-color 0.2s ease-in-out;

            &:hover {
               color: var(--color_primary);
            }
         }
      }

      @include sm {
         margin-top: 0;
      }
   }
}
</style>
