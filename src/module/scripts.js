
import "Root/routers/router";
import "Root/module/class/route";
import "Root/module/class/header";

import { data } from "Root/assets/data/products";
import { GenerateCatalog } from "Root/module/class/generateCatalog";
import { Tabs } from "Root/module/class/tab";
import { Slider } from "Root/module/class/slider";

window.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      new GenerateCatalog("#popular-catalog", data);
      new Slider(".slider-wrapper");
      new Tabs(".tabs", ".tab-content");
   }, 1500);
});
