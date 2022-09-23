export function slider() {
   const location = window.location.hash;

   // eslint-disable-next-line no-constant-condition
   if (window.location.hash === "#" || " ") {
      const sliderItem = document.querySelectorAll(".slider-item");
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
      }, 4000);
   }
}
setTimeout(slider, 600);
