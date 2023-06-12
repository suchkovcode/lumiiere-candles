// @ts-nocheck
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
import { CardCatalog } from "../markup/cardCatalogMarkup";
import { CardFunctions } from "./cardFunctionsActivation";
import { CardAddFavorite } from "./cardAddFavorite";
import { CardAddBacket } from "./cardAddBacket";

export class GenerateCatalog {
   static nameStorageItemsCard = "backetElements";

   constructor(target, data) {
      this.el = target;
      this.data = data;
   }

   init(renderUrl) {
      this.#isRenderPage(renderUrl);
      window.addEventListener("hashchange", () => {
         this.#isRenderPage(renderUrl);
      });
   }

   #render() {
      setTimeout(() => {
         const renderContainer = document.querySelector(this.el);
         const markup = this.data.map((item, index) => new CardCatalog(item, index).html());
         renderContainer.innerHTML = markup.join("");

         new CardFunctions(renderContainer).init();
         new CardAddFavorite(renderContainer, this.data).init();
         new CardAddBacket(renderContainer, this.data).init();
      }, 500);
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
      this.#getFragmentUrl() === renderUrl ? this.#render() : false;
   }
}
