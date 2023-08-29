<template>
   <div class="tabs" :class="{ active: isClickBtn }">
      <button class="tabs__toggle" type="button" @click="isClickBtn = !isClickBtn">
         {{ selectRadioContent }}
      </button>
      <div class="drobdown drobdown--width">
         <label v-for="item in tabsData" :key="item.id" class="tabs__option">
            <input
               v-model="selectedRadio"
               class="tabs__option-input"
               type="radio"
               name="radio"
               :value="item.value"
               :content="item.content"
               @change="updateTab"
               @click="isClickBtn = false" />
            <span class="upercase tabs__option-text">{{ item.content }}</span>
         </label>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      tabsData: {
         type: Array,
         required: true,
      },
   },

   emits: ["update:modelValue"],

   data() {
      return {
         selectedRadio: "",
         selectRadioContent: "",
         isClickBtn: false,
      };
   },

   mounted() {
      this.selectedRadio = this.tabsData[0].value;
      this.selectRadioContent = this.tabsData[0].content;
      this.$emit("update:modelValue", this.selectedRadio);
   },

   methods: {
      updateTab(event) {
         this.selectRadioContent = event.target.getAttribute("content");
         this.$emit("update:modelValue", event.target.value);
      },
   },
};
</script>

<style lang="scss" scoped>
.tabs {
   position: relative;
   margin-bottom: 30px;

   &__toggle {
      cursor: pointer;
      position: relative;
      display: block;
      width: 100%;
      height: 45px;
      padding: 10px 35px 10px 15px;
      border: 1px solid var(--color_border);
      border-radius: 0.3em;
      font: 500 16px/1.4 "Karton";
      letter-spacing: 2px;
      color: var(--color_secondary);

      &::before,
      &::after {
         content: "";
         position: absolute;
         top: 50%;
         display: block;
         width: 10px;
         height: 1px;
         border-radius: 1px;
         background-color: var(--color_secondary);
      }

      &::before {
         right: 17px;
         transform: rotate(45deg);
      }

      &::after {
         right: 10px;
         transform: rotate(-45deg);
      }

      &:focus-visible {
         outline: none;
      }

      &:hover {
         border: 1px solid var(--color_primary);
         color: var(--color_primary);

         &::before,
         &::after {
            background-color: var(--color_primary);
         }
      }

      @include lg {
         display: none;
      }
   }

   &__option {
      cursor: pointer;
      position: relative;
      display: block;
      width: 100%;
      font: 400 16px/1.5 "AvenirNextCyr";
      color: var(--color_secondary);

      &-text {
         display: block;
         padding: 15px;
         font: 500 16px/1.4 "Karton";
         letter-spacing: 2px;
         color: var(--color_secondary);
         transition: all 0.2s ease-in-out;

         @include lg {
            display: flex;
            justify-content: center;
            width: 100%;
         }
      }

      &-input {
         display: none;

         &:checked + .tabs__option-text {
            color: var(--color_base);
            background-color: var(--color_primary);
         }
      }

      &:hover > .tabs__option-text {
         color: var(--color_base);
         background-color: var(--color_primary);
      }

      @include lg {
         border-right: 1px solid var(--color_border);

         &:last-of-type {
            border-right: 0;
         }
      }
   }

   &.active {
      .tabs__toggle {
         border: 1px solid var(--color_primary);
         border-radius: 0.3em 0.3em 0 0;
         color: var(--color_primary);

         &::before {
            right: 17px;
            background-color: var(--color_primary);
            transform: rotate(-45deg);
         }

         &::after {
            right: 10px;
            background-color: var(--color_primary);
            transform: rotate(45deg);
         }
      }

      .drobdown {
         display: flex;
         scrollbar-width: none;
      }

      .drobdown::-webkit-scrollbar {
         width: 0;
      }
   }

   @include lg {
      .drobdown {
         overflow-y: hidden;
         position: relative;
         top: 0;
         display: flex;
         flex-flow: row;
         justify-content: center;
         margin: 0 auto;
         border: 1px solid var(--color_border);
         border-radius: 1em;
      }

      .drobdown::-webkit-scrollbar {
         width: 0;
      }
   }
}

/* stylelint-disable-next-line no-descending-specificity */
.drobdown {
   overflow-y: scroll;
   position: absolute;
   top: 45px;
   left: 0;
   z-index: 10;
   display: none;
   flex-flow: column;
   min-width: 240px;
   max-height: 300px;
   border-radius: 0 0 12px 12px;
   background-color: var(--color_base);
   box-shadow: 0 25px 45px 0 rgba(107, 107, 106, 5%);

   &--width {
      width: 100%;
   }
}
</style>
