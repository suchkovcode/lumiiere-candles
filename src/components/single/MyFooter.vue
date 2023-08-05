<template>
   <footer class="footer" id="footer">
      <div class="container">
         <div class="footer__grid">
            <div class="footer__logo">
               <router-link class="footer__logo-link" to="/" aria-label="Logo link">
                  <svg class="footer__logo-icon" fill="none">
                     <use xlink:href="@/assets/img/svg/sprite.svg#logo"></use>
                  </svg>
               </router-link>
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
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Мелтсы </router-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Спички </router-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Наборы </router-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Открытки </router-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Бестселлеры </router-link>
                  </li>
                  <li class="footer__catalog-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/catalog"> Соевые свечи </router-link>
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
                     <router-link class="footer__catalog-nav-link transition" to="/care"> Уход </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/about"> О нас </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/partners"> Сотрудничество </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/faq"> Ответы на вопросы </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/delivery"> Доставка и оплата </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/oferta"> Договор оферты </router-link>
                  </li>
                  <li class="footer__client-nav-item">
                     <router-link class="footer__catalog-nav-link transition" to="/policy"> Политика конфиденциальности </router-link>
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
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "MyFooter",

   computed: {
      ...mapState(useAppStore, ["nav"]),
   },
};
</script>

<style lang="scss" scoped>
.footer {
   background-color: var(--color_bg_grey);

   &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;
      margin-bottom: 50px;
      padding: 60px 0 0 0;

      @include sm {
         grid-template-areas:
            "logo logo"
            "catalog client"
            "contact contact";
         grid-template-columns: 1fr 1fr;
         max-width: 540px;
         margin: 0 auto 50px auto;
      }

      @include md {
         margin: 0 0 50px 0;
         padding: 60px 30px 0 30px;
      }

      @include lg {
         grid-template-areas:
            "logo logo logo"
            "catalog client contact ";
         grid-template-columns: 1fr 1fr 1fr;
         max-width: 100%;
      }

      @include xxl {
         grid-template-areas: "logo catalog client contact ";
         grid-template-columns: 1fr 1fr 1fr 1fr;
         gap: 30px;
         max-width: 100%;
      }
   }

   &__logo {
      display: flex;
      flex-flow: column;
      gap: 10px;
      margin: 0 auto;

      &-link {
         display: block;
         width: 170px;
         height: 50px;
      }

      &-icon {
         width: 170px;
         height: 50px;
      }

      &-text {
         font: 400 16px/1.5 "AvenirNextCyr";
         text-align: center;
         color: var(--color_secondary);
         opacity: 0.7;

         @include md {
            text-align: left;
         }
      }

      @include sm {
         grid-area: logo;
      }

      @include md {
         margin: 0;
      }
   }

   &__catalog {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 25px;

      &-header {
         display: flex;
         align-items: center;
         gap: 10px;
         margin-left: -15px;

         @include md {
            margin-left: 0;
         }
      }

      &-title {
         font: 500 18px/1.5 "AvenirNextCyr";
         text-align: center;
         text-transform: uppercase;
      }

      &-icon {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 15px;
         height: 15px;
         fill: none;
      }

      &-nav {
         display: flex;
         flex-flow: column;
         align-items: center;
         gap: 15px;

         &-link {
            font: 400 16px/1.5 "AvenirNextCyr";
            color: var(--color_secondary);

            &:hover {
               color: var(--color_primary);
            }
         }

         @include md {
            align-items: flex-start;
         }
      }

      @include sm {
         grid-area: catalog;
      }

      @include md {
         align-items: flex-start;
      }
   }

   &__client {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 25px;

      &-header {
         display: flex;
         align-items: center;
         gap: 10px;
         margin-left: -15px;

         @include md {
            margin-left: 0;
         }
      }

      &-title {
         font: 500 18px/1.5 "AvenirNextCyr";
         text-align: center;
         text-transform: uppercase;
      }

      &-icon {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 15px;
         height: 15px;
         fill: none;
      }

      &-nav {
         display: flex;
         flex-flow: column;
         align-items: center;
         gap: 15px;

         &-link {
            font: 400 16px/1.5 "AvenirNextCyr";
            color: var(--color_secondary);

            &:hover {
               color: var(--color_primary);
            }
         }

         @include md {
            align-items: flex-start;
         }
      }

      @include sm {
         grid-area: client;
      }

      @include md {
         align-items: flex-start;
      }
   }

   &__contact {
      display: flex;
      flex-flow: column;
      align-items: center;

      &-header {
         display: flex;
         align-items: center;
         gap: 10px;
         margin-bottom: 25px;
         margin-left: -15px;

         @include md {
            margin-left: 0;
         }
      }

      &-title {
         font: 500 18px/1.5 "AvenirNextCyr";
      }

      &-icon {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 15px;
         height: 15px;
         fill: none;
      }

      &-tel {
         display: block;
         font: 600 24px/1.5 "AvenirNextCyr";
         color: var(--color_secondary);

         &-text {
            margin-bottom: 25px;
            color: var(--color_secondary);
            opacity: 0.7;
         }

         &:hover {
            color: var(--color_primary);
         }
      }

      &-email {
         display: block;
         margin-bottom: 20px;
         font: 600 24px/1.5 "AvenirNextCyr";
         text-align: center;
         color: var(--color_secondary);

         &:hover {
            color: var(--color_primary);
         }
      }

      .footer__props {
         display: flex;
         flex-flow: column;
         align-items: center;
         gap: 5px;
         margin-bottom: 30px;

         &-title {
            font: 500 16px/1.5 "AvenirNextCyr";
            opacity: 0.7;
         }

         &-info {
            font: 400 16px/1.5 "AvenirNextCyr";
            text-align: center;
            color: var(--color_secondary);
            opacity: 0.8;

            @include md {
               text-align: left;
            }
         }

         @include md {
            align-items: flex-start;
         }
      }

      .footer__social {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;

         &-icon {
            width: 40px;
            height: 40px;
            fill: none;
            color: var(--color_primary);
            transition: all 0.2s ease-in-out;
         }

         &-link {
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
               .footer__social-icon {
                  color: var(--color_btn_hover);
               }
            }
         }
      }

      @include sm {
         grid-area: contact;
      }

      @include md {
         align-items: flex-start;
      }
   }

   &__info {
      padding: 30px;
      border-top: 1px solid #e9e9e8;

      &-payment {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         margin-bottom: 30px;

         &-icon {
            width: 45px;
            height: 35px;
            fill: none;
         }

         @include md {
            order: 1;
            margin-bottom: 0;
         }

         @include lg {
            margin-left: -180px;
         }
      }

      .footer__copy {
         max-width: 190px;
         margin: 0 auto 15px auto;
         font: 400 14px/1.5 "AvenirNextCyr";
         text-align: center;
         color: var(--color_secondary);
         opacity: 0.8;

         @include md {
            order: 0;
            margin: 0;
            text-align: left;
         }

         @include lg {
            max-width: 100%;
         }

         @include xl {
            font: 400 16px/1.5 "AvenirNextCyr";
         }
      }

      .footer__dev {
         display: block;
         font: 400 14px/1.5 "AvenirNextCyr";
         text-align: center;
         color: var(--color_secondary);
         opacity: 0.8;

         &:hover {
            color: var(--color_primary);
         }

         @include md {
            order: 2;
         }

         @include xl {
            font: 400 16px/1.5 "AvenirNextCyr";
         }
      }

      @include sm {
         grid-area: info;
      }

      @include md {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
   }
}
</style>
