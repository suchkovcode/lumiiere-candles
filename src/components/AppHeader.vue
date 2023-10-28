<template>
   <header class="header">
      <p class="header__message">100% VEGAN. CRUELTY FREE.</p>
      <div class="container">
         <div class="header__container">
            <div class="header__left">
               <div class="header__left-catalog" :class="{ active: isActiveLeft }" @mouseover="menuLeftActive" @mouseout="isActiveLeft = false">
                  <button class="header__btn-menu" aria-label="Catalog button" @click="openMobileMenu">
                     <svg class="header__icon" fill="#EB4A00">
                        <use xlink:href="/sprite.svg#catalog"></use>
                     </svg>
                  </button>
                  <ul class="header__left-drobdown" :class="{ active: isActiveLeft }">
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog"> Все товары </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/candles"> Свечи </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/melts"> Мелтсы </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/boxes"> Наборы </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/matches"> Дополнительно </nuxt-link>
                     </li>
                  </ul>
               </div>
               <ul class="header__left-nav">
                  <li class="header__left-nav-item">
                     <ul
                        class="header__submenu"
                        :class="{ active: isActiveRight }"
                        @mouseover="menuRightActive"
                        @mouseout="isActiveRight = false">
                        <li class="header__submenu-item" :class="{ active: isActiveRight }">Для клиента</li>

                        <li class="header__submenu-drobdown">
                           <ul class="header__submenu-drobdown-list">
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/care"> Уход </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/about"> О нас </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/partners"> Сотрудничество </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/faqs"> Ответы на вопросы </nuxt-link>
                              </li>
                              <li class="hheader__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/delivery"> Доставка и оплата </nuxt-link>
                              </li>
                              <li class="hheader__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/oferta"> Договор оферты </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/policy"> Политика конфиденциальности </nuxt-link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li class="header__left-nav-item">
                     <span ref="footerLink" class="header__left-nav-link" @click="toScrollFooter"> Контакты </span>
                  </li>
               </ul>
            </div>
            <nuxt-link class="header__logo" to="/" aria-label="Logo link">
               <svg class="header__logo-icon">
                  <use xlink:href="/sprite.svg#logo"></use>
               </svg>
            </nuxt-link>
            <div class="header__right">
               <button class="header__btn-favorite" @click="togllerFavorite(true)">
                  <svg class="header__icon">
                     <use xlink:href="/sprite.svg#favorite"></use>
                  </svg>
                  <span class="header__icon-count"> {{ cardsFavorite.length }} </span>
               </button>
               <button class="header__btn-backet" @click="togllerBacket(true)">
                  <svg class="header__icon">
                     <use xlink:href="/sprite.svg#backet"></use>
                  </svg>
                  <span class="header__icon-count"> {{ cardsBacket.length }} </span>
               </button>
               <nuxt-link class="header__btn-login" to="/auth/login" aria-label="Login link">
                  <svg class="header__icon">
                     <use xlink:href="/sprite.svg#avatar"></use>
                  </svg>
               </nuxt-link>
            </div>
         </div>
      </div>
   </header>
   <canvas-menu :active-state="isActiveCanvasMenu" @close-canvas="isActiveCanvasMenu = $event" />
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";
import { useBacketStore } from "@/store/backetStore";
import { useFavoriteStore } from "@/store/favoriteStore";

export default {
   data() {
      return {
         isActiveCanvasMenu: false,
         isActiveRight: false,
         isActiveLeft: false,
      };
   },

   computed: {
      ...mapState(useBacketStore, { cardsBacket: "cards" }),
      ...mapState(useFavoriteStore, { cardsFavorite: "cards" }),
   },

   methods: {
      ...mapActions(useAppStore, { togllerFavorite: "updateFavoriteCanvas", togllerBacket: "updateBacketCanvas" }),

      toScrollFooter() {
         const footer = document.querySelector("#footer");
         footer.scrollIntoView({ behavior: "smooth" });
      },

      openMobileMenu() {
         const breakpoint = window.matchMedia("(max-width: 1200px)");
         breakpoint.matches ? (this.isActiveCanvasMenu = true) : (this.isActiveCanvasMenu = false);
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
