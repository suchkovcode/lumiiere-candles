import { CanvasMenu, CanvasFavorite, CanvasBacket, CanvasSearch } from "Assets/js/class/_header";
import { toggleMenuDrobdown } from "Components/canvas/_canvas";

function header() {
   const headerWrapper = document.querySelector(".header");
   const headerCanvas = document.querySelector(".canvas");
   const headerSearch = document.querySelector(".search");

   function toggleCanvas() {
      const headerBtnMenu = document.querySelector(".header__btn-menu");
      const headerBtnFavorite = document.querySelector(".header__btn-favorite");
      const headerBtnBacket = document.querySelector(".header__btn-backet");
      const headerBtnSearch = document.querySelector(".header__btn-search");

      function open(e) {
         const eventElement = e.currentTarget.className;
         e.preventDefault();
         if (eventElement === "header__btn-menu") {
            new CanvasMenu().render(headerCanvas);
            toggleMenuDrobdown();
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-favorite") {
            new CanvasFavorite().render(headerCanvas);
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-backet") {
            new CanvasBacket().render(headerCanvas);
            headerCanvas.classList.add("active");
         }
         if (eventElement === "header__btn-search") {
            headerSearch.classList.add("active");
         }

         headerWrapper.classList.add("active");
      }

      function close(e) {
         const eventElement = e.target.className;
         if (eventElement === "canvas__close") {
            headerCanvas.classList.remove("active");
            headerWrapper.classList.remove("active");
         }
         if (eventElement === "search__close") {
            headerSearch.classList.remove("active");
            headerWrapper.classList.remove("active");
         }
      }

      headerBtnMenu.addEventListener("click", open);
      headerBtnFavorite.addEventListener("click", open);
      headerBtnBacket.addEventListener("click", open);
      headerBtnSearch.addEventListener("click", open);
      headerCanvas.addEventListener("click", close);
      headerSearch.addEventListener("click", close);
   }
   toggleCanvas();
}
header();
