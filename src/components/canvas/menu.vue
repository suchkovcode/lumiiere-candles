<template>
   <div class="menu" :class="{ active: activeState }">
      <canvas-header @close-canvas="$emit('closeCanvas', false)">
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
                        <nuxt-link class="menu__drobdown-link" to="/catalog/matches"> Открытки </nuxt-link>
                     </li>
                     <li class="menu__drobdown-item">
                        <nuxt-link class="menu__drobdown-link" to="/catalog/candles"> Соевые свечи </nuxt-link>
                     </li>
                  </ul>
               </li>
               <li class="menu__nav-item">
                  <nuxt-link class="menu__nav-link" to="/about" @click="$emit('closeCanvas', false)">О НАС</nuxt-link>
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
                        <nuxt-link class="menu__drobdown-link" to="/faqs"> Ответы на вопросы </nuxt-link>
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

<script setup>
const emit = defineEmits(["closeCanvas"]);
const props = defineProps({
   activeState: {
      type: Boolean,
      required: true,
   },
});

const isActiveCatalog = ref(false);
const isActiveClient = ref(false);

const closeMenuClick = (event) => {
   if (event.target.classList.contains("menu__drobdown-link")) {
      emit("closeCanvas", false);
      isActiveCatalog.value = false;
      isActiveClient.value = false;
   } else {
      return null;
   }
};

const toScrollFooter = () => {
   const footer = document.querySelector("#footer");
   emit("closeCanvas", false);
   footer.scrollIntoView({ behavior: "smooth" });
};
</script>
