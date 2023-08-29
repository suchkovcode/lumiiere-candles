<template>
   <div class="menu" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Меню
      </canvas-header>
      <div class="menu__body">
         <nav class="menu__nav" @click="closeMenuClick">
            <ul class="menu__nav-list">
               <li class="menu__nav-item menu__drobdown">
                  <span class="menu__nav-link menu__drobdown-title" :class="{ active: isActiveCatalog }" @click="isActiveCatalog = !isActiveCatalog">
                     КАТАЛОГ
                  </span>
                  <ul class="menu__drobdown-submenu">
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog"> Все товары </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog/melts"> Мелтсы </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog/boxes"> Наборы </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog/postcard"> Открытки </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog/candles"> Соевые свечи </nuxt-link>
                     </li>
                  </ul>
               </li>
               <li class="menu__nav-item">
                  <nuxt-link class="menu__nav-link" to="/about" @click="emitCloseCanvas">О НАС</nuxt-link>
               </li>
               <li class="menu__nav-item menu__drobdown">
                  <span class="menu__nav-link menu__drobdown-title" :class="{ active: isActiveClient }" @click="isActiveClient = !isActiveClient">
                     Для клиента
                  </span>
                  <ul class="menu__drobdown-submenu">
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/care"> Уход </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/about"> О нас </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/partners"> Сотрудничество</nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/faq"> Ответы на вопросы </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/delivery"> Доставка и оплата </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/oferta"> Договор оферты </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/policy"> Политика конфиденциальности </nuxt-link>
                     </li>
                  </ul>
               </li>
               <li class="menu__nav-item">
                  <span ref="footerLink" class="menu__nav-link" @click="toScrollFooter">КОНТАКТЫ</span>
               </li>
            </ul>
         </nav>
         <div class="menu__cta">
            <p class="menu__body-cta-text">Соевые свечи ручной работы</p>
            <nuxt-link class="menu__cta-btn btn btn--menu" to="/catalog">В каталог</nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      activeState: {
         type: Boolean,
         required: true,
      },
   },

   emits: ["closeCanvas"],

   data() {
      return {
         isActiveCatalog: false,
         isActiveClient: false,
      };
   },

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },

      closeMenuClick(event) {
         event.target.classList.contains("menu__drobdown-link")
            ? (this.emitCloseCanvas(), (this.isActiveCatalog = false), (this.isActiveClient = false))
            : null;
      },

      toScrollFooter() {
         const footer = document.querySelector("#footer");
         this.emitCloseCanvas();
         footer.scrollIntoView({ behavior: "smooth" });
      },
   },
};
</script>

<style lang="scss">
.menu {
   position: fixed;
   top: 0;
   right: -100%;
   z-index: 50;
   display: block;
   width: 100%;
   height: 100dvh;
   max-width: 450px;
   background-color: var(--color_base);
   transition: right 0.3s ease-in-out;

   &__body {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      gap: 30px;
      width: 100%;
      height: 550px;
      padding: 25px;

      @include lg {
         padding: 30px;
      }
   }

   &__nav {
      &-list {
         display: flex;
         flex-flow: column;
         gap: 15px;
      }

      &-link {
         position: relative;
         font: 400 16px/1.3 "AvenirNextCyr";
         text-transform: uppercase;
         color: var(--color_secondary);
         transition: all 0.2s ease-in-out;

         &:hover {
            color: var(--color_primary);
         }

         @include md {
            font: 400 18px/1.3 "AvenirNextCyr";
         }
      }
   }

   &__drobdown {
      cursor: pointer;

      &-submenu {
         display: none;
         flex-flow: column;
         gap: 10px;
         padding: 10px;
      }

      &-title {
         &::before {
            content: "";
            position: absolute;
            top: 8px;
            right: -25px;
            display: block;
            border-top: 6px solid var(--color_primary);
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
            border-radius: 1px;
         }

         &:hover {
            color: var(--color_primary);
         }

         &.active + .menu__drobdown-submenu {
            display: flex;
         }

         &.active::before {
            border-top: 0 solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid var(--color_primary);
            border-left: 4px solid transparent;
         }
      }

      &-link {
         color: var(--color_secondary);
         transition: all 0.2s ease-in-out;

         &:hover {
            color: var(--color_primary);
         }
      }
   }

   &__cta {
      display: flex;
      flex-flow: column;
      gap: 20px;

      &-text {
         font: 400 14px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
         opacity: 0.8;

         @include md {
            font: 400 16px/1.3 "AvenirNextCyr";
         }
      }
   }

   &.active {
      right: 0;
   }
}
</style>
