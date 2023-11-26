<!-- eslint-disable vue/html-self-closing -->
<template>
   <div class="fallow">
      <img class="fallow__bg" src="@/assets/img/webp/home__subscribe-bg.webp" alt="picture" loading="lazy" width="300" height="595" />
      <div class="fallow__header">
         <img class="fallow__icon" src="@/assets/img/svg/fallow__header-icon.svg" alt="Иконка" width="100" height="43" />
         <h2 class="title fallow__title">Подпишитесь на нашу рассылку</h2>
      </div>
      <p class="subtitle fallow__subtitle">
         Мы ценим ваше доверие и не хотим завалиться в спам. Просто иногда будем делиться с вами анонсом новиночек, классными акциями и персональными
         предложениями.
      </p>
      <div class="fallow__form">
         <input class="fallow__input" type="email" name="email" placeholder="Ваш E-mail" autocomplete="email" required />
         <button class="fallow__btn" type="button">Подписаться</button>
      </div>
   </div>
</template>
