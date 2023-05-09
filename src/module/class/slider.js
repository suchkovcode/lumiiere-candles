export class Slider {
   constructor(selector) {
      this.el = document.querySelector(selector);
      this.item = this.el.querySelectorAll(".slider-item");
      this.dots = this.el.querySelector(".slider-dots");
      this.init();
   }

   init() {
      this.#dots();
      const dotsItem = this.el.querySelectorAll(".slider-dots__item");
      let index = 0;
      setInterval(() => {
         index++;
         this.item.forEach((element) => this.#sliderhHide(element));
         dotsItem.forEach((element) => this.#dotHide(element));

         if (index < this.item.length) {
            this.#sliderShow(index);
            this.#dotShow(index);
         } else {
            index = 0;
            this.#sliderShow(index);
            this.#dotShow(index);
         }
      }, 5000);
   }

   #dots() {
      for (let index = 0; index < this.item.length; index++) {
         const second = index === 0 ? "active" : "";
         const html = `<span class="slider-dots__item ${second}" data-index="${index}"></span>`;
         this.dots.insertAdjacentHTML("beforeend", html);
      }
      this.#dotsChange();
   }

   #dotsChange() {
      const dotsItem = this.el.querySelectorAll(".slider-dots__item");
      dotsItem.forEach((element) => {
         element.addEventListener("click", (event) => {
            const { index } = event.target.dataset;
            this.item.forEach((element) => this.#sliderhHide(element));
            dotsItem.forEach((element) => this.#dotHide(element));
            this.#sliderShow(index);
            this.#dotShow(index);
         });
      });
   }

   #dotShow(index) {
      const dotsItem = this.el.querySelectorAll(".slider-dots__item");
      dotsItem[index].classList.add("active");
   }

   #dotHide(item) {
      item.classList.remove("active");
   }

   #sliderShow(indexItem) {
      this.item[indexItem].classList.add("active");
   }

   #sliderhHide(item) {
      item.classList.remove("active");
   }
}
