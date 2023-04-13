export class Tabs {
   constructor(selectorTabs, selectContent) {
      this.tab = document.querySelector(selectorTabs);
      this.content = document.querySelector(selectContent);
      this.toggler = this.tab.querySelector(".tabs__toggle");
      this.options = this.tab.querySelectorAll(".tabs__option");
      this.input = this.tab.querySelectorAll(".tabs__option-input");
      this.box = this.content.querySelectorAll(".tab-box");
      this.state = false;
      this.init();
   }

   init() {
      this.tab.addEventListener("click", this);
      this.input[0].checked = true;
      this.box[0].classList.add("active");
   }

   handleEvent(event) {
      event.stopPropagation();
      if (this.toggler) {
         this.#handlerOptions(event);
      }
      if (event.target.type === "radio") {
         this.#handlerContent(event);
      }
   }

   #handlerOptions(event) {
      if (event.target === this.toggler && !this.state) {
         this.#open();
      } else {
         this.#close();
      }
      const option = event.target.classList.contains("tabs__option-input");

      if (option) {
         this.toggler.innerText = event.target.dataset.value;
         this.toggler.dataset.value = event.target.dataset.value;
      }
   }

   #handlerContent(event) {
      const currentElement = event.target.dataset.tab;
      this.box.forEach((element) => {
         element.classList.remove("active");
         if (element.dataset.tab === currentElement) {
            element.classList.add("active");
         }
      });
   }

   #open() {
      this.tab.classList.add("active");
      this.state = true;
   }

   #close() {
      this.tab.classList.remove("active");
      this.state = false;
   }
}

setTimeout(() => {
   new Tabs(".tabs", ".tab-content");
}, 500);
