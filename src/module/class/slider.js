/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
// @ts-nocheck
export class Slider {
   constructor() {
      this.el = ".slider-wrapper";
   }

   init(renderUrl) {
      this.#isRenderPage(renderUrl);
      window.addEventListener("hashchange", () => {
         this.#isRenderPage(renderUrl);
      });
   }

   #renderDots() {
      const sliderContainer = document.querySelector(this.el);
      const sliderItem = sliderContainer.querySelectorAll(".slider-item");
      const dotsContainer = sliderContainer.querySelector(".slider-dots");

      for (let index = 0; index < sliderItem.length; index++) {
         const firstDots = index === 0 ? "active" : "";
         const html = `<span class="slider-dots__item ${firstDots}" data-index="${index}"></span>`;
         dotsContainer.insertAdjacentHTML("beforeend", html);
      }

      this.#changeDots();
   }

   #changeSlider() {
      setTimeout(() => {
         this.#renderDots();
      }, 800);
   }

   #changeDots() {
      const sliderContainer = document.querySelector(this.el);
      const sliderItem = sliderContainer.querySelectorAll(".slider-item");
      const dotsItem = sliderContainer.querySelectorAll(".slider-dots__item");

      dotsItem.forEach((element) => {
         element.addEventListener("click", (event) => {
            const { index } = event.target.dataset;
            sliderItem.forEach((element) => this.#itemHide(element));
            dotsItem.forEach((element) => this.#itemHide(element));
            this.#itemShow(index);
         });
      });
   }

   #itemShow(indexItem) {
      const sliderContainer = document.querySelector(this.el);
      const sliderItem = sliderContainer.querySelectorAll(".slider-item");
      const dotsItem = sliderContainer.querySelectorAll(".slider-dots__item");

      sliderItem[indexItem].classList.add("active");
      dotsItem[indexItem].classList.add("active");
   }

   #itemHide(item) {
      item.classList.remove("active");
   }

   #getFragmentUrl() {
      const matchLocation = window.location.href.match(/#([^#]*)(\?.*)?$/);
      let fragmentLocation = "";
      if (matchLocation === null) {
         fragmentLocation = "/";
      } else {
         matchLocation[1] === "" ? (fragmentLocation = "/") : (fragmentLocation = matchLocation[1]);
      }
      return fragmentLocation;
   }

   #isRenderPage(renderUrl) {
      return this.#getFragmentUrl() === renderUrl ? this.#changeSlider() : false;
   }
}
