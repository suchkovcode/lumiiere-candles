<template>
   <div class="fallow">
      <span class="fallow__header">
         <img
            class="fallow__icon"
            src="@/assets/img/svg/home__follow-icon.svg"
            loading="lazy"
            alt="Иконка"
            width="100"
            height="43" />
         <h2 class="title fallow__title">Подпишитесь на нашу рассылку</h2>
      </span>
      <p class="subtitle fallow__subtitle">
         Мы ценим ваше доверие и не хотим завалиться в спам. Просто иногда будем делиться с вами анонсом новиночек, классными акциями и
         персональными предложениями.
      </p>
      <form
         class="fallow__form"
         action="#"
         method="post">
         <input
            class="fallow__input"
            type="email"
            name="email"
            placeholder="Ваш E-mail"
            autocomplete="email"
            required />
         <button
            class="fallow__btn"
            type="submit">
            Подписаться
         </button>
      </form>
   </div>
</template>

<script>
export default {
   name: "BlockFallow",
};
</script>

<style lang="scss" scoped >
.fallow {
   overflow: hidden;
   position: relative;
   max-width: 480px;
   margin: 0 auto;
   padding: 60px 20px;
   border-radius: 35px;
   background-image: url("@/assets/img/webp/home__subscribe-bg.webp");
   background-position: 50% 30%;
   background-repeat: no-repeat;

   &__header {
      position: relative;
   }

   &__icon {
      position: absolute;
      top: -30px;
      left: 80px;
      z-index: 15;
      display: block;
      width: 100px;
      height: 43px;

      @include sm {
         left: 140px;
      }

      @include md {
         left: 220px;
      }

      @include lg {
         left: 10px;
      }
   }

   &__title {
      max-width: 420px;
      margin: 0 auto 30px auto;
      font-size: 30px;
      text-align: center;
      color: var(--color_secondary);

      @include sm {
         font-size: 38px;
      }

      @include md {
         font-size: 42px;
      }

      @include lg {
         margin: 0 0 30px 0;
         font-size: 44px;
         text-align: left;
      }
   }

   &__subtitle {
      max-width: 460px;
      margin: 0 auto;
      margin-bottom: 30px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: var(--color_secondary);

      @include lg {
         margin: 0 0 30px 0;
         text-align: left;
      }

      @include xl {
         font-size: 16px !important;
         font-weight: 400 !important;
      }
   }

   &__form {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 15px;

      @include lg {
         flex-flow: row;
         gap: 0;
      }
   }

   &__input {
      width: 100%;
      height: 70px;
      padding: 0 15px;
      border-radius: 50px;
      background-color: var(--color_base);

      @include lg {
         max-width: 460px;
      }
   }

   &__btn {
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70px;
      border-radius: 50px;
      font: 500 18px/1.5 "Karton";
      color: var(--color_base);
      background-color: var(--color_btn);
      transition: all 0.2s ease-in-out;

      &:hover {
         background-color: var(--color_btn_hover);
      }

      @include lg {
         max-width: 200px;
         margin-left: -200px;
      }
   }

   @include sm {
      max-width: 640px;
      padding: 90px 60px;
      background-size: cover;
   }

   @include lg {
      max-width: 100%;
      background-position: 0 60%;
   }

   @include xl {
      padding: 100px 100px;
      object-fit: fill;
   }
}
</style>
