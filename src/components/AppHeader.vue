<template>
   <header class="header">
      <p class="header__message">100% VEGAN. CRUELTY FREE.</p>
      <div class="container">
         <div class="header__container">
            <div class="header__left">
               <div class="header__left-catalog" :class="{ active: isActiveLeft }" @mouseover="menuLeftActive" @mouseout="isActiveLeft = false">
                  <button class="header__btn-menu" aria-label="Catalog button" @click="openMobileMenu">
                     <svg class="header__icon" fill="#EB4A00">
                        <use xlink:href="/img/sprite.svg#catalog"></use>
                     </svg>
                  </button>
                  <ul class="header__left-drobdown" itemscope itemtype="http://schema.org/SiteNavigationElement" :class="{ active: isActiveLeft }">
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog" itemprop="url"> Все товары </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/candles" itemprop="url"> Свечи </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/melts" itemprop="url"> Мелтсы </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/boxes" itemprop="url"> Наборы </nuxt-link>
                     </li>
                     <li class="header__left-drobdown-item">
                        <nuxt-link class="header__left-drobdown-link" to="/catalog/matches" itemprop="url"> Дополнительно </nuxt-link>
                     </li>
                  </ul>
               </div>
               <ul class="header__left-nav">
                  <li class="header__left-nav-item">
                     <ul
                        class="header__submenu"
                        :class="{ active: isActiveRight }"
                        itemscope
                        itemtype="http://schema.org/SiteNavigationElement"
                        @mouseover="menuRightActive"
                        @mouseout="isActiveRight = false">
                        <li class="header__submenu-item" :class="{ active: isActiveRight }">Для клиента</li>
                        <li class="header__submenu-drobdown">
                           <ul class="header__submenu-drobdown-list">
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/care" itemprop="url"> Уход </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/about" itemprop="url"> О нас </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/partners" itemprop="url"> Сотрудничество </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/faqs" itemprop="url"> Ответы на вопросы </nuxt-link>
                              </li>
                              <li class="hheader__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/delivery" itemprop="url"> Доставка и оплата </nuxt-link>
                              </li>
                              <li class="hheader__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/oferta" itemprop="url"> Договор оферты </nuxt-link>
                              </li>
                              <li class="header__submenu-drobdown-item">
                                 <nuxt-link class="header__submenu-drobdown-link" to="/policy" itemprop="url">
                                    Политика конфиденциальности
                                 </nuxt-link>
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
                  <use xlink:href="/img/sprite.svg#logo"></use>
               </svg>
            </nuxt-link>
            <div class="header__right">
               <button class="header__btn-favorite" @click="appStore.updateFavoriteCanvas(true)">
                  <svg class="header__icon">
                     <use xlink:href="/img/sprite.svg#favorite"></use>
                  </svg>
                  <span class="header__icon-count"> {{ favoriteStore.cards.length }} </span>
               </button>
               <button class="header__btn-backet" @click="appStore.updateBacketCanvas(true)">
                  <svg class="header__icon">
                     <use xlink:href="/img/sprite.svg#backet"></use>
                  </svg>
                  <span class="header__icon-count"> {{ backetStore.cards.length }} </span>
               </button>
               <nuxt-link class="header__btn-login" :to="isAuthLink" aria-label="Login link">
                  <span> {{ isAuthUsername }}</span>
                  <svg class="header__icon">
                     <use xlink:href="/img/sprite.svg#avatar"></use>
                  </svg>
               </nuxt-link>
            </div>
         </div>
      </div>
   </header>
   <canvas-menu :active-state="isActiveCanvasMenu" @close-canvas="isActiveCanvasMenu = $event" />
</template>

<script setup>
const appStore = useAppStore();
const backetStore = useBacketStore();
const favoriteStore = useFavoriteStore();

const isActiveCanvasMenu = ref(false);
const isActiveRight = ref(false);
const isActiveLeft = ref(false);

const isAuthLink = computed(() => {
   const jwt = useCookie("strapi_jwt");
   return jwt.value ? "/admin" : "/auth/login";
});

const isAuthUsername = computed(() => {
   const name = process.client ? localStorage.getItem("username") : false;
   return name ? name : "Войти";
});

const toScrollFooter = () => {
   const footer = document.querySelector("#footer");
   footer.scrollIntoView({ behavior: "smooth" });
};

const openMobileMenu = () => {
   const breakpoint = window.matchMedia("(max-width: 1200px)");
   breakpoint.matches ? (isActiveCanvasMenu.value = true) : (isActiveCanvasMenu.value = false);
};

const menuRightActive = () => {
   const breakpoint = window.matchMedia("(min-width: 1200px)");
   breakpoint.matches ? (isActiveRight.value = true) : (isActiveRight.value = false);
};

const menuLeftActive = () => {
   const breakpoint = window.matchMedia("(min-width: 1200px)");
   breakpoint.matches ? (isActiveLeft.value = true) : (isActiveLeft.value = false);
};
</script>
