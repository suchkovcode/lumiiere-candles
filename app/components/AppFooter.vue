<template>
   <footer id="footer" class="footer" itemscope itemtype="http://schema.org/WPFooter">
      <div class="container">
         <div class="footer__grid">
            <div class="footer__logo">
               <nuxt-link class="footer__logo-link" to="/" aria-label="Logo link">
                  <svg class="footer__logo-icon" fill="none">
                     <use xlink:href="/img/sprite.svg#logo"></use>
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
                     <use xlink:href="/img/sprite.svg#footerCatalog"></use>
                  </svg>
                  <h2 class="footer__catalog-title">Каталог</h2>
               </div>
               <ul class="footer__catalog-nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/candles" itemprop="url"> Свечи </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/melts" itemprop="url"> Мелтсы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/boxes" itemprop="url"> Наборы </nuxt-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/catalog/matches" itemprop="url"> Дополнительно </nuxt-link>
                  </li>
               </ul>
            </nav>
            <nav class="footer__client">
               <div class="footer__client-header">
                  <svg class="footer__client-icon">
                     <use xlink:href="/img/sprite.svg#footerClient"></use>
                  </svg>
                  <h2 class="footer__client-title">ДЛЯ КЛИЕНТА</h2>
               </div>
               <ul class="footer__client-nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/care" itemprop="url"> Уход </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/about" itemprop="url"> О нас </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/partners" itemprop="url"> Сотрудничество </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/faqs" itemprop="url"> Ответы на вопросы </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/delivery" itemprop="url"> Доставка и оплата </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/oferta" itemprop="url"> Договор оферты </nuxt-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <nuxt-link class="footer__catalog-nav-link transition" to="/policy" itemprop="url"> Политика конфиденциальности </nuxt-link>
                  </li>
               </ul>
            </nav>
            <div class="footer__contact">
               <div class="footer__contact-header">
                  <svg class="footer__contact-icon">
                     <use xlink:href="/img/sprite.svg#footerContact"></use>
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
                        <use xlink:href="/img/sprite.svg#footerSocialLike"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/img/sprite.svg#footerSocialTikTok"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/img/sprite.svg#footerSocialTelegram"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/img/sprite.svg#footerSocialWhatsApp"></use>
                     </svg>
                  </a>
                  <a class="footer__social-link" href="#" aria-label="Social link">
                     <svg class="footer__social-icon">
                        <use xlink:href="/img/sprite.svg#footerSocialTaplink"></use>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div class="footer__info">
            <div class="footer__info-payment">
               <svg class="footer__info-payment-icon">
                  <use xlink:href="/img/sprite.svg#footerPaymentVisa"></use>
               </svg>
               <svg class="footer__info-payment-icon">
                  <use xlink:href="/img/sprite.svg#footerPaymentMaster"></use>
               </svg>
            </div>
            <p class="footer__copy">© 2023 Lumiiere. Защищено авторским правом</p>
            <span>
               <a class="footer__dev transition" href="https://github.com/suchkovcode/"> Develop</a>
            </span>
         </div>
      </div>
      <meta itemprop="copyrightYear" content="2023" />
      <meta itemprop="copyrightHolder" content="Lumiiere" />
   </footer>
   <canvas-favorite :active-state="store.isActiveFavorite" @close-canvas="store.updateFavoriteCanvas($event)" />
   <canvas-backet :active-state="store.isActiveBacket" @close-canvas="store.updateBacketCanvas($event)" />
</template>

<script setup>
const store = useAppStore();
</script>
