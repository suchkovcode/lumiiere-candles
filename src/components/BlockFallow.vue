<template>
   <div class="fallow">
      <div class="fallow__header">
         <img class="fallow__icon" src="@/assets/img/svg/home__follow-icon.svg" loading="lazy" alt="Иконка" width="100" height="43" />
         <h2 class="title fallow__title">Подпишитесь на нашу рассылку</h2>
      </div>
      <p class="subtitle fallow__subtitle">
         Мы ценим ваше доверие и не хотим завалиться в спам. Просто иногда будем делиться с вами анонсом новиночек, классными акциями и персональными
         предложениями.
      </p>
      <form class="fallow__form" action="#" method="post">
         <input class="fallow__input" type="email" name="email" placeholder="Ваш E-mail" autocomplete="email" required />
         <button class="fallow__btn" type="submit">Подписаться</button>
      </form>
   </div>
</template>

<script>
export default {};
</script>

