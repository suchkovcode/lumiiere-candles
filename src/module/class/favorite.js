// @ts-nocheck
export class Favorite {
   constructor() {
      this.el = document.querySelector(".header");
      this.backet = this.el.querySelector(".favorite");
      this.list = this.el.querySelector(".favorite__list");
      this.open = this.el.querySelector(".header__btn-favorite");
      this.close = this.el.querySelector(".favorite__close");
      this.init();
   }

   init() {
      this.open.addEventListener("click", this);
      this.close.addEventListener("click", this);
   }

   handleEvent() {
      !this.backet.classList.contains("active") ? this.backet.classList.add("active") : this.backet.classList.remove("active");
   }
}
