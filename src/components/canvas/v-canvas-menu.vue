<template>
   <div class="menu" :class="{ active: activeState }">
      <v-canvas-header @closeCanvas="emitCloseCanvas"> Меню </v-canvas-header>
      <div class="menu__body">
         <nav class="menu__nav" @click="closeMenuClick">
            <ul class="menu__nav-list">
               <li class="menu__nav-item menu__drobdown">
                  <span class="menu__nav-link menu__drobdown-title" :class="{ active: isActiveCatalog }" @click="isActiveCatalog = !isActiveCatalog">
                     КАТАЛОГ
                  </span>
                  <ul class="menu__drobdown-submenu">
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Все товары </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Мелтсы </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Спички </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Наборы </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Открытки </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Бестселлеры </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/catalog"> Соевые свечи </router-link>
                     </li>
                  </ul>
               </li>
               <li class="menu__nav-item">
                  <router-link class="menu__nav-link" to="/about" @click="emitCloseCanvas">О НАС</router-link>
               </li>
               <li class="menu__nav-item menu__drobdown">
                  <span class="menu__nav-link menu__drobdown-title" :class="{ active: isActiveClient }" @click="isActiveClient = !isActiveClient">
                     Для клиента
                  </span>
                  <ul class="menu__drobdown-submenu">
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/care"> Уход </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/about"> О нас </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/partners"> Сотрудничество</router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/faq"> Ответы на вопросы </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/delivery"> Доставка и оплата </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/oferta"> Договор оферты </router-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <router-link class="menu__drobdown-link" to="/policy"> Политика конфиденциальности </router-link>
                     </li>
                  </ul>
               </li>
               <li class="menu__nav-item">
                  <span class="menu__nav-link" ref="footerLink" @click="toScrollFooter">КОНТАКТЫ</span>
               </li>
            </ul>
         </nav>
         <div class="menu__cta">
            <p class="menu__body-cta-text">Соевые свечи ручной работы</p>
            <router-link class="menu__cta-btn btn btn--menu" to="/catalog">В каталог</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   name: "v-canvas-menu",

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

   computed: {
      ...mapState(useAppStore, ["nav"]),
   },

   props: {
      activeState: {
         type: Boolean,
         required: true,
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
