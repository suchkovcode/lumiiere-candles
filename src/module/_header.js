import { CanvasMenu, CanvasFavorite, CanvasBacket } from "./_canvasItem";
import { toggleMenuDrobdown, close } from "./_canvas";

function header() {
   const headerWrapper = document.querySelector(".header");
   const headerCanvas = document.querySelector(".canvas");
   const headerSearch = document.querySelector(".search");

   function toggleCanvas() {
      const headerBtnMenu = document.querySelector(".header__btn-menu");
      const headerBtnFavorite = document.querySelector(".header__btn-favorite");
      const headerBtnBacket = document.querySelector(".header__btn-backet");
      const headerBtnSearch = document.querySelector(".header__btn-search");
      const headerBtnCatalog = document.querySelector(".header__left-drobdown");
      const headerBtnClient = document.querySelector(".header__right-nav");
      const headerBtnClientTitle = document.querySelector(".header__right-nav-item");

      function open(event) {
         const eventElement = event.currentTarget.className;

         if (eventElement === "header__btn-menu" && window.innerWidth <= 1199) {
            new CanvasMenu().render(headerCanvas);
            toggleMenuDrobdown();
            headerWrapper.classList.add("active");
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-menu" && window.innerWidth >= 1200) {
            headerBtnCatalog.classList.toggle("active");
         }
         if (eventElement === "header__btn-favorite") {
            new CanvasFavorite().render(headerCanvas);
            headerWrapper.classList.add("active");
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-backet") {
            new CanvasBacket().render(headerCanvas);
            headerWrapper.classList.add("active");
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-search") {
            headerWrapper.classList.add("active");
            headerSearch.classList.add("active");
         }
         if (eventElement === "header__right-nav") {
            headerBtnClientTitle.classList.toggle("active");
         }
         close();
      }

      headerBtnMenu.addEventListener("click", open);
      headerBtnFavorite.addEventListener("click", open);
      headerBtnBacket.addEventListener("click", open);
      headerBtnSearch.addEventListener("click", open);
      headerBtnCatalog.addEventListener("click", open);
      headerBtnClient.addEventListener("click", open);
   }
   toggleCanvas();
}
header();
