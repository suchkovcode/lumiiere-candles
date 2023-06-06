import "Root/routers/router";
import "Root/module/class/route";

import { data } from "Root/assets/data/products";
import { GenerateCatalog } from "Root/module/class/generateCatalog";
import { Slider } from "Root/module/class/slider";
import { Tabs } from "Root/module/class/tab";
import { Backet } from "Root/module/class/backet";
import { Favorite } from "Root/module/class/favorite";

window.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      new Backet().init();
      
      new Favorite();
      try {
         new GenerateCatalog("#popular-catalog", data);
      } catch (err) {}
      try {
         new Slider(".slider-wrapper");
      } catch (err) {}
      try {
         new Tabs(".tabs", ".tab-content");
      } catch (err) {}
   }, 1500);
});
