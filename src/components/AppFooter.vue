<template>
   <footer id="footer" class="footer">
      <div class="container">
         <div class="footer__grid">
            <div class="footer__logo">
               <nuxt-link class="footer__logo-link" to="/" aria-label="Logo link">
                  <svg class="footer__logo-icon" fill="none">
                     <use xlink:href="/sprite.svg#logo"></use>
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
                     <use xlink:href="/sprite.svg#footerCatalog"></use>
                  </svg>
                  <h2 class="footer__catalog-title">Каталог</h2>
               </div>
               <ul class="footer__catalog-nav">
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/candles"> Свечи </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/melts"> Мелтсы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/boxes"> Наборы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/matches"> Дополнительно </nuxt-link>
                  </li>
               </ul>
            </nav>
            <nav class="footer__client">
               <div class="footer__client-header">
                  <svg class="footer__client-icon">
                     <use xlink:href="/sprite.svg#footerClient"></use>
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
                     <nuxt-link class="footer__catalog-nav-link transition" to="/faqs"> Ответы на вопросы </nuxt-link>
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
                     <use xlink:href="/sprite.svg#footerContact"></use>
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
                     ИНН 14538978
                  </p>
               </div>
               <div class="footer__social">
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/sprite.svg#footerSocialLike"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/sprite.svg#footerSocialTikTok"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/sprite.svg#footerSocialTelegram"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/sprite.svg#footerSocialWhatsApp"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/sprite.svg#footerSocialTaplink"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div class="footer__info">
            <div class="footer__info-payment">
               <svg class="footer__info-payment-icon">
                  <use xlink:href="/sprite.svg#footerPaymentVisa"></use>
               </svg>
               <svg class="footer__info-payment-icon">
                  <use xlink:href="/sprite.svg#footerPaymentMaster"></use>
               </svg>
            </div>
            <p class="footer__copy">© 2023 Lumiiere. Защищено авторским правом</p>
            <span>
               <a class="footer__dev transition" href="https://github.com/suchkovcode/"> Develop |</a>
               <a class="footer__dev transition" href="https://mssg.me/d.purple"> Design </a>
            </span>
         </div>
      </div>
   </footer>
   <canvas-favorite :active-state="isActiveFavorite" @close-canvas="togllerFavorite($event)" />
   <canvas-backet :active-state="isActiveBacket" @close-canvas="togllerBacket($event)" />
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   computed: {
      ...mapState(useAppStore, ["isActiveFavorite", "isActiveBacket"]),
   },

   methods: {
      ...mapActions(useAppStore, { togllerFavorite: "updateFavoriteCanvas", togllerBacket: "updateBacketCanvas" }),
   },
};
</script>
