// @ts-nocheck
/* eslint-disable no-unused-vars */
import "Root/routers/router";
import "Root/module/class/route";

import { HeaderMenu } from "Root/module/class/headerMenu";
import { data } from "Root/assets/data/products";
import { GenerateCatalog } from "Root/module/class/catalog/generateCatalog";
import { Slider } from "Root/module/class/slider";
import { Tabs } from "Root/module/class/tab";
import { Backet } from "Root/module/class/canvas/backetCanvas";
import { Favorite } from "Root/module/class/canvas/favoriteCanvas";

window.addEventListener("DOMContentLoaded", () => {
   new HeaderMenu().init();
   new Backet().init();
   new Favorite().init();
   new GenerateCatalog("#popular-catalog", data).init("/");
   new Slider(".slider-wrapper").init("/");

   // new Tabs(".tabs", ".tab-content");
});
