/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
// @ts-nocheck
export class Slider {
   constructor(selector) {
      this.el = selector;
      this.item = ".slider-item";
      this.dots = ".slider-dots";
   }

   init(renderUrl) {
      this.#isRenderPage(renderUrl);
      window.addEventListener("hashchange", () => {
         this.#isRenderPage(renderUrl);
      });
   }

   #changeSlider() {
      setTimeout(() => {
         this.#dots();

         const parentElement = document.querySelector(this.el);
         const sliderItem = parentElement.querySelectorAll(this.item);
         const dotsItem = parentElement.querySelectorAll(".slider-dots__item");
         let index = 0;
         setInterval(() => {
            index++;
            sliderItem.forEach((element) => this.#sliderhHide(element));
            dotsItem.forEach((element) => this.#dotHide(element));

            if (index < sliderItem.length) {
               this.#sliderShow(index);
               this.#dotShow(index);
            } else {
               index = 0;
               this.#sliderShow(index);
               this.#dotShow(index);
            }
         }, 5000);
      }, 500);
   }

   #dots() {
      const parentElement = document.querySelector(this.el);
      const sliderItem = parentElement.querySelectorAll(this.item);
      const dotsContainer = parentElement.querySelector(this.dots);

      for (let index = 0; index < sliderItem.length; index++) {
         const second = index === 0 ? "active" : "";
         const html = `<span class="slider-dots__item ${second}" data-index="${index}"></span>`;
         dotsContainer.insertAdjacentHTML("beforeend", html);
      }
      this.#dotsChange();
   }

   #dotsChange() {
      const parentElement = document.querySelector(this.el);
      const sliderItem = parentElement.querySelectorAll(this.item);
      const dotsItem = parentElement.querySelectorAll(".slider-dots__item");

      dotsItem.forEach((element) => {
         element.addEventListener("click", (event) => {
            const { index } = event.target.dataset;

            sliderItem.forEach((element) => this.#sliderhHide(element));
            dotsItem.forEach((element) => this.#dotHide(element));

            this.#sliderShow(index);
            this.#dotShow(index);
         });
      });
   }

   #dotShow(index) {
      const parentElement = document.querySelector(this.el);
      const dotsItem = parentElement.querySelectorAll(".slider-dots__item");
      dotsItem[index].classList.add("active");
   }

   #dotHide(item) {
      item.classList.remove("active");
   }

   #sliderShow(indexItem) {
      const parentElement = document.querySelector(this.el);
      const sliderItem = parentElement.querySelectorAll(this.item);
      sliderItem[indexItem].classList.add("active");
   }

   #sliderhHide(item) {
      item.classList.remove("active");
   }

   #getFragmentUrl() {
      const matchLocation = window.location.href.match(/#([^#]*)(\?.*)?$/)[1];
      let fragmentLocation = "";
      matchLocation === "" ? (fragmentLocation = "/") : (fragmentLocation = matchLocation);
      return fragmentLocation;
   }

   #isRenderPage(renderUrl) {
      return this.#getFragmentUrl() === renderUrl ? this.#changeSlider() : false;
   }
}
