import { CardCatalog } from "../markup/cardCatalogMarkup";
import { CardFunctions } from "./cardFunctionsActivation";
import { CardAddFavorite } from "./cardAddFavorite";
import { CardAddBacket } from "./cardAddBacket";

export class GenerateCatalog {
   static nameStorageItemsCard = "backetElements";

   constructor(target, data) {
      this.el = document.querySelector(target);
      this._data = data;
   }

   render() {
      const markup = this._data.map((item, index) => new CardCatalog(item, index).html());
      this.el.innerHTML = markup.join("");

      new CardFunctions(this.el).init();
      new CardAddFavorite(this.el, this._data).init();
      new CardAddBacket(this.el, this._data).init();
   }
}
