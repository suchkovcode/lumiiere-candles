export class Slider {
   constructor(selector) {
      this.el = document.querySelector(selector);
      this.item = this.el.querySelectorAll(".slider-item");
      this.init();
   }

   init() {
      const sliderItem = this.item;
      let index = 0;
      setInterval(() => {
         index++;
         sliderItem.forEach((element) => element.classList.remove("active"));

         if (index < sliderItem.length) {
            sliderItem[index].classList.add("active");
         } else {
            index = 0;
            sliderItem[index].classList.add("active");
         }
      }, 5000);
   }
}
