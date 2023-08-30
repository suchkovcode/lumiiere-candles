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
