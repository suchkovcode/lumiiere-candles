<template>
   <footer id="footer" class="footer">
      <div class="container">
         <div class="footer__grid">
            <div class="footer__logo">
               <nuxt-link class="footer__logo-link" to="/" aria-label="Logo link">
                  <svg class="footer__logo-icon" fill="none">
                     <use xlink:href="@/assets/img/svg/sprite.svg#logo"></use>
                  </svg>
               </nuxt-link>
               <p class="footer__logo-text">
                  Соевые свечи ручной
                  <br />
                  работы
               </p>
            </div>
            <nav class="footer__catalog">
               <div class="footer__catalog-header">
                  <svg class="footer__catalog-icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#footerCatalog"></use>
                  </svg>
                  <h2 class="footer__catalog-title">Каталог</h2>
               </div>
               <ul class="footer__catalog-nav">
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/melts"> Мелтсы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/boxes"> Наборы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/postcard"> Открытки </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/candles"> Соевые свечи </nuxt-link>
                  </li>
               </ul>
            </nav>
            <nav class="footer__client">
               <div class="footer__client-header">
                  <svg class="footer__client-icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#footerClient"></use>
                  </svg>
                  <h2 class="footer__client-title">ДЛЯ КЛИЕНТА</h2>
               </div>
               <ul class="footer__client-nav">
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/care"> Уход </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/about"> О нас </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/partners"> Сотрудничество </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/faq"> Ответы на вопросы </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/delivery"> Доставка и оплата </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/oferta"> Договор оферты </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/policy"> Политика конфиденциальности </nuxt-link>
                  </li>
               </ul>
            </nav>
            <div class="footer__contact">
               <div class="footer__contact-header">
                  <svg class="footer__contact-icon">
                     <use xlink:href="@/assets/img/svg/sprite.svg#footerContact"></use>
                  </svg>
                  <h2 class="footer__contact-title upercase">Контакты</h2>
               </div>
               <a class="footer__contact-tel transition" href="tel:9999999999"> +9 (999) 999 99 99 </a>
               <p class="footer__contact-tel-text">Поможем с выбором</p>
               <a class="footer__contact-email transition" href="mailto:info@lumiiere.candles.com"> info@lumiiere.candles.com </a>
               <div class="footer__props">
                  <p class="footer__props-title upercase">Реквизиты:</p>
                  <p class="footer__props-info">
                     Иванова Елизавета Александрова
                     <br />
                     ИНН 145389784328
                  </p>
               </div>
               <div class="footer__social">
                  <a class="footer__social-link" href="https://instagram.com/lumiiere.candles?igshid=YmMyMTA2M2Y=" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#footerSocialLike"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="https://vt.tiktok.com/ZSdGUYsFb/" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#footerSocialTikTok"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="https://t.me/lumiiere_candles" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#footerSocialTelegram"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="https://wa.me/79037590430" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#footerSocialWhatsApp"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="https://taplink.cc/lumiierecandles" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#footerSocialTaplink"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div class="footer__info">
            <div class="footer__info-payment">
               <svg class="footer__info-payment-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#footerPaymentVisa"></use>
               </svg>
               <svg class="footer__info-payment-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#footerPaymentMaster"></use>
               </svg>
            </div>
            <p class="footer__copy">© 2023 Lumiiere. Защищено авторским правом</p>
            <a class="footer__dev transition" href="https://github.com/suchkovcode/"> Разработка сайта </a>
         </div>
      </div>
   </footer>
   <canvas-menu :active-state="isActiveCanvasMenu" @close-canvas="isActiveCanvasMenu = $event" />
   <canvas-favorite :active-state="isActiveFavorite" @close-canvas="togllerFavorite($event)" />
   <canvas-backet :active-state="isActiveBacket" @close-canvas="togllerBacket($event)" />
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";


export default {
   data() {
      return {
         isActiveCanvasMenu: false,
      };
   },

   computed: {
      ...mapState(useAppStore, ["isActiveFavorite", "isActiveBacket"]),
   },

   methods: {
      ...mapActions(useAppStore, { togllerFavorite: "updateFavoriteCanvas", togllerBacket: "updateBacketCanvas" }),

      openMobileMenu() {
         const breakpoint = window.matchMedia("(max-width: 1200px)");
         breakpoint.matches ? (this.isActiveCanvasMenu = true) : (this.isActiveCanvasMenu = false);
      },
   },
};
</script>
