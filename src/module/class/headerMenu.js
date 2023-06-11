// @ts-nocheck
export class HeaderMenu {
   constructor() {
      this.el = document.querySelector(".header");
      this.rightNav = this.el.querySelector(".header__right-nav");
   }

   init() {
      const currentItem = this.rightNav.querySelector(".header__right-nav-item");
      this.rightNav.addEventListener("mouseover", () => {
         currentItem.classList.add("active");
         this.rightNav.classList.add("active");
      });

      this.rightNav.addEventListener("mouseout", () => {
         currentItem.classList.remove("active");
         this.rightNav.classList.remove("active");
      });
   }
}
