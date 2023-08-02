<template>
   <div class="search">
      <div class="search__input-box">
         <input class="search__input" type="search" placeholder="Свечи ароматические..." />
         <svg class="header__icon search__icon" fill="none" stroke="#777">
            <use xlink:href="@assets/img/svg/sprite.svg#search"></use>
         </svg>
      </div>
      <div class="search__close"></div>
      <div class="search__tag-box">
         <p class="search__tag">Cвечи</p>
         <p class="search__tag">Cпички</p>
         <p class="search__tag">Открытки</p>
         <p class="search__tag">Наборы</p>
         <p class="search__tag">Фильмы</p>
         <p class="search__tag">Аниме</p>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
   position: absolute;
   top: -300%;
   left: 0;
   z-index: 50;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   gap: 30px;
   width: 100%;
   padding: 60px;
   background-color: var(--color_base);
   transition: top 0.3s ease-in-out;
   box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 10%);

   &__input-box {
      position: relative;
      height: fit-content;
   }

   &__tag-box {
      display: flex;
      gap: 10px;
   }

   &__tag {
      cursor: pointer;
      padding: 5px 10px;
      border: 1px solid var(--color_border);
      border-radius: 50px;
      font: 400 14px/1.5 "AvenirNextCyr";
      color: #777;
   }

   &__input {
      width: 500px;
      padding: 22px 25px 22px 50px;
      border-radius: 50px;
      background-color: var(--color_input);
      
      @include md {
         width: 600px;
      }
   }

   &__icon {
      position: absolute;
      top: calc(50% - 11px);
      left: 15px;
      transform: rotate(90deg);
   }

   &__close {
      cursor: pointer;
      position: absolute;
      top: 25px;
      right: 25px;
      width: 24px;
      height: 24px;

      &::before {
         content: "";
         position: absolute;
         top: calc(50% - 1px);
         left: 0;
         display: block;
         width: 100%;
         height: 2px;
         background-color: var(--color_secondary);
         transform: rotate(45deg);
         transition: left 0.3s ease-in-out;
      }

      &::after {
         content: "";
         position: absolute;
         top: calc(50% - 1px);
         left: 0;
         display: block;
         width: 100%;
         height: 2px;
         background-color: var(--color_secondary);
         transform: rotate(-45deg);
         transition: left 0.3s ease-in-out;
      }

      &:hover {
         &::before {
            background-color: var(--color_primary);
         }

         &::after {
            background-color: var(--color_primary);
         }
      }
   }

   &.active {
      top: 0;
   }
}
</style>
