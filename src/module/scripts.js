import "Root/routers/router";
import "Root/module/class/route";

import { data } from "Root/assets/data/products";
import { GenerateCatalog } from "Root/module/class/catalog/generateCatalog";
import { Slider } from "Root/module/class/slider";
import { Tabs } from "Root/module/class/tab";
import { Backet } from "Root/module/class/canvas/backetCanvas";
import { Favorite } from "Root/module/class/canvas/favoriteCanvas";

window.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      new Backet().init();
      new Favorite().init();
      new GenerateCatalog("#popular-catalog", data).render();
      // new Slider(".slider-wrapper");
      // new Tabs(".tabs", ".tab-content");
   }, 1500);
});
